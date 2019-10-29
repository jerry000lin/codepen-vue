import Vue from "vue";
import Loading from "./circleLoading.vue";
import { addClass, removeClass, getStyle } from "element-ui/lib/utils/dom";
import afterLeave from "element-ui/lib/utils/after-leave";
const Mask = Vue.extend(Loading);

const loadingDirective = {};
loadingDirective.install = Vue => {
  const toggleLoading = (el, binding) => {
    if (binding.value) {
      el.originalPosition = getStyle(el, "position");
      insertDom(el, el, binding);
    } else {
      afterLeave(
        el.instance,
        () => {
          if (!el.instance.hiding) return;
          el.domVisible = false;
          const target = el;
          removeClass(target, "el-loading-parent--relative");
          removeClass(target, "el-loading-parent--hidden");
          el.instance.hiding = false;
        },
        300,
        true
      );
      el.instance.visible = false;
      el.instance.hiding = true;
    }
  };
  const insertDom = (parent, el) => {
    if (
      !el.domVisible &&
      getStyle(el, "display") !== "none" &&
      getStyle(el, "visibility") !== "hidden"
    ) {
      if (
        el.originalPosition !== "absolute" &&
        el.originalPosition !== "fixed"
      ) {
        addClass(parent, "el-loading-parent--relative");
      }
      el.domVisible = true;
      parent.appendChild(el.mask);
      Vue.nextTick(() => {
        if (el.instance.hiding) {
          el.instance.$emit("after-leave");
        } else {
          el.instance.visible = true;
        }
      });
      el.domInserted = true;
    } else if (el.domVisible && el.instance.hiding === true) {
      el.instance.visible = true;
      el.instance.hiding = false;
    }
  };

  Vue.directive("crius-loading", {
    bind: function(el, binding) {
      const mask = new Mask({
        el: document.createElement("div")
      });
      el.instance = mask;
      el.mask = mask.$el;
      binding.value && toggleLoading(el, binding);
    },

    update: function(el, binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },
    unbind: function(el) {
      if (el.domInserted) {
        el.mask &&
          el.mask.parentNode &&
          el.mask.parentNode.removeChild(el.mask);
        toggleLoading(el, { value: false });
      }
      el.instance && el.instance.$destroy();
    }
  });
};

export default loadingDirective;

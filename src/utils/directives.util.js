import vClickAway from 'vue3-click-away';
import $ from 'jquery';

const vTooltip = (el, binding) => {
  $(el).tooltip({
    title: binding.value,
    placement: binding.arg,
    trigger: 'hover'
  });
};

const GlobalDirective = {
  install(Vue) {
    Vue.directive('tooltip', vTooltip);
    Vue.directive('click-outside', vClickAway);
  }
};

export default GlobalDirective;

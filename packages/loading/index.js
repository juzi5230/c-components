import loading from './src/main.vue';

loading.install = function (Vue) {
  Vue.component(loading.name, loading);
};

export default loading;
import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import config from "./config";
Vue.use(BootstrapVue);
import { HttpOptions, HttpResponse, $http, $resource, HttpHeaders } from "vue-resource/types/vue_resource";
Vue.config.productionTip = false
Vue.use(VueResource);
Vue.config.productionTip = false
declare module "vue/types/vue" {
  interface VueConstructor {
    http: {
      options: HttpOptions & { root: string };
      interceptors: any[];
      get: $http;
    };
  }
}
Vue.http.options.root = config.current.api;
new Vue({
  render: h => h(App),
}).$mount('#app')

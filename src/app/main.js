import Vue       from "vue";
import VueRouter from "vue-router";
import store from './store';
import App from './App.vue'
import {routes} from "./main.routes";


const postShell = () => import (/*webpackChunkName: postShell*/ "./main/shared/components/post-shell.vue");
const postForm = () => import (/*webpackChunkName: postForm*/ "./main/shared/components/post-form.vue");
const block = () => import(/*webpackChunkName: block*/ "./main/shared/components/block.vue");


Vue.use(VueRouter);

Vue.component("candorism-post", postShell);
Vue.component("candorism-post-form", postForm);
Vue.component("candorism-block", block);

Vue.config.productionTip = false

const router = new VueRouter({
    routes
});

new Vue({
    router,
    store,
    render: h =>h(App)
}).$mount('#app');
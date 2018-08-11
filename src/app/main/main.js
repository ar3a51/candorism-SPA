import Vue       from "vue";
import VueRouter from "vue-router";
import {routes} from "./main.routes";


const postShell = () => import (/*webpackChunkName: postShell*/ "./shared/components/post-shell.vue");
const postForm = () => import (/*webpackChunkName: postForm*/ "./shared/components/post-form.vue");
const block = () => import(/*webpackChunkName: block*/ "./shared/components/block.vue");


Vue.use(VueRouter);

Vue.component("candorism-post", postShell);
Vue.component("candorism-post-form", postForm);
Vue.component("candorism-block", block);


const router = new VueRouter({
    routes
});

new Vue({
    el: "#app",
    router,
    
});
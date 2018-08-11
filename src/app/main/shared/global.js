const postShell = () => import(/*webpackChunkName: "postShell"*/ "./components/post-shell.vue");
const postForm = () => import(/*webpackChunkName: "postForm"*/ "./components/post-form.vue");

export default {
        "candorism-post": postShell,
        "candorism-post-form": postForm,
}
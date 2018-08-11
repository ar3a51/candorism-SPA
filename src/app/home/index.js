import Vue              from 'vue';
const candorismHeader = ()=> import('./header/candorismHeader.vue');
const loginTab =  ()=> import('./login-tab/login-tab.vue');


//import (/*webpackChunkName: "landingpage"*/ "../../sass/pages/landing-page.scss");
/*import ("../../sass/theme-styles/_variables.scss");
import ("../../sass/theme-styles/_mixins.scss");
import ("../../sass/theme-styles/_bootstrap-customization.scss");
import ("../../sass/theme-styles/_header.scss");
import ("../../sass/blocks/_forms.scss");*/



let app = new Vue({
    el: "#app",
    data() {
        return {
            message: "hello world",
        }
    },
    components: {
        "candorism-header": candorismHeader,
        "candorism-login": loginTab,
    },
    methods: {
        click() {
            this.message = event;
        },
        initProgressBar() {
            var $progress_bar = $('.skills-item');

            $progress_bar.each(function () {
                $progress_bar.appear({ force_process: true });
                $progress_bar.on('appear', function () {
                    var current_bar = $(this);
                    if (!current_bar.data('inited')) {
                        current_bar.find('.skills-item-meter-active').fadeTo(300, 1).addClass('skills-animate');
                        current_bar.data('inited', true);
                    }
                });
            });
        },
    },
    mounted() {
        //this.initHeader();
        this.initProgressBar();
    },
});
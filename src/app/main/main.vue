<template>
    <section id="app" class="col-xs-12 no">
        <!-- Fixed Sidebar Left -->
    <candorism-left-sidebar></candorism-left-sidebar>
        <!-- ... end Fixed Sidebar Left -->
        <!-- Fixed Sidebar Left -->
        <candorism-left-sidebar-responsive></candorism-left-sidebar-responsive>
        <!-- ... end Fixed Sidebar Left -->
        <!-- Fixed Sidebar Right -->
        <candorism-right-sidebar></candorism-right-sidebar>
        <!-- ... end Fixed Sidebar Right -->
        <!-- Fixed Sidebar Right-Responsive -->
        <candorism-right-sidebar-responsive></candorism-right-sidebar-responsive>
        <!-- ... end Fixed Sidebar Right-Responsive -->
        <!-- Header-BP -->
        <candorism-header></candorism-header>
        <!-- ... end Header-BP -->
        <!-- Responsive Header-BP -->
        <candorism-header-responsive></candorism-header-responsive>
        <!-- ... end Responsive Header-BP -->
        <div class="header-spacer"></div>
        <div class="container">
        <router-view></router-view>
        </div>
    <!-- <div class="container">
            
        </div>-->

        <!-- Window-popup Update Header Photo -->
        <candorism-update-photo></candorism-update-photo>
        <!-- ... end Window-popup Update Header Photo -->
        <!-- Window-popup Choose from my Photo -->
        <candorism-choose-my-photo></candorism-choose-my-photo>
        <!-- ... end Window-popup Choose from my Photo -->

        <a class="back-to-top" href="#">
            <img src="svg-icons/back-to-top.svg" alt="arrow" class="back-icon">
        </a>


        <!-- Window-popup-CHAT for responsive min-width: 768px -->
        <candorism-chat></candorism-chat>
        <!-- ... end Window-popup-CHAT for responsive min-width: 768px -->
    </section>
</template>
<script>
import sidebarLeftComponent from './components/sidebar-left.vue';
import sidebarRightComponent from './components/sidebar-right.vue';
import headerComponent from './components/header.vue';
import UpdatePhotoComponent from './components/update-photo.vue';

const sidebarLeftResponsiveComponent = () => import('./components/sidebar-left-responsive.vue');
const sidebarRightResponsiveComponent = () => import('./components/sidebar-right-responsive.vue');
const headerResponsiveComponent = () => import("./components/header-responsive.vue");
const chooseMyPhotoComponent = () => import("./components/choose-my-photo.vue");
const chatComponent = () => import("./components/chat.vue");

export default {
    components: {
    "candorism-left-sidebar": sidebarLeftComponent,
    "candorism-left-sidebar-responsive": sidebarLeftResponsiveComponent,
    "candorism-right-sidebar": sidebarRightComponent,
    "candorism-right-sidebar-responsive": sidebarRightResponsiveComponent,
    "candorism-header": headerComponent,
    "candorism-header-responsive": headerResponsiveComponent,
    "candorism-update-photo": UpdatePhotoComponent,
    "candorism-choose-my-photo": chooseMyPhotoComponent,
    "candorism-chat": chatComponent,
    },
    methods: {
        init : function() {
            var $document = $(document),
            $body = $('body')
            var action;

        //Scroll to top.
            jQuery('.back-to-top').on('click', function () {
                $('html,body').animate({
                    scrollTop: 0
                }, 1200);
                return false;
            });
        

        
            $(document).on("touchstart mousedown",".number-spinner button",function(){
                var btn = $(this);
                var input = btn.closest('.number-spinner').find('input');
                btn.closest('.number-spinner').find('button').prop("disabled", false);

                if (btn.attr('data-dir') == 'up') {
                    action = setInterval(function () {
                        if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                            input.val(parseInt(input.val()) + 1);
                        } else {
                            btn.prop("disabled", true);
                            clearInterval(action);
                        }
                    }, 50);
                } else {
                    action = setInterval(function () {
                        if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                            input.val(parseInt(input.val()) - 1);
                        } else {
                            btn.prop("disabled", true);
                            clearInterval(action);
                        }
                    }, 50);
                }
            });
            $(document).on("touchend mouseup",".number-spinner button",function() {
                clearInterval(action);
            });
        }
    },
    mounted: function () {
        this.init();
    }
}
</script>
<style lang="sass" scoped>

</style>

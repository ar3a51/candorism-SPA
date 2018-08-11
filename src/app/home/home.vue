<template>
    <section id="app" class="landing-page">
        <div class="content-bg-wrap">
            <div class="content-bg"></div>
        </div>
        <candorism-header></candorism-header>
        <div class="header-spacer--standard"></div>
        <div class="container">
            <div class="row display-flex">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div class="landing-content">
                        {{message}}
                        <a href="#" class="btn btn-md btn-border c-white" v-on:click.stop.prevent="click">Register Now!</a>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <candorism-login></candorism-login>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

const candorismHeader = ()=> import('./header/candorismHeader.vue');
const loginTab =  ()=> import('./login-tab/login-tab.vue');

export default {
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
}
</script>
<style lang="scss" scoped>

</style>



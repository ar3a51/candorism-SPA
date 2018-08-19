<template>
    <main>
        <header>
            <div class="header col-12">
                <logo />
                <nav-panel />
            </div>
        </header>
        <article>
            <div class="banner col-12">

            </div>
            <div class="body col-12">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 float-left">
                    <cando-box />
                </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 float-left">
                    <cando-box />
                </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 float-left">
                    <cando-box />
                </div>
            </div>
            <div class="login-box 
                        d-none 
                        d-sm-none 
                        d-md-none 
                        d-lg-block 
                        d-xl-block">
               <login-form></login-form>
            </div>
            <div class="login-box-mobile 
                        d-lg-none 
                        d-xl-none">
                <login-form></login-form>
            </div>
        </article>
    </main>
</template>
<script>

const loginForm = () => import("./components/login-form");
const logo = () => import("./components/logo");
const navPanel = () => import ("./components/nav-panel");
const candoBox = () => import ("./components/cando-box");

export default {
    components:{
        loginForm,
        logo,
        navPanel,
        candoBox,
    }
}
</script>
<style lang="scss" scoped>

.float-left {
    float: left;
}

.float-right {
    float: right;
}

header {
    height: auto;
    float: left;
    position: fixed;
    z-index:2000;

    .header {
        height: 70px;
        background: #ffffff;
        box-shadow: 2px 1px 5px 6px #ccc;
        padding: 0px;
        display: flex;

    }
}
article {
    height: auto;
    margin-top: 70px;

    .banner {
        background-color: brown;
        height: 400px;
    }

    .body {
        padding-top: 40px;
        height: 400px;

        div {
            margin-left: auto;
            margin-right: auto;
        }
    }

    .login-box{
        position: absolute;
        z-index: 1000;
        border-radius: 4px;
        top: 15%;
        right: 10%;
        width: 400px;
        height: auto;
        background-color: white;
        box-shadow: 2px 0px 5px 2px #ccc;
    }

    .login-box-mobile {
        position: absolute;
        left: 15%;
        right: auto;
        z-index: 1000;
        width: 70%;
        top: 15%;
        background-color: white;
        border-radius: 4px;
        box-shadow: 2px 0px 5px 2px #ccc;

    }
}
</style>

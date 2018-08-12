<template>
    <main>
        <header>
            <div class="header col-xs-12"></div>
        </header>
        <article>
            <div class="banner col-xs-12"></div>
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
export default {
    components:{
        loginForm
    }
}
</script>
<style lang="scss" scoped>
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
    }
}
article {
    height: auto;
    margin-top: 70px;

    .banner {
        background-color: brown;
        height: 400px;
    }

    .login-box{
        position: absolute;
        z-index: 1000;
        border-radius: 4px;
        top: 30%;
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
        top: 30%;
        background-color: white;
        border-radius: 4px;
        box-shadow: 2px 0px 5px 2px #ccc;

    }
}
</style>

<template>
     <main>
           
            <div class="banner col-12">

            </div>
            <div class="body col-12">
                <cando-box>
                    <span slot="title">blablabla</span>
                    <div slot="content">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        
                    </div>
                </cando-box>
                <cando-box />
                <cando-box />
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
     </main>
</template>
<script>
const candoBox = () => import ("./components/cando-box");
const loginForm = () => import("./components/login-form");

export default {
    components: {
        candoBox,
        loginForm
    }
}
</script>
<style lang="scss" scoped>
main {
    height: auto;

    .banner {
        background-color: brown;
        height: 400px;
    }

    .body {
        padding-top: 40px;
        height: 400px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-flow: row wrap;
        
        div {
            margin-top: 30px;
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


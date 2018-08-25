<template>
    <main>
        <header>
            <div class="header col-12">
                <logo />
                <nav-panel />
            </div>
        </header>
        <article>
         <router-view></router-view>
        </article>
    </main>
</template>
<script>


const logo = () => import("../components/home-components/logo");
const navPanel = () => import ("../components/home-components/nav-panel");


export default {
    components:{
        logo,
        navPanel,
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
    margin-top: 80px;
}

</style>

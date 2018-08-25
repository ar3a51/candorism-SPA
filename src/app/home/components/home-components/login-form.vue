<template>
     <form class="form-group">
        <input type="text" class="form-control" placeholder="Username"/>
        <input type="password" class="form-control" placeholder="Password"/>
        <button class="btn btn-width-100 btn-sign-in">Sign In</button>
        <button class="btn btn-width-100 btn-sign-up" @click="signUp">Sign Up</button>
    </form>
</template>
<script>
export default {
    methods:{
        signUp: function(e) {
            e.preventDefault();
            
            this.$router.push({path: "registration"});
        }
    }
}
</script>
<style lang="scss" scoped>
    form {
        margin-top: 10%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10%;
        width: 90%;

        .form-control {
            margin-bottom: 10px;
        }

        .btn-sign-in {
            background-color: green;
        }

        .btn-sign-up {
            background-color: blue;
        }

        .btn-width-100 {
            width: 100%;
        }
    }
</style>

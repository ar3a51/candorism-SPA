<template>
     <form class="form-group">
        <input type="text" class="form-input" placeholder="Username"/>
        <input type="password" class="form-input" placeholder="Password"/>
        <button class="btn btn-width-100 btn-sign-in">Sign In</button>
        <button class="btn btn-width-100 btn-sign-up">Sign Up</button>
    </form>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    form {
        margin-top: 10%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10%;
        width: 90%;

        .form-input {
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

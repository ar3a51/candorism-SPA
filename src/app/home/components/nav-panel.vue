<template>
    <div class="nav-panel col-6">
        <ul>
            <li><router-link :to="{path: '/'}">Home</router-link></li>
            <li>about</li>
            <li><router-link :to="{path:'/registration'}">register</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .nav-panel {
        height: 70px;
        float: right;
        
        ul {
            display: flex;
            align-self: center;
            list-style-type: none;
           
            
            text-align: center;
            li {
                line-height: 70px;
                width: 100px;
                text-align: center;

                &:hover{
                    background-color: #ccc;
                }
            }

            
        }
    }
</style>


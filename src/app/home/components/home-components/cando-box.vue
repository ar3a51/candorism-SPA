<template>
    <div class="box">
        <div>
            <h1>
                <slot name="title"></slot>
            </h1>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .box {
        border-width: 0.1em;
        border-style: solid;
        border-color: #ccc;

        height: auto;
        width: 400px;

        border-radius: 20px;

        display: flex;
        justify-content: center;
    }
</style>

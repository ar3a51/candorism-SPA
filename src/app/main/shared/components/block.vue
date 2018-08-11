<template>
  <div class="ui-block">
    <div class="ui-block-title">
        <h6 class="title"><slot name="title"></slot></h6>
    </div>
    <div class="ui-block-content">

        <!-- W-Badges -->
       <slot></slot>
    </div>
</div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
})
</script>
<style lang="scss" scoped>

</style>



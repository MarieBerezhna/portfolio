<template>
    <div class="row main-header">
        <div class="wrapper mx-auto text-center col-10 col-md-3 mb-5" :style="'background-color:' + this.$store.state.color">

        <h2 class="display-4"> {{ text }} </h2>
    </div>
        </div>
</template>

<script>
    export default {
        name: 'MAinHeader',
        props: {text: String, color: String}
    }
</script>

<style lang="scss" scoped>
.wrapper {
        width: 100%;
        height: 5px;
        margin-top: 40px;
}
    h2 {
        color: #fff;
        font-family: fantasy;
        margin-top: -30px;
        text-shadow: 1px 1px 1px black;
    }
</style>
<template>
    <div class="row main-header py-5">
        <div class="wrapper mx-auto text-center col-10 col-md-3"
            :style="'background-color:' + this.$store.state.primary_color">
            <h2 class="display-4"> {{ text }} </h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainHeading',
        props: {
            text: String
        }
    }
</script>

<style lang="scss" scoped>
    .main-header {
        animation-name: slidein;
        animation-duration: 3s;

        .wrapper {
            width: 100%;
            height: 5px;
            margin-top: 40px;

            h2 {
                color: #fff;
                font-family: fantasy;
                margin-top: -30px;
                text-shadow: 1px 1px 1px black;
            }
        }
    }
</style>
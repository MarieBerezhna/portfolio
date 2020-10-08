<template>
    <a :href="url"> {{ name }} </a>
</template>

<script>
    export default {
        name: 'MenuLink',
        props: ['name', 'url']
    }
</script>

<style lang="scss" scoped>
    $green: #5BFFAA;

    li {
        width: auto;
    }

    a {
        position: relative;
        margin: 5% 10px;
        float: right;
        color: #fff;
        text-decoration: none;
        font-family: "AvantGarde Bold", Sans-serif;
        font-weight: 800;
        font-size: 1rem;
        text-align: center;
        color: #fff !important;

        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: $green;
            width: 0;
            height: 2px;
            -webkit-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
            -o-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
            transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
        }

        &:hover, &.active  {
            &:before {
                width: 100%;
            }
        }
    }
    .active {
        background: transparent;
    }
</style>
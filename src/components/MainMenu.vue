<template>
    <div>
        <nav>
            <a href="/">
                <img :src="require('../assets/logo.png')" alt="logo" class="logo">
            </a>
            <div class="header-right">
                <div class="toggle-icon" data-uk-toggle="target: #navbar-mobile">
                    <i></i>
                </div>
            </div>
            <ul>
                <li v-for="sec in sections" :key="sec.name" class="nav-link">
                    <a :href="'#' + sec.name.toLowerCase()">{{ sec.name.toUpperCase() }}</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'MainMenu',
        props: {
            sections: Array
        }
    }
</script>

<style lang="scss" scoped>
    .logo {
        width: 200px;
        height: 100px;
        position: fixed;
        top: 10px;
        left: 10px;
    }
    .header-right {
        display: flex;
        float: right;
        margin-right: 10px;
        justify-content: space-between;
        align-items: center;
        .toggle-icon {
            position: relative;
            width: 24px;
            height: 18px;
            cursor: pointer;
            i {
                color: #ffffff;
                position: absolute;
                top: 25px;
                left: 0;
                margin-top: -1px;
                color: #222;
                width: 100%;
                height: 2px;
                background: currentColor;
                background-image: initial;
                background-position-x: initial;
                background-position-y: initial;
                background-size: initial;
                background-attachment: initial;
                background-origin: initial;
                background-clip: initial;
                background-color: currentcolor;
                -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
                transition: all .3s cubic-bezier(.645, .045, .355, 1);
                &:before, &:after {
                    box-sizing: inherit;
                    position: absolute;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: inherit;
                    content: "";
                    -webkit-transition: width .3s cubic-bezier(.645, .045, .355, 1);
                    transition: width .3s cubic-bezier(.645, .045, .355, 1);
                }
                &::before {
                    top: 5px;
                }
                &::after {
                    top: 10px;
                }
            }
        }
    }

    nav {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.9);

        ul {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            list-style: none;

            li,
            a {
                margin: 1% 10px;
                float: right;
                color: #fff;
                text-decoration: none;
                font-family: "AvantGarde Bold", Sans-serif;
                font-weight: 800;
                width: 100px;
                min-width: 100px;
            }
        }
    }
</style>
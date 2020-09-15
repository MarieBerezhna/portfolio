<template>
    <div>
        <nav>
            <a href="/">
                <img :src="require('../assets/logo.png')" alt="logo" class="logo">
            </a>
            <div class="header-right closed">
                <div class="open" data-uk-toggle="target: #navbar-mobile">
                    <i></i>
                </div>
                <button class="close" type="button" data-uk-close="ratio: 2;">
                    <svg width="24" height="18" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"
                        data-svg="close-icon">
                        <line fill="none" stroke="#fff" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
                        <line fill="none" stroke="#fff" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
                    </svg>
                </button>
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
        },
        mounted () {
            var $ = require('jquery')    
            $('.close').on('click', () => {
                $('nav ul, .close').fadeOut()
                $('.open').delay(400).fadeIn()
            })
            $('.open').on('click', () => {
                $('.open').hide()
                $('nav ul, .close').css('display', 'flex')
                var list = $('nav ul li').toArray()
                var delay = 0
                for (var i = 0; i < list.length; i++) {
                    delay = delay + 400
                    $(list[i]).delay(delay).css('opacity', 1)
                }
            })
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
        z-index: 10;
    }

    .header-right {
        display: flex;
        float: right;
        margin: 10px;
        justify-content: space-between;
        align-items: center;
        .open, .close {
            position: relative;
            top: 25px;
        }
        .open {
        
            position: relative;
            width: 24px;
            height: 18px;
            cursor: pointer;
            top: 25px;

            i {
                color: #ffffff;
                position: absolute;

                left: 0;
                margin-top: -1px;
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

                &:before,
                &:after {
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
        .close {
            display: none;
            background-color: transparent;
            border: none;
            padding: 0;
        }
    }

    nav {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.9);
        height: 80px;

        ul {
            display: none;
            flex-direction: column;
            list-style: none;
            align-items: center;
            justify-content: center;
            margin-top: 80px;
            background-color: inherit;
            height: calc(100vh - 80px);
            padding-left: 0;
            li {opacity: 0;}
            li,
            a {
                margin: 5% 10px;
                float: right;
                color: #fff;
                text-decoration: none;
                font-family: "AvantGarde Bold", Sans-serif;
                font-weight: 800;
                font-size: 2rem;
                text-align: center;
            }
        }
    }

    @media (min-width: 992px) {
        .header-right {
            display: none;
        }

        nav ul {
            display: flex;
            flex-direction: row;
            height: unset;
            margin: 30px 0;
            justify-content: flex-end;
            list-style: none;
            li { opacity: 1;}
            li,
            a {
                font-size: 1rem;
                margin: 1% 10px;
            }
        }
    }
</style>
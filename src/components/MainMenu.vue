<template>
    <div>
        <nav :style="'border-bottom: 1px solid '+ this.$store.state.secondary_color">
            <a href="/">
                <img :src="require('../assets/logo.png')" alt="logo" class="logo">
            </a>
            <div class="header-right closed position-relative">
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
                <li v-for="sec in sections" :key="sec.id" class="nav-link">
                    <MenuLink :name="sec.name.toUpperCase()" :href="'#' + sec.name.toLowerCase()"
                        :class="{active: sec.id === 0}" />
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'MainMenu',
        components: {
            MenuLink: () => import('@/components/utils/MenuLink.vue')
        },
        props: {
            sections: Array
        },
        data() {
            return {
                scrolled: false
            }
        },
        methods: {
            menuToggle: function () {
                $('.close').on('click', () => {
                    $('.close').hide()
                    $('.open').delay(400).show()
                    $('nav ul').animate({
                        left: '100vw'
                    }, 200)
                })
                $('.open').on('click', () => {
                    $('.open').hide()
                    $('.close').css('display', 'flex')
                    $('nav ul').animate({
                        left: 0
                    }, 250)
                })
            },
            menuActivateSwitch: function () {
                let mainNavLinks = $(".nav-link");
                $('html, body').on('scroll', () => {
                     let fromTop = $("body").scrollTop() + 300;
                    $(mainNavLinks).each((el) => {
                        let item = $(mainNavLinks[el]).find('a')[0]
                        let hash = $(item).attr('href')
                        let section = document.querySelector(hash);
                        if (    section.offsetTop <= fromTop &&
                                section.offsetTop + section.offsetHeight > fromTop) {
                            $(item).addClass("active");
                        } else {
                            $(item).removeClass("active");
                        }
                    })
                })
            }
        },
        mounted() {
            this.menuToggle()
            this.menuActivateSwitch()
        }
    }
</script>

<style lang="scss" scoped>
    .logo {
        width: 200px;
        height: 100px;
        position: fixed;
        top: 0px;
        left: 10px;
        z-index: 10;
    }

    .header-right {
        display: flex;
        float: right;
        margin: 10px;
        justify-content: space-between;
        align-items: center;

        .open,
        .close {
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
        height: auto;
        min-height: 80px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.9);
        width: calc(100% - 12px);
        z-index: 11;

        ul {
            position: fixed;
            left: 100vw;
            height: calc(100vh - 80px);
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 80px;
            background-color: rgba(0, 0, 0, 0.9);
            height: calc(100vh - 80px);
            padding-left: 0;

        }
    }

    @media (min-width: 992px) {
        .header-right {
            display: none;
        }

        nav {
            height: 80px;
            max-height: 80px;

            ul {
                position: unset;
                flex-direction: row;
                height: unset;
                padding-top: 15px;
                padding-right: 50px;
                padding-bottom: 20px;
                margin-top: unset;
                justify-content: flex-end;
                background-color: transparent;

                li {
                    opacity: 1;
                }

                li,
                a {
                    margin: 1% 10px;
                }
            }
        }
    }
</style>
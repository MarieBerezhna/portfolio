<template>
    <div>
        <section id="projects" class="my-1 pt-4">
            <MainHeading text="Projects" />
            <div class="container-fluid mt-3 p-0">
                <div class="row projects-wrapper">
                    <div class="project position-relative" v-for="project in projects" :key="project.id"
                        :id="project.id"
                        :style="'background-image: url(' + require('../assets/projects/' + project.img)">
                        <div class="cover position-relative text-center">
                            <div class="content w-50 mx-auto">
                                <h3 :style="'border-bottom: 3px solid' + 
                                $store.state.primary_color" class="p-heading">
                                {{ project.name }}
                                </h3>
                                <p>{{ project.description }}</p>
                                <MainButton text="Open" :href="project.url" rel="noopener noreferrer" target="_blank"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="dots-wrapper row position-relative">
                    <div class="col text-center mt-3">

                        <span v-for="project in projects" :key="project.id">
                            <span :class="{active: project.id === projects.length -1 }" :item="project.id" class="dot"
                                @click="dotClick($event)"></span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'SeactionProjects',
        components: {
            MainHeading: () => import('@/components/utils/MainHeading.vue'),
            MainButton: () => import('@/components/utils/MainButton.vue')
        },
        data () {
            return {
                projects: [
                    {
                    id: 1,
                    name: 'Tomatick',
                    url: '/tomatick/',
                    img: 'tomatick.jpg',
                    description: 'Pomodoro clock',
                    tags: []
                    },
                    {
                    id: 2,
                    name: 'Wheel Of Fortune',
                    url: '/wheel/',
                    img: 'wheel.jpg',
                    description: 'Spinner game with HTML5 Canvas',
                    tags: []
                    },
                    {
                    id: 3,
                    name: 'DK Therapy',
                    url: 'https://dktherapy.co.il/',
                    img: 'dktherapy.jpg',
                    description: 'Massage Home Studio'
                    },
                    {
                    id: 4,
                    name: 'Polina Poliakova',
                    url: 'https://polinapoliakova.com',
                    img: 'polina.jpg',
                    description: 'Digital Artist Intro',
                    tags: []
                    },
                ],
            }
        },
        methods: {
            setStyles() {
                const num = $('.project').length
                const width = $('.project').width()
                const vm = this

                // set offscreen wrapper width
                $('.projects-wrapper').width(num * width)
                // add a dot for each offscreen item
                $('.project').each(function (el) {
                    let visible = vm.checkVisibleX($('.project'), el)
                    let spare = $('.dot')[$('.dot').length - 1]
                    if (visible && el > 0) {
                        $(spare).parent().remove()
                    } else {
                        let item = $('.project')[el]
                        $(item).addClass('init-hidden')
                    }
                })
                let styles = `<style>
                .active {
                    background: ` + this.$store.state.primary_color + `;
                }
                .dot {
                    border: 1px solid ` + this.$store.state.primary_color + `
                } </style>`
                $('#projects').prepend(styles)
            },
            dotClick(e) {
                const current = $('.dot.active');
                const cIdx = $('.dot.active').attr('item')
                const tIdx = $(e.target).attr('item')
                let dist = $('.project').width()
                dist = dist * Math.abs(tIdx - cIdx)
                let direction = tIdx > cIdx ? '-=' : '+='
                $('.project').animate({
                    left: direction + dist
                },100)
                $(current).removeClass('active')
                $(e.target).addClass('active')
            },
            activeDots: function () { //bug
                $('.container-fluid').on('scroll', function () {
                    $('.project').each((el) => {
                        let item =$('.project')[el]
                        let winSide = window.innerWidth - $(item).width() / 2
                        let itemSide = $(item).position().left   
                        if ( itemSide >= 0 && itemSide < winSide) {
                            let dot = $('.dot[item="'+  $(item).attr('id') +'"]')
                            $('.dot.active').removeClass('active')
                            $(dot).addClass('active')
                        }
                    })
                })
            }
        },
        mounted() {
            this.setStyles()
            this.activeDots()
            $($('.dot')[0]).addClass('active')
        }
    }
</script>

<style lang="scss" scoped>
    .dot {
        display: inline-block;
        margin-left: 10px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        cursor: pointer;
    }

    .container-fluid {
        height: 100vw;
        display: -webkit-box;
        overflow-y: hidden;
        overflow-x: auto;
    }

    .projects-wrapper {
        display: -webkit-box;
        overflow-y: hidden;
        overflow-x: auto;
    }

    .projects-wrapper::-webkit-scrollbar,
    .container-fluid::-webkit-scrollbar {
        display: none;
    }
    .project {
        padding: 0 !important;
        height: 100vw;
        width: 100vw;
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        transition: all 0.5s ease-out;
        -moz-transition: all 0.5s ease-out;
        -ms-transition: all 0.5s ease-out;
        -o-transition: all 0.5s ease-out;
        -webkit-transition: all 0.5s ease-out;

        .cover,
        .content,
        .p-heading {
            transition: all 0.5s ease-in;
            -moz-transition: all 0.5s ease-in;
            -ms-transition: all 0.5s ease-in;
            -o-transition: all 0.5s ease-in;
            -webkit-transition: all 0.5s ease-in;
            font-weight: 600;
        }

        &:hover {
            background-size: 120%;

            .cover {
                cursor: pointer;
                width: 100%;
                height: 100%;
                margin-top: 0;
                margin-left: 0;

                .content {
                    opacity: 1;
                    font-size: unset;

                    .p-heading {
                        font-size: 2rem;
                    }
                }
            }
        }

        .cover {
            width: 0;
            height: 0;
            margin-top: 50%;
            margin-left: 50%;
            background-color: rgba(0, 0, 0, 0.7);

            .content {
                padding-top: 30%;
                opacity: 0;
                font-size: 0;

                .p-heading {
                    font-size: 0;
                }
            }
        }
    }

    .dot-wrapper {
        margin-top: 33vw;
        text-align: center;
    }

    @media (min-width: 992px) {
        .container-fluid {
            height: 33vw;
        }

        .project {
            width: 33.33vw;
            height: 33vw;
            &:hover .content .p-heading {
                font-size: 3rem !important;
            }
        }
    }
</style>
<template>
    <div>
        <section id="projects" class="my-1 pt-4">
            <MainHeading text="Projects" />
            <div class="container-fluid mt-3 p-0">
                <div class="row projects-wrapper">
                    <div class="project position-relative"
                        :style="'background-image: url(' + require('../assets/projects/' + project.img)"
                        v-for="project in this.$store.state.projects" :key="project.id">
                        <div class="cover position-relative text-center">
                            <div class="content w-50 mx-auto">
                                <h5 :style="'border-bottom: 3px solid' + $store.state.primary_color">{{ project.name }}
                                </h5>
                                <p>{{ project.description }}</p>
                                <MainButton text="Open" :href="project.url" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="dots-wrapper row position-relative">
                    <div class="col text-center mt-3">

                        <span v-for="project in this.$store.state.projects" :key="project.id">
                            <span :class="{active: project.id === 0}" :item="project.id" class="dot"
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
                    let last = $('.dot')[$('.dot').length - 1]
                    if (visible && el > 0) {
                        $(last).parent().remove()
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
            activeDots: function () {
                let vm = this;
                $('.container-fluid').on('scroll', function () {
                    let hiddens = $('.init-hidden');
                    $(hiddens).each((el) => {
                        let inView = vm.checkVisibleX($('.init-hidden'), el)
                        if (inView) {
                            $('.dot.active').removeClass('active')
                            $('.dot[item="' + el + '"]').addClass('active')
                        }
                    })
                })
            }
        },
        mounted() {
            this.setStyles()
            this.activeDots()
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
        h5 {
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

                    h5 {
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

                h5 {
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
            &:hover .content h5 {
                font-size: 3rem !important;
            }
        }
    }
</style>
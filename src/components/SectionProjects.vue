<template>
    <section id="projects" class="py-3">
        <MainHeading text="Projects" />
        <div class="container-fluid position-relative mt-3 mb-5 p-0">
            <div class="row position-absolute projects-wrapper">
                <div class="project" :style="'background-image: url(' + require('../assets/projects/' + project.img)"
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
                <div class="col text-center">
                    <span>
                        <span class="dot active" @click="dotClick($event)"></span>
                    </span>
                    <span v-for="project in this.$store.state.projects" :key="project.id + 1">
                        <span v-if="!checkVisible(project.id)" :item="project.id + 1" class="dot" 
                        @click="dotClick($event)"></span>
                    </span>
                </div>
            </div>
        </div>
    </section>
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
            dotClick(e) {
                console.log(e.target)
            },
            checkVisible(index) {
                $(document).ready(function () {
                    const el = $('.project')[index]
                    const win = $(window)[0]
                    const wView = {
                        left: $(win).scrollLeft(),
                        right: $(win).scrollLeft() + $(win).width()
                    }
                    const pView = {
                        left: $(el).position().left,
                        right: $(el).position().left + $(el).width()
                    }
                    // if (pView.right <= wView.right && pView.left >= wView.left) return true
                    // return false
                    if (pView.right <= wView.right && pView.left >= wView.left) { console.log(true) 
                     } else { console.log(false) }
                })

            }
        },
        mounted() {
            let num = $('.project').length
            let width = $('.project').width()
            //let projects = $('.project')
            let vm = this
            // set offscreen wrapper width
            $('.projects-wrapper').width(num * width)
            // add a dot for each offscreen item
            $('.project').each(function (el) {
                let item = $('.project')[el]
                console.log(item)
                let visible = vm.checkVisible(el)
                console.log(visible)
            })
            $('.active').css('background', this.$store.state.primary_color)
            $('.dot').css({
                border: '1px solid ' + this.$store.state.primary_color
            })
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

    .project {
        padding: 0 !important;
        height: 100vw;
        width: 100vw;
    }

    .project {
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        transition: all 2s ease-in;
        -moz-transition: all 2s ease-in;
        -ms-transition: all 2s ease-in;
        -o-transition: all 2s ease-in;
        -webkit-transition: all 2s ease-in;

        .cover,
        .content,
        h5 {
            transition: all 0.5s ease-in;
            -moz-transition: all 0.5s ease-in;
            -ms-transition: all 0.5s ease-in;
            -o-transition: all 0.5s ease-in;
            -webkit-transition: all 0.5s ease-in;
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
                        font-size: 3rem;
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
        }
    }
</style>
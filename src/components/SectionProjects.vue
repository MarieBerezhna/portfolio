<template>
    <section id="projects" class="py-3">
        <MainHeading text="Projects" />
        <div class="container-fluid mt-3 mb-5 p-0" @touchend="onScroll($event)">
            <div class="row projects-wrapper"  >
                <div class="project position-relative"   :style="'background-image: url(' + require('../assets/projects/' + project.img)"
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

                    <span v-for="project in this.$store.state.projects" :key="project.id">
                        <span :class="{active: project.id === 0}" :item="project.id" class="dot"
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
            setStyles() {
                const num = $('.project').length
                const width = $('.project').width()
                const vm = this

                // set offscreen wrapper width
                $('.projects-wrapper').width(num * width)
                // add a dot for each offscreen item
                $('.project').each(function (el) {
                    let visible = vm.checkVisible($('.project'), el)
                    let dot = $('.dot')[el]
                    if (visible && el > 0) {
                        $(dot).remove()
                    }
                })
                let styles = `<style>
                .active {
                    background: `+ this.$store.state.primary_color + `;
                }
                .dot {
                    border: 1px solid ` +this.$store.state.primary_color+ `
                } </style>`
                $('#projects').prepend(styles)
            },
            dotClick(e) {
                const current = $('.dot.active');
                const cIdx = $('.dot').index('.active')
                const tIdx = $('.dot').index(e.target)
                let dist = $('.project').width()
                dist = dist * (tIdx - cIdx)
                let direction = cIdx >= 0? '-=': '+='
                $('.project').delay(500).animate({ left: direction + dist })
                $(current).removeClass('active')
                $(e.target).addClass('active')
            },
            onScroll (e) {
                if (e.cancelable) {
                    e.preventDefault();
                }
                      setTimeout (function () {   
                if (!this.scrolled) {
                    const unit = $('.project').width()
                    let cOffset = $(e.target).parent('.projects-wrapper').position().left
                    cOffset = Math.abs(cOffset)
                    let dist = cOffset % unit
                    console.log(dist)
                    let direction = dist >= unit/2 ? '-=': '+='
                    $('.project').delay(250).animate({ left: direction + dist })
                    this.scrolled = true
                }
         
                    this.scrolled = false
                }, 800)
            }
        },
        mounted() {
            this.setStyles()
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
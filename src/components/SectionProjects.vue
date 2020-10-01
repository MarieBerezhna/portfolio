<template>
    <div>
        <section id="projects" class="py-3">
            <MainHeading text="Projects" />
            <div class="container-fluid mt-3 mb-5">
                <div class="row">
                    <div class="col-md-4 project"
                        :style="'background-image: url(' + require('../assets/projects/' + project.img)"
                        v-for="project in this.$store.state.projects" :key="project.id">
                        <div class="cover position-relative text-center">
                            <div class="content w-50 mx-auto">
                                <h5 :style="'border-bottom: 3px solid' + color">{{ project.name }}</h5>
                                <p>{{ project.description }}</p>
                                <MainButton text="Open" :href="project.url" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'SeactionProjects',
        components: {
            MainHeading: () => import('@/components/utils/MainHeading.vue'),
            MainButton: () => import('@/components/utils/MainButton.vue')
        },
        data() {
            return {
                color: this.$store.state.color
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container-fluid,
    .project {
        padding: 0 !important;
    }

    .project {
        width: 100vw;
        height: 100vw;
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

    @media (min-width: 992px) {
        .project {
            width: 33vw;
            height: 33vw;
        }
    }
</style>
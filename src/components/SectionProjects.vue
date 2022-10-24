<template>
    <div>
        <section id="projects" class="my-1 pt-4">
            <MainHeading text="Projects" />
            <div class="container mt-3 p-0">
                <div class="row projects-wrapper">
                    <div class="project position-relative" v-for="(project, i) in projects" :key="i"
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
        </section>
    </div>
</template>

<script>
    // import $ from 'jquery'
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
                        name: 'Tomatick',
                        url: '/tomatick/',
                        img: 'tomatick.jpg',
                        description: 'Pomodoro clock',
                    },
                    {
                        name: 'Wheel Of Fortune',
                        url: '/wheel/',
                        img: 'wheel.jpg',
                        description: 'Spinner game HTML5 Canvas',
                    },
                    {
                        name: 'Polina Poliakova',
                        url: 'https://polinapoliakova.com',
                        img: 'polina.jpg',
                        description: 'Digital Artist Intro',
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
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

    @media (min-width: 992px) {

        .project {
            width: 33%;
            height: 25vw;
            &:hover .content .p-heading {
                font-size: 2rem !important;
            }
        }
    }
</style>
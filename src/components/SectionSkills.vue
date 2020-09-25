<template>
    <div>
        <section id="skills">
            <MainHeader text="Skills" />
            <ParticlesBall v-if="window.outerWidth < 992"/>

            <div class="container mt-3 mb-5 text-center position-relative">
                <div class="row py-4 skillset mx-auto" v-for="(skillset, key) in this.$store.state.skills" :key="key">
                    <h4 class="col-12 my-4 pb-3">
                        {{ key.toUpperCase().split('_').join(' ') }}
                    </h4>

                    <div v-for="skill in skillset" :key="skill.id" class="col skill text-center mx-2 hideme">
                        <img :src="require('../assets/png/skills/' + skill.name.toLowerCase() + '.png')"
                            :alt="skill.name">
                        <p>{{ skill.name }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import MainHeader from '@/components/utils/MainHeader.vue'
    export default {
        name: 'SeactionSkills',
        components: {
            MainHeader,
            ParticlesBall: () => import('@/components/art/ParticlesBall.vue')
        },
        created() {
            this.window = window
        },
        mounted() {
            //  document.getElementsByClassName('bouncingball')[0].style.backgroundColor = this.$store.state.color;
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;

        .skill {
            -webkit-animation-name: bounceInDown;
            animation-name: bounceInDown;
        }

        h4 {
            font-family: "AvantGarde Bold", Sans-serif;
            font-weight: 800;
        }

        img {
            width: 30px;
            z-index: 1;
        }
    }

    .bouncingball {
        width: 14px;
        height: 14px;
        border-radius: 100%;
        animation: bounce 3s;
        transform: translateY(0px);
        animation-iteration-count: infinite;
        animation-delay: 2s;
        position: absolute;
        margin: 50px;
        z-index: 0;
    }

    @media (min-width: 992px) {
        .container img {
            width: 50px;
        }
    }
</style>
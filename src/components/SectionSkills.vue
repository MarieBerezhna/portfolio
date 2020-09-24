<template>
    <div>
        <section>
            <MainHeader text="Skills" />
            <div class="container mt-3 mb-5 text-center">
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
            MainHeader
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;

        h4 {
            font-family: "AvantGarde Bold", Sans-serif;
            font-weight: 800;
        }

        img {
            width: 30px;
        }
    }
      @media (min-width: 992px) {
         .container img { width: 50px; }
      }
</style>
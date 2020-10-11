<template>
  <div>
    <section id="skills" class="my-1 pt-4">
      <MainHeading text="Skills" />
      <ParticlesBall v-if="window.outerWidth < 992" style="height: 40vh" />

      <div class="container mt-3 position-relative">
        <div class="row">
        <div class="col-12 col-md-6" >
           <div class="skillset py-4 " v-for="(skillset, key) in this.$store.state.coreskills" :key="key">
            <h3 class="my-4 pb-3 text-center text-md-left">
              {{ key.toUpperCase().split('_').join(' ') }}
            </h3>
            <div class="row">
              <div v-for="skill in skillset" :key="skill.id" 
              class="col-6 col-md-3 skill text-center hideme mx-auto mx-md-0">
                <img :src="require('../assets/png/skills/' + skill.name.toLowerCase() + '.png')" :alt="skill.name">
                <p>{{ skill.name }}</p>
              </div>
            </div>
           </div>

        </div>
            <div class="col-12 col-md-6 py-4 text-center">
                <h4>I'm also:</h4>
                
                <div class="skillbox p-4 my-3" v-for="item in this.$store.state.extraskills" :key="item.id"
                :style="'background-color:' + $store.state.primary_color + 
                '; border: 5px solid '+ $store.state.secondary_color +
                '; text-align:left; color: black; font-size: 1.2rem'">
                  {{ item.text}}

                </div>
          </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'SeactionSkills',
    components: {
      MainHeading: () => import('@/components/utils/MainHeading.vue'),
      ParticlesBall: () => import('@/components/art/ParticlesBall.vue')
    },
    created() {
      this.window = window
    },
    methods: {
      showOnScroll() {
        /* Check the location of each desired element */
        $('.hideme').each(function () {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it in */
          if (bottom_of_window > bottom_of_object) {
            $(this).css({
              opacity: 1
            })
          }

        });
      }
    },
    mounted() {
      document.body.addEventListener('scroll', this.showOnScroll)

    },
    destroyed() {
      document.body.removeEventListener('scroll', this.showOnScroll)
    }
  }
</script>

<style lang="scss" scoped>
  .hideme {
    opacity: 0;
  }

  .container {
    display: flex;
    flex-direction: column;

    h4 {
      font-family: "AvantGarde Bold", Sans-serif;
      font-weight: 800;
    }

    img {
      width: 30px;
      z-index: 1;
    }
  }

  @media (min-width: 992px) {
    .container img {
      width: 50px;
    }
  }
</style>
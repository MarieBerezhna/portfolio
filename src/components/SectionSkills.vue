<template>
  <div>
    <section id="skills" class="my-1 pt-4">
      <MainHeading text="Skills" />
      <ParticlesBall v-if="window.outerWidth < 992" style="height: 40vh" />

      <div class="container mt-3 position-relative">
        <div class="row">
        <div class="col-12 col-md-6" >
           <div class="skillset py-4 " v-for="(skillset, key) in this.coreskills" :key="key">
            <h3 class="my-4 pb-3 text-center text-md-left">
              {{ key.toUpperCase().split('_').join(' ') }}
            </h3>
            <div class="row">
              <div v-for="(skill, i) in skillset" :key="i" 
              class="col-6 col-md-3 skill text-center hideme mx-auto mx-md-0">
                <img width="50" height="50"
                :src="require('../assets/png/skills/' + skill.toLowerCase() + '.png')" 
                :alt="skill">
                <p>{{ skill }}</p>
              </div>
            </div>
           </div>

        </div>
            <div class="col-12 col-md-6 py-4 text-center">
                <h4 style="font-weight: 400;font-family: 'AvantGarde Bold', Sans-serif;">I'm also:</h4>
                
                <div class="skillbox p-4 my-3" v-for="(item, i) in this.extraskills" :key="i"
                :style="'background-color:' + $store.state.primary_color + 
                '; border: 5px solid '+ $store.state.secondary_color +
                '; text-align:left; color: black; font-size: 1.2rem'">
                  {{ item }}

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
    data () {
      return {
          coreskills: {
            markup_and_layout: ['HTML', 'CSS', 'Bootstrap','SASS' ],
            client_and_server_side: ['JS', 'jQuery', 'Vue.js','Node.js' ],
            vcs_and_data_bases: ['Git', 'GitHub', 'MySQL', 'Postgres' ]
          },
          extraskills: [
            `Competent at working with design prototypes made in Figma and AdobeXD and
                      capable of getting along with other design tools. 
                      Have an eye for good design and following best practicies.`,
            `Knowledgeable about mobile-first development strategy, SEO, 
                      and perfomance optimization main principles.`,
            `Acquanted with Wordpress, cPanel interface and Linux environment.
                      Not afraid of command line and dealing with server issues.`,
            `Speaking English, Hebrew, Russian and Ukrainian. 
                        Currently obsessed with learning Afrikaans.`
          ],
      }
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
  }
</style>
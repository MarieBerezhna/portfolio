<template>
  <div>
    <section id="skills" class="my-1 pt-4">
      <MainHeading text="Skills" />
      <ParticlesBall v-if="window.outerWidth < 992" style="height: 40vh" />

      <div class="container mt-3 text-center position-relative">
        <div class="row py-4 skillset mx-auto" v-for="(skillset, key) in this.$store.state.skills" :key="key">
          <h4 class="col-12 my-4 pb-3">
            {{ key.toUpperCase().split('_').join(' ') }}
          </h4>

          <div v-for="skill in skillset" :key="skill.id" class="col skill text-center hideme">
            <img :src="require('../assets/png/skills/' + skill.name.toLowerCase() + '.png')" :alt="skill.name">
            <p>{{ skill.name }}</p>
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
    // height: 0;
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
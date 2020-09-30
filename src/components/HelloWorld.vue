<template>
  <div class="hello">
    <section id="home">
      <div id="homestyle">

      </div>
      <div class="row position-relative">
        <ParticlesBall v-if="window.outerWidth > 992" class="col-6 offset-6 position-absolute " />

        <div class="col-12 col-md-6" id="profile-image">

        </div>
        <div class="col-12 col-md-6 text-left my-md-auto greet position-absolute">

          <h1>Hello! <br> I'm <span :style="'color:' + color">Marie</span>,</h1>
          <p>Front End Developer</p>
          <MainButton text="Get In Touch" />
        </div>
      </div>
      <div class="container-fluid  d-flex justify-content-end">
        <div class="row col-md-10">

          <div v-for="box in this.$store.state.boxes" :key="box.id" class="infobox-outer col-12 col-md-4 my-5 my-md-1">
            <div class="infobox text-center mb-5" @mouseenter="boxHover" @mouseleave="boxHover"
              :class="{highlighted: box.highlighted}" :style="[box.highlighted ? 'color: ' + color: '']">
              <div class="img mx-auto">
                <img class="img w-25 my-3 my-md-4" :src="require('../assets/png/' + box.icon)" :alt="box.title">
              </div>
              <h2>{{ box.title }} </h2>
              <hr class="bg-dark w-50">
              <p class=" pb-5 px-2  text-left"> {{ box.content }} </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    components: {
      MainButton: () => import('@/components/utils/MainButton.vue'),
      ParticlesBall: () => import('@/components/art/ParticlesBall.vue')
    },
    data () {
      return {
        color: this.$store.state.primary_color
      }
    },
    methods: {
      boxHover(e) {
        e.stopPropagation()
        let primary = this.$store.state.primary_color
        let item = e.target
        if (!item.classList.contains('highlighted')) {
          item.style.backgroundColor = e.type === 'mouseenter' ? primary : "#3B3B3B"
          item.style.color = e.type === 'mouseenter' ? "#3B3B3B" : '#fff'
          item.getElementsByTagName('hr')[0].style.visibility = e.type === 'mouseenter' ? "visible" : "hidden"
        }
      }
    },
    created() {
      this.window = window
    },
    mounted() {
      let greenBox = document.getElementsByClassName('highlighted')[0];
      greenBox.style.backgroundColor = this.color
      greenBox.getElementsByTagName('hr')[0].style.visibility = "visible"

      let colorCss = `
      <style>
.infobox-outer:last-child .infobox::before {
    background-color: ` + this.color + `;
}
</style>
      `
      document.getElementById('homestyle').innerHTML = colorCss
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #profile-image {
    padding-left: 0;
    height: 100vh;
    // min-height: 500px;
    width: 100%;
    background-image: url(../assets/grey.jpg);
    background-size: 120%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .greet {
    top: 45vh;
    animation-duration: 3s;
    animation-name: slidein;
  }

  .infobox-outer {
    position: relative;
    color: #fff;

    .infobox {
      position: relative;
      min-height: 200px;
      padding: 0% 5% 15% 5%;
      margin-top: -35%;
      background-color: #3B3B3B;
      cursor: pointer;

      hr {
        visibility: hidden;
        height: 5px;
      }
    }

    &:last-child .infobox {
      &:hover {
        box-shadow: 0px 10px 50px 10px rgba(0,0,0,0.3);
      }

      &::before {
        content: '';
        position: absolute;
        bottom: -15px;
        right: -15px;
        width: 80%;
        height: 40%;
        z-index: -1;
      }
    }
  }

  @media (min-width: 992px) {
    #profile-image {
      background-size: 90%;
    background-position: left;
    }

    .greet {
      left: 45vw;

    }

    .infobox {
      height: 450px;
    }

  }
</style>
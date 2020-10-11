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

          <h1>Hello! <br> I'm <span :style="'color:' + $store.state.primary_color">Marie</span>,</h1>
          <p>Front End Developer</p>
          <span>
            <MainButton text="Get In Touch" :href="'#contact'"/>
          </span>
          
        </div>
      </div>
      <div class="container-fluid  d-flex justify-content-end">
        <div class="row col-md-10">

          <div v-for="box in this.$store.state.boxes" :key="box.id" 
          class="infobox-outer col-12 col-md-4 my-5 my-md-1"
          :class="[ window.innerWidth < 992 && box.highlighted ? 'margin-box-mob' : 'that']">
            <div class="infobox text-center mb-5" @mouseenter="boxHover" @mouseleave="boxHover"
              :class="{highlighted: box.highlighted}"
              >
              <div class="img mx-auto">
                <img class="img my-3 my-md-4" width="25%" height="25%"
                :src="require('../assets/png/' + box.icon)" :alt="box.title">
              </div>
              <h2>{{ box.title }} </h2>
              <hr class="w-50" :class="{'bg-dark' : box.highlighted}">
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
    methods: {
      boxHover(e) {
        e.stopPropagation()
        let primary = this.$store.state.primary_color
        let secondary = this.$store.state.secondary_color
        let item = e.target
        let hr = item.getElementsByTagName('hr')[0]
        if (!item.classList.contains('highlighted')) {
          item.style.backgroundColor = e.type === 'mouseenter' ? primary : secondary
          item.style.color = e.type === 'mouseenter' ? secondary : '#fff'
         hr.style.backgroundColor = e.type === 'mouseenter' ? "#343a40" : '#fff' 
        }
      }
    },
    created() {
      this.window = window
    },
    mounted() {
      let greenBox = document.getElementsByClassName('highlighted')[0];
      greenBox.style.backgroundColor = this.$store.state.primary_color
      greenBox.style.color = this.$store.state.secondary_color
      
      let colorCss = `
      <style>
      .infobox-outer:last-child .infobox::before {
          background-color: ` + this.$store.state.primary_color + `;
      }
      </style>`
      document.getElementById('homestyle').innerHTML = colorCss
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #profile-image {
    padding-left: 0;
    height: 85vh;
    width: 100%;
    background-image: url(../assets/grey.jpg);
    background-size: 120%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .greet {
    top: 30vh;
    animation-duration: 3s;
    animation-name: slidein;
  }
    .margin-box-mob {
      margin-top: 0 !important;
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
        height: 5px;
        background-color: #fff;
      }
    }

    &:last-child .infobox {
      &:hover {
        box-shadow: 0px 10px 50px 10px rgba(0, 0, 0, 0.3);
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
      height: 100vh;
      background-size: 90%;
      background-position: left;
    }

    .greet {
      left: 45vw;
      top: 45vh;
    }

    .infobox {
      height: 450px;
    }

  }
</style>
<template>
  <div class="hello">
    <section>
      <div class="row">
        <div class="col-12 col-md-6" id="profile-image">

        </div>
        <div class="col-12 col-md-6 text-left my-md-auto greet">
          <h1>Hello! <br> I'm <span :style="'color:' + color">Marie</span>,</h1>
          <p>Front End Developer</p>
          <MainButton text="Get In Touch" :color="color" />
        </div>
      </div>
      <div class="container-fluid  d-flex justify-content-end">
        <div class="row col-md-10">

          <div v-for="box in boxes" :key="box.id" class="infobox-outer col-12 col-md-4 my-5 my-md-1">
            <div class="infobox text-center mb-5" @mouseenter="boxHover" @mouseleave="boxHover"
              :class="{highlighted: box.highlighted}">
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
  import MainButton from '@/components/utils/MainButton.vue'
  export default {
    name: 'HelloWorld',
    components: {
      MainButton
    },
    props: {
      color: String
    },
    data() {
      return {
        boxes: [{
            id: 0,
            title: 'Responsive Web Design',
            icon: 'web-design.png',
            content: 'Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.',
            highlighted: true
          },
          {
            id: 1,
            title: 'Mobile-first development',
            icon: '003-analytics.png',
            content: 'A “mobile-first” approach involves designing a desktop site starting with the mobile version, which is then adapted to larger screens.'

          },
          {
            id: 2,
            title: 'Search Engine Optimization',
            icon: '001-analytics.png',
            content: 'Search engine optimization is the process of growing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine.'
          }
        ]
      }
    },
    methods: {
      boxHover(e) {
        e.stopPropagation()
        let primary = this.color
        let item = e.target
        if (!item.classList.contains('highlighted')) {
          item.style.backgroundColor = e.type === 'mouseenter' ? primary : "#3B3B3B"
          item.style.color = e.type === 'mouseenter' ? '#000' : '#fff'
          item.getElementsByTagName('hr')[0].style.visibility = e.type === 'mouseenter' ? "visible" : "hidden"
        }
      }
    },
    mounted() {
      let greenBox = document.getElementsByClassName('highlighted')[0];
      greenBox.style.backgroundColor = this.color
      greenBox.getElementsByTagName('hr')[0].style.visibility = "visible"
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #profile-image {
    height: 100vh;
    min-height: 500px;
    width: 100%;
    background-image: url(../assets/grey.jpg);
    background-size: 120%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .greet {
    margin-top: -50vh;
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

    .highlighted {
      color: #3B3B3B;
    }
  }

  @media (min-width: 992px) {
    #profile-image {
      background-size: 90%;
    }
    .greet {
      padding-left: 140px;

    }
    .infobox {
      height: 450px;
    }

  }
</style>
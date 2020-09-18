<template>
  <div class="hello">
    <section>
      <div class="row">
        <div class="col-12 col-md-6" id="profile-image">

        </div>
        <div class="col-12 col-md-6 text-left my-auto greet">
          <h1>Hello! <br> I'm <span :style="'color:' + color">Marie</span></h1>
          <p>Front End Developer</p>
        </div>
      </div>
      <div class="container-fluid  d-flex justify-content-end">
        <div class="row col-md-10">
          <div class="infobox-outer col-12 col-md-4">
            <div class="infobox my-2" >
              <h2>Responsive<br> Web Design</h2>
              <div class="img">
                <img class="img w-50 mx-auto" :src="require('../assets/png/web-design.png')" alt="">
              </div>
            </div>

          </div>
          <div class="infobox-outer col-10 col-md-4">
            <div class="infobox my-2" :style="'background-color:' + color">
              <h2>Mobile-first development</h2>
              <div class="img">
                 <img class="img w-50 mx-auto" :src="require('../assets/png/003-analytics.png')" alt="">
              </div>
            </div>
          </div>
          <div class="infobox-outer container col-10 col-md-4">
            <div class="infobox my-2">
              <h2>Search Engine Optimization</h2>
              <div class="img">
                <img class="img w-50 mx-auto" :src="require('../assets/png/001-analytics.png')" alt="">
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
    name: 'HelloWorld',
    props: {
      color: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #profile-image {
    height: 70vh;
    min-height: 700px;
    width: 100%;
    background-image: url(../assets/grey.jpg);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .greet {
    padding-left: 40px;
  }

  .infobox {
    position: relative;
    height: 80%;
    min-height: 150px;
    padding: 10% 5%;
    background-color: #3B3B3B;
  }

  .infobox-outer {
    position: relative;
    margin-top: -10%;
    color: #fff;
  }

  @media (min-width: 992px) {
    #profile-image {
      height: 120vh;
    }

    .greet {
      padding-left: 140px;
    }
  }
</style>
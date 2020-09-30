<template>
  <div id="app">
    <MainMenu :sections="this.$store.state.sections" />
    <HelloWorld :color="color" />
    <SectionSkills />
    <SectionProjects />
    <SectionContact />
    <MainFooter />
    <!-- <div>Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></div> -->
  </div>

</template>

<script>
  import MainMenu from './components/MainMenu.vue'
  import HelloWorld from './components/HelloWorld.vue'
  export default {
    name: 'App',
    components: {
      MainMenu,
      HelloWorld,
      SectionSkills: () => import('./components/SectionSkills.vue'),
      SectionProjects: () => import('./components/SectionProjects.vue'),
      SectionContact: () => import('./components/SectionContact.vue'),
      MainFooter: () => import('./components/MainFooter.vue')
    },
    data() {
      return {
        color: this.$store.state.color
      }
    }
  }
</script>

<style lang="scss">
  $green: #5BFFAA;

  @keyframes slidein {
    from {
      margin-top: -50vh;
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }

  * {
    -webkit-transition: all ease-in-out 0.5s;
    -moz-transition: all ease-in-out 0.5s;
    -o-transition: all ease-in-out 0.5s;
    transition: all ease-in-out 0.5s;
  }

  html,
  body {
    overflow: hidden;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: rgb(12, 13, 13) !important;
    margin: 0;
    overflow-y: scroll;
    max-height: 100vh;
    -webkit-transition: all ease-in-out 2s;
    -moz-transition: all ease-in-out 2s;
    -o-transition: all ease-in-out 2s;
    transition: all ease-in-out 2s;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ccc;
  }

  .row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  section {
    height: auto;
    min-height: 80vh;
    position: relative;
  }

  .main-header {
    animation-name: slidein;
    animation-duration: 3s;

  }

  a.main-btn {
    border: 2px solid $green;
  }

  a.main-btn::before {
    background-color: $green
  }

  a.main-btn {
    position: relative;
    color: #fff;

    z-index: 2;

    &:before {
      content: '';
      position: absolute;
      bottom: -1%;
      left: 0%;
      width: 0;
      height: 105%;
      -webkit-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
      -o-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
      transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
    }

    &:hover {


      &:before {
        width: 100%;
        z-index: -1;
      }
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ul {
    list-style: none;

    li {
      cursor: pointer;
    }
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: $green;
    border-radius: 10px;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    section {
      margin-top: 5vh;
    }
    section:first-child {
      margin-top: 0;
    }
  }
</style>
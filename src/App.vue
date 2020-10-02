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
    * {
    -webkit-transition: all ease-in-out 0.5s;
    -moz-transition: all ease-in-out 0.5s;
    -ms-transition: all ease-in-out 0.5s;
    -o-transition: all ease-in-out 0.5s;
    transition: all ease-in-out 0.5s;
    }
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

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    li {
      cursor: pointer;
    }
  }
  a.main-btn::before {
    background-color: $green
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: $green;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    section:not(:first-child) {
      margin-top: 5vh;
    }
  }
</style>
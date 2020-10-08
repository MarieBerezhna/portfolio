<template>
  <div id="app">
    <MainMenu :sections="this.$store.state.sections" />
    <HelloWorld />
    <SectionSkills />
    <SectionProjects />
    <SectionContact />
    <MainFooter />
  </div>

</template>

<script>
  import MainMenu from './components/MainMenu.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import SectionContact from './components/SectionContact.vue'
  export default {
    name: 'App',
    components: {
      MainMenu,
      HelloWorld,
      SectionContact,
      SectionSkills: () => import('./components/SectionSkills.vue'),
      SectionProjects: () => import('./components/SectionProjects.vue'),
      MainFooter: () => import('./components/MainFooter.vue')
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
    scroll-behavior: smooth;
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
    a {
      color: $green;
    }
  }

  .row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  section {
    min-height: 100vh;
    height: auto;
    position: static;
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
<template>
  <div id="app" >
    <MainMenu :sections="sections" />
    <HelloWorld :color="color"/>
    <MainFooter />
      <!-- <div>Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></div> -->
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainMenu from './components/MainMenu.vue'
import MainFooter from './components/MainFooter.vue'
export default {
  name: 'App',
  components: {
    MainMenu,
    HelloWorld,
    MainFooter
  },
  data () {
    return {
      color: '#5BFFAA',
      sections: [
        {
          name: 'Home'
        },
        {
          name: 'Skills'
        },
        {
          name: 'Projects'
        },
        {
          name: 'Contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$green: #5BFFAA;

html, body {
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
  text-align: center;
  color: #aaa;
}
.row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
section {
  height: auto;
  min-height: 100vh;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
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
</style>

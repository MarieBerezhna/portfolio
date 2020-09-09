<template>
  <div id="app">
    <MainMenu :sections="sections" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MainMenu
  },
  data () {
    return {
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

<style>
body {
  background-color: rgb(32, 23, 23);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aaa;
}
</style>

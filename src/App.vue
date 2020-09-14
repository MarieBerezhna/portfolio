<template>
  <div id="app">
    <MainMenu :sections="sections" />
    <HelloWorld msg="Welcome to Your Vue.js App" style="margin-top: 180px"/>
    
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
  },
  // mounted () {
  //   var $ = require('jquery')
  //   $(document).on('click', () => {
  //     console.log('Yayy')
  //   })
  // }
}
</script>

<style>
body {
  background-color: rgb(12, 13, 13);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aaa;
}
</style>

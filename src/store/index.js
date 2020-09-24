import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    color: '#5BFFAA',
    sections: [{
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
        ],
    skills: {
      markup_and_layout: [
        {
          id: 0,
          name: 'HTML',
          icon: ''
        },
        {
          id: 1,
          name: 'CSS',
          icon: ''
        },
        {
          id: 2,
          name: 'Bootstrap',
          icon: ''
        },
        {
          id: 3,
          name: 'SASS',
          icon: ''
        }
      ],
      client_side_programming: [
        {
          id: 0,
          name: 'JS'
        },
        {
          id: 1,
          name: 'jQuery',
          icon: ''
        },
        {
          id: 2,
          name: 'Vue.js',
          icon: ''
        }
      ],
      version_control: [{
          id: 0,
          name: 'Git',
          icon: ''
        },
        {
          id: 1,
          name: 'GitHub',
          icon: ''
        }
      ]
    }
  },
  mutations: {},
  actions: {}
});
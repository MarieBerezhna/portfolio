import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    primary_color: '#5BFFAA',
    secondary_color: '#3B3B3B',
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
    ],
    skills: {
      markup_and_layout: [{
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
      client_side_programming: [{
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
    },
    projects: [{
        id: 0,
        name: 'Tomatick',
        url: 'https://tomatick.webmarie.com',
        img: 'tomatick.jpg',
        description: 'Pomodoro clock',
        tags: []
      },
      {
        id: 1,
        name: 'Polina Poliakova',
        url: 'https://polinapoliakova.com',
        img: 'polina.jpg',
        description: 'Digital Artist Intro',
        tags: []
      },
      {
        id: 2,
        name: 'Wheel Of Fortune',
        url: '/wheel/',
        img: 'wheel.jpg',
        description: 'Spinner game with HTML5 Canvas',
        tags: []
      }
    ],
    footerlinks: [{
        id: 0,
        name: 'Terms of use & Privacy',
        code: 'tos'
      },
      {
        id: 1,
        name: 'Web Hosting',
        code: 'credits'
      }
    ]
  },
  mutations: {},
  actions: {}
});
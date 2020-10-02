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
        title: 'Creative Mindset',
        icon: 'web-design.png',
        content: `2+ years of experience in web development with a strong focus on front-end web applications,
          striving for responsive websites and user-friendly interfaces.
          Trying out different styles and creating my own, 
          as a naturally wondering creature, I like to play with things and see what happens.`,
        highlighted: true
      },
      {
        id: 1,
        title: 'Forever Student',
        icon: '003-analytics.png',
        content: `Passionate about solving challenging problems, 
        gaining knowledge and mastering  skills as technological tendencies evolve. 
        Exploring new things is an essential need for a healthy human consciousness, if you ask me.
        Shortly speaking, Google and Stackoverflow are my besties ;)
        `
      },
      {
        id: 2,
        title: 'Team Player',
        icon: '001-analytics.png',
        content: `Communication skills are vital nowadays.
        While most of my jobs are freelance projects, 
        I did work in a startup team for a while, and will gladly do it again.
        This experience taught me that we can achieve much more than we think, 
        when we know how to communicate clearly.
        `
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
    footerlinks: [
        { 
          id: 0, 
          name: 'Terms of use & Privacy', 
          code: 'tos',
          content: `The only information I collect on this webpage is your name, 
          phone number and email, when you make an enquiery with a contact form. 
          The only use of that information for me is to get back to you with answers, 
          I don't pass it to any third parties.`
        },
        {
          id: 1, 
          name: 'Credits', 
          code: 'credits',
          content: 'credits'
        }
    ]
  },
  mutations: {},
  actions: {}
});
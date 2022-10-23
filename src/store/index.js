import Vue from 'vue';
import Vuex from 'vuex';
import $ from 'jquery';
Vue.use(Vuex);
const Helper = {
  install(Vue) {
    Vue.prototype.showModal = (title, content) => {
      $('.modal').find('.modal-title').text(title);
      $('.modal').find('.modal-body p').html(content);
      $('.modal').fadeIn();
    };
    Vue.prototype.checkVisibleX = (selector, index) => {
      const el = $(selector)[index];
      const win = $(window)[0];
      const wView = {
        left: $(win).scrollLeft(),
        right: $(win).scrollLeft() + $(win).width()
      };
      const pView = {
        left: $(el).position().left,
        right: $(el).position().left + $(el).width()
      };

      if (pView.right <= wView.right && pView.left >= wView.left) return true;

      return false;
    };
  },
};
Vue.use(Helper);

const exp = new Date().getFullYear() - 2018;

const state = {
  primary_color: '#5BFFAA',
  secondary_color: '#3B3B3B',
  sections: [{
      id: 0,
      name: 'Home'
    },
    {
      id: 1,
      name: 'Skills'
    },
    {
      id: 2,
      name: 'Projects'
    },
    {
      id: 3,
      name: 'Contact'
    }
  ],
  boxes: [{
      id: 0,
      title: 'Creative Mindset',
      icon: 'puzzle.png',
      content: `${exp}+ years of experience in web development with a strong focus on front-end web applications,
          striving for responsive websites and user-friendly interfaces.
          Trying out different styles and creating my own, 
          as a naturally wondering creature, I like to play with things and see what happens.`,
      highlighted: true
    },
    {
      id: 1,
      title: 'Forever Student',
      icon: 'learning.png',
      content: `Passionate about solving challenging problems, 
        gaining knowledge and mastering  skills as technological tendencies evolve. 
        Exploring new things is an essential need for a healthy human consciousness, if you ask me.
        Shortly speaking, Google and Stackoverflow are my besties ;)
        `
    },
    {
      id: 2,
      title: 'Team Player',
      icon: 'teamwork.png',
      content: `Communication skills are vital nowadays.
        While most of my jobs are freelance projects, 
        I did work in a startup team for a while, and will gladly do it again.
        This experience taught me that we can achieve much more than we think, 
        when we know how to communicate clearly.
        `
    }
  ],
  coreskills: {
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
    client_and_server_side: [{
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
      },
      {
        id: 3,
        name: 'Node.js',
        icon: ''
      }
    ],
    vcs_and_data_bases: [{
        id: 0,
        name: 'Git',
        icon: ''
      },
      {
        id: 1,
        name: 'GitHub',
        icon: ''
      },
      {
        id: 2,
        name: 'MySQL',
        icon: ''
      },
      {
        id: 2,
        name: 'Postgres',
        icon: ''
      }
    ]
  },
  extraskills: [{
      id: 0,
      text: `Competent at working with design prototypes made in Figma and AdobeXD and
              capable of getting along with other design tools. 
              Have an eye for good design and following best practicies.`
    },
    {
      id: 1,
      text: `Knowledgeable about mobile-first development strategy, SEO, 
              and perfomance optimization main principles.`
    },
    {
      id: 2,
      text: `Acquanted with Wordpress, cPanel interface and Linux environment.
              Not afraid of command line and dealing with server issues.`

    },
    {
      id: 3,
      text: `Speaking English, Hebrew, Russian and Ukrainian. 
                Currently obsessed with learning Afrikaans.`
    }
  ],
  social_icons: [{
      name: 'facebook-f',
      url: 'https://www.facebook.com/WebMarieCreative'
    },
    {
      name: 'linkedin-in',
      url: 'https://www.linkedin.com/in/webmarie/'
    },
    {
      name: 'github',
      url: 'https://github.com/MarieBerezhna'
    }
  ],
};
const actions = {
  contact() {

  }
};
export default new Vuex.Store({
  state,
  actions
});
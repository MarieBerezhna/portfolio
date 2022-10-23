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

const state = {
  primary_color: '#5BFFAA',
  secondary_color: '#3B3B3B',
  coreskills: {
    markup_and_layout: [{
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'Bootstrap',
      },
      {
        name: 'SASS',
      }
    ],
    client_and_server_side: [{
        name: 'JS'
      },
      {
        name: 'jQuery',
      },
      {
        name: 'Vue.js',
      },
      {
        name: 'Node.js',
      }
    ],
    vcs_and_data_bases: [{
        name: 'Git',
      },
      {
        name: 'GitHub',
      },
      {
        name: 'MySQL',
      },
      {
        name: 'Postgres',
      }
    ]
  },
  extraskills: [{
      text: `Competent at working with design prototypes made in Figma and AdobeXD and
              capable of getting along with other design tools. 
              Have an eye for good design and following best practicies.`
    },
    {
      text: `Knowledgeable about mobile-first development strategy, SEO, 
              and perfomance optimization main principles.`
    },
    {
      text: `Acquanted with Wordpress, cPanel interface and Linux environment.
              Not afraid of command line and dealing with server issues.`

    },
    {
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
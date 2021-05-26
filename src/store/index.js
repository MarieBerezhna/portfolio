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
      content: `2+ years of experience in web development with a strong focus on front-end web applications,
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
      name: 'whatsapp',
      url: 'https://wa.me/972528316545'
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/webmariehosting/'
    },
    {
      name: 'github',
      url: 'https://github.com/MarieBerezhna'
    }
  ],
  projects: [{
      id: 0,
      name: 'Eli`s Pub',
      url: '/elispub/',
      img: 'elispub.jpg',
      description: 'Local Live Music Pub',
      tags: []
    },
    {
      id: 1,
      name: 'Tomatick',
      url: '/tomatick/',
      img: 'tomatick.jpg',
      description: 'Pomodoro clock',
      tags: []
    },
    {
      id: 2,
      name: 'Wheel Of Fortune',
      url: '/wheel/',
      img: 'wheel.jpg',
      description: 'Spinner game with HTML5 Canvas',
      tags: []
    },
    {
      id: 3,
      name: 'DK Therapy',
      url: 'https://dktherapy.co.il/',
      img: 'dktherapy.jpg',
      description: 'Massage Home Studio'
    },
    {
      id: 4,
      name: 'Polina Poliakova',
      url: 'https://polinapoliakova.com',
      img: 'polina.jpg',
      description: 'Digital Artist Intro',
      tags: []
    },
    {
      id: 5,
      name: 'Raffle ',
      url: 'https://raffle.allstars-it.com',
      img: 'raffle.jpg',
      description: `Fullstack project (Node.js, ejs, Postgres). 
        Landing page for an HR campaign.`,
      tags: []
    },
    {
      id: 6,
      name: "Friends",
      url: "https://friends.allstars-it.com/",
      img: 'friends.jpg',
      description: `Fullstack project (Node.js, Vue). 
        Landing page for an HR campaign.`,
      tags: []
    },
    {
      id: 7,
      name: "Tech Speaker",
      url: "https://techspeaker.allstars-it.com/",
      img: "allstars.jpg",
      description: "",
      tags: []
    }
  ],
  footerlinks: [{
      id: 0,
      name: 'Terms of use & Privacy',
      code: 'tos',
      content: `The only information I collect on this webpage is your name
           and your email, when you make an enquiery with a contact form. 
          The only use of that information for me is to get back to you with answers, 
          I don't pass it to any third parties.`
    },
    {
      id: 1,
      name: 'Credits',
      code: 'credits',
      content: `<div>Homepage icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">
          Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></div>
          <div>Design inspirations : <a href='https://gentium.pixerex.com/wp/'>Gentium</a></div>
          <div>Cool particles animation: <a href='https://codepen.io/natewiley/pen/GgONKy'>Nate Wiley</a></div>`
    }
  ]
};
const actions = {
  contact() {

  }
};
export default new Vuex.Store({
  state,
  actions
});
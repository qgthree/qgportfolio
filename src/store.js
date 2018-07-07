import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: 'explore',
    explore: 'projects',
    projects: [
      {
        id: '1',
        userImg: '/img/users/mod.jpg',
        role: 'Full Stack Development',
        client: 'Independent',
        img: '/img/projects/pj_banner.jpg',
        type: 'Web App',
        title: 'Playjournal',
        date: '2014 &ndash; 2016',
        description: 'Playjournal presents three primary actions to users: create video contests, enter video contests, and score entries. I created the web app and social platform to solve problems experienced by YouTubers who are overwhelmed with dozens of weekly "top plays" submissions, usually received by email.',
        codeURL: 'https://www.playjnl.com',
        projectURL: 'https://www.playjnl.com'
      },
      {
        id: '2',
        userImg: '/img/users/mod.jpg',
        role: 'Front-end Development',
        client: 'American Soc. of Hematology',
        img: '/img/projects/scdcoalition.png',
        type: 'Website',
        title: 'SCD Coalition Website',
        date: '2017 &ndash; 2018',
        description: `
          <span>ASH tasked me with constructing the Sickle Cell Disease Coalition website in GitHub Pages from an external designer's html. I proceeded to:</span>
          <ul>
            <li>Build reusable HTML components and construct the site with Jekyll and Liquid templating</li>
            <li>Work with ASH’s SCD Team to gather and create content</li>
            <li>Format content in markdown</li>
            <li>Develop interactive elements, including:
              <ul>
                <li>Pagination across collections
                <li>Membership application
                <li>Email signup form
              </ul>
            </li>
            <li>Integrate the GitHub repository with CloudCannon CMS</li>
            <li>Train the SCD Team to use CloudCannon for content management</li>
          </ul>
        `,
        codeURL: '',
        projectURL: 'http://www.scdcoalition.org'
      },
      {
        id: '3',
        userImg: '/img/users/mod.jpg',
        role: 'Front-end Development',
        client: 'American Soc. of Hematology',
        img: '/img/projects/citation.jpg',
        type: 'Widget',
        title: 'Hematology.org Citation Tool',
        date: '2017 &ndash; 2018',
        description: `
          ASH’s Scientific Affairs Team requested a tool to help researchers easily cite the <em>ASH Agenda for Hematology Research</em>, one of the Society’s online publications. Because website citations often provide the date a page was viewed, they would have to be created dynamically. Additionally, users would need the ability to download citations in various formats used with citation management software.
        `,
        codeURL: '',
        projectURL: 'http://www.hematology.org/Research/Recommendations/Agenda.aspx'
      },
      {
        id: '4',
        userImg: '/img/users/mod.jpg',
        role: 'Front-end Development',
        client: 'World Wildlife Fund',
        img: '/img/projects/monarch.jpg',
        type: 'Website',
        title: 'Monarch Milkweed Finder',
        date: '2016',
        description: `
          As part of an effort to bring attention to the threats faced by monarch butterflies, the World Wildlife Fund created a tool encouraging U.S. supporters to take action by planting milkweed in their home regions.<br /><br />
          I assisted with content, page layout, and interactive elements such as modals. I also integrated the page with the company’s CRM to automatically display the user’s region when signed in.
        `,
        codeURL: '',
        projectURL: 'https://support.worldwildlife.org/site/SPageServer?pagename=monarch_milkweed_finder'
      },
      {
        id: '5',
        userImg: '/img/users/mod.jpg',
        role: 'Front-end Development',
        client: 'American Soc. of Hematology',
        img: '/img/projects/trainee.png',
        type: 'Widget',
        title: 'Hematology Career Planner',
        date: '2017',
        description: `
          The ASH Trainee Council requested a tool to help trainees plan careers in hematology. After receiving a draft of the content, we wireframed a simple UI with elements resembling blood cells. The Trainee Council approved the design, and I used jQuery to build and animate the accordion-style widget.
        `,
        codeURL: '',
        projectURL: 'http://www.hematology.org/Career/Planner/'
      },
      {
        id: '6',
        userImg: '/img/users/mod.jpg',
        role: 'Full Stack Development',
        client: 'Training House LX',
        img: '/img/projects/weights.jpg',
        type: 'Website',
        title: 'Training House LX',
        date: '2015',
        description: `
          Training House LX desired a simple website to showcase the company's services and collect inquiries. I worked with the client to develop content, then used Bootstrap for an easy, responsive design. The site is connected to a Node backend utilizing Mailgun's email delivery API.
        `,
        codeURL: '',
        projectURL: 'https://www.traininghouselx.com'
      }
    ]
  },
  getters: {
    explore: state => state.explore,
    modal: state => state.modal,
    projects: state => state.projects
  },
  actions: {
    async newModal ({ commit, state }, view) {
      const modalClosed = (duration) => {
        return new Promise(resolve => {
          // close the modal, then wait a moment
          commit('setModal', 'explore')
          setTimeout(resolve, duration)
        })
      }
      if (state.modal === view) { // there's no change
        // do nothing
      }
      else if (view === 'explore') { // closing a modal
        document.body.removeAttribute('style')
        commit('setModal', 'explore')
      }
      else if (state.modal === 'explore') { // opening a modal
        document.body.style.overflow = 'hidden'
        commit('setModal', view)
      }
      else { // switching modals
        try {
          await modalClosed(100)
          commit('setModal', view)
        }
        catch (err) {
          console.log('error:' + err)
        }
      }
    }
  },
  mutations: {
    setModal (state, view) {
      state.modal = view
    },
    setExplore (state, view) {
      state.explore = view
    }
  }
})

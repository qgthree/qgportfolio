import Vue from 'vue'
import Router from 'vue-router'
import explore from '@/components/Explore'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'projects',
      component: explore,
      meta: {
        title: 'Quintus Greene | Portfolio',
        explore: 'projects'
      }
      // for dynamic routes
      // meta: { title: route => { return 'The best site ever' } }
    },
    {
      path: '/skills',
      name: 'skills',
      component: explore,
      meta: {
        title: 'Quintus Greene | Portfolio',
        explore: 'skills'
      }
      // for dynamic routes
      // meta: { title: route => { return 'The best site ever' } }
    },
    {
      path: '/contact',
      name: 'contact',
      component: explore,
      meta: {
        title: 'Quintus Greene | Portfolio',
        modal: 'contact'
      }
      // for dynamic routes
      // meta: { title: route => { return 'The best site ever' } }
    },
    {
      path: '/about',
      name: 'about',
      component: explore,
      meta: {
        title: 'Quintus Greene | Portfolio',
        modal: 'about'
      }
      // for dynamic routes
      // meta: { title: route => { return 'The best site ever' } }
    },
    {
      path: '/options',
      name: 'options',
      component: explore,
      meta: {
        title: 'Quintus Greene | Portfolio',
        modal: 'options'
      }
    },
    {
      path: '/project/:id',
      name: 'project',
      component: explore,
      meta: {
        title: 'Quintus Greene | Portfolio',
        modal: 'project'
      },
      children: [
        {
          path: '/project/:id/tools',
          name: 'projectTech',
          component: explore,
          meta: {
            title: 'Quintus Greene | Portfolio',
            modal: 'projectTech'
          }
        }
      ]
    },
    {
      path: '*',
      name: 'catch',
      component: explore,
      meta: {
        title: 'Quintus Greene | Portfolio'
      }
    }
  ]
})

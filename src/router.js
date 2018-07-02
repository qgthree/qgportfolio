import Vue from 'vue'
import Router from 'vue-router'
import explore from '@/views/Explore'

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
          name: 'projectTools',
          component: explore,
          meta: {
            title: 'Quintus Greene | Portfolio',
            modal: 'projectTools'
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

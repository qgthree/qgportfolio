<template>
  <div class="modal-container">
    <div class="modal-area shaded">
      <div class="modal-header">
        <router-link class="nav-button" :to="{ name: explore }">
          <i class="icon ion-ios-arrow-up"></i>
        </router-link>
      </div>
      <div class="modal-body">
        <div class="mini-title">
          ABOUT QUINTUS
        </div>
        <div class="mini-text">
          I'm a front-end developer interested in intuitive design and modern web technologies. Lately I've enjoyed working with Vue.js., which was used to build this portfolio. Come back soon to see how the site has progressed!
        </div>
        <a class="mini-text" href="/docs/QG_resume.pdf">
          <i class="icon ion-document"></i><span> View My Resume</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'about',
    computed: {
      ...mapState(['explore']),
      project () {
        return this.$store.getters.projectById(this.$route.params.id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_modalMini.scss';
</style>

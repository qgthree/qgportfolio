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
          CONTACT QUINTUS
        </div>
        <div class="mini-text">
          Feel free to shoot me an email!
        </div>
        <br />
        <a class="mini-text" href="mailto:langstonq@gmail.com">
          LangstonQ@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'contact',
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

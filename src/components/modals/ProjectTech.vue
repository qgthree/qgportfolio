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
          TECHNOLOGIES
        </div>
        <div class="mini-text">
          <div class="technology" v-for="(tech, index) in project.technologies">
            <span>{{ tech }}</span>
            <span v-if="index !== project.technologies.length - 1">&nbsp;∙&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'projectTech',
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

  .mini-text {
    text-align: center;
  }
</style>

<style>
  .technology {
    display: inline-block;
    opacity: 0.7;
  }
</style>

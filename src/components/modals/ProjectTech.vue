<template>
  <div class="modal-container">
    <div class="modal-area shaded">
      <div class="modal-header">
        <router-link class="nav-button" :to="{ name: explore }">
          <i class="icon ion-ios-arrow-up"></i>
        </router-link>
      </div>
      <div class="modal-body">
        <div class="tech">
          TECHNOLOGIES
        </div>
        <div class="projectTech" v-for="(tech, index) in project.technologies">
          <span>{{ tech }}</span><span v-if="index !== project.technologies.length - 1">&nbsp;∙&nbsp;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'projectTech',
    computed: {
      ...mapGetters(['explore']),
      project () {
        return this.$store.getters.projectById(this.$route.params.id)
      }
    }
  }
</script>

<style scoped>
  .modal-container {
    width: 350px;
    text-align: center;
  }

  .projectTech {
    opacity: 0.7;
    font-weight: 100;
    font-size: 15px;
    display: inline-block;
  }

  .tech {
    font-size: 14px;
    padding: 5px 0px 5px 0px;
    margin-bottom: 10px;
  }
</style>

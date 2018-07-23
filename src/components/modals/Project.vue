<template>
  <div class="modal-container">
    <div class="modal-area with_bg" :style="{'background-image': 'url(' + project.img + ')'}">
      <div class="modal-header">
        <router-link class="nav-button" :to="{ name: explore }">
          <i class="icon ion-ios-arrow-up"></i>
        </router-link>
      </div>
    </div>
    <div class="modal-area shaded">
      <div class="modal-body">
        <div class="projectView-content_top">
          <h2>{{ project.title }}</h2>
          <p class="project-subtitle">{{ project.client }} ∙ <span v-html="project.date"></span></p>
          <div v-html="project.description"></div>
        </div>
        <div class="projectView-content_bottom">
          <p>
            <a v-if="project.codeURL" :href="project.codeURL" target="_blank">
              <div class="btn-submit pretty"><span>View Code</span></div>
            </a>
            <a v-if="project.projectURL" :href="project.projectURL" target="_blank">
              <div class="btn-submit pretty"><span>View {{ project.type }}</span></div>
            </a>
          </p>
          <div class="projectView-tech">
            <div class="technology" v-for="(tech, index) in project.technologies">
              <span>{{ tech }}</span>
              <span v-if="index !== project.technologies.length - 1">&nbsp;∙&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'projects',
    computed: {
      ...mapState(['explore']),
      project () {
        return this.$store.getters.projectById(this.$route.params.id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: 0px;
  }

  .projectView-content_top {
    text-align: left;
  }

  .projectView-content_bottom {
    text-align: center;
    padding-bottom: 20px;
    .projectView-tech {
      font-weight: 100;
      font-size: 15px;
    }
  }
</style>

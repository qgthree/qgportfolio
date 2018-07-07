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
        <h2>{{ project.title }}</h2>
        <p class="project-subtitle" v-html="project.date"></p>
        <div v-html="project.description"></div>
        <div class="projectItem-contentBottom">
          <p>
            <a v-if="project.codeURL" :href="project.codeURL" target="_blank">
              <div class="btn-submit pretty"><span>View Code</span></div>
            </a>
            <a v-if="project.projectURL" :href="project.projectURL" target="_blank">
              <div class="btn-submit pretty"><span>View {{ project.type }}</span></div>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'projects',
    computed: {
      ...mapGetters(['explore']),
      project () {
        return this.$store.getters.projectById(this.$route.params.id)
      }
    },
    data () {
      return {
        projectImage: '/img/projects/pharrell.jpg',
        projectName: 'Westeros Dragons'
      }
    }// ,
    // mounted: () => document.getElementById('new_project-name').focus()
  }
</script>

<style scoped>
  .projectItem {
    background-color: #f9f9f9;
    width: 100%;
    border-radius: 2px;
    display: block;
    margin-bottom: 20px;
    overflow: hidden;
  }

  .projectItem-image {
    height: 120px;
    width: 100%;
    background-color: #2d2d2d;
    margin-bottom: 10px;
    background-position: center;
    background-size: cover;
    overflow: hidden;
  }

  .projectItem-content {
    padding: 10px;
  }
  .projectItem-contentBottom {
    width: 100%;
    text-align: center;
  }
</style>

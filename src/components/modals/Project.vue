<template>
  <div class="modal-container">
    <div class="modal-area shaded">
      <div class="modal-header">
        <router-link class="nav-button" :to="{ name: explore }">
          <i class="icon ion-ios-arrow-up"></i>
        </router-link>
      </div>
      <div class="modal-body">
        <h2>Start a Project</h2>
        <label for="new_project-name">Choose a project name</label>
        <input id="new_project-name" required="required" type="text" class="text-line" />
        <label for="new_project-description">Describe your project</label>
        <textarea rows="3" maxlength="150" id="new_project-description" required="required" class="text-line"></textarea>
        <div class="btn-submit pretty" style="float: right"><span>Create</span></div>
        <span>
          Projects are groups for discussing media. Please <a>read about them</a> before you proceed.
        </span>
      </div>
    </div>
    <div class="modal-area">
      <div class="modal-body">
        <h2>Join a Project</h2>
        <div class="projectItem">
          <div class="projectItem-image" :style="{'background-image': 'url(' + projectImage + ')'}"></div>
          <div class="projectItem-content">
            <strong>{{ projectName }}</strong><br />
            This is a project for stuff. When I say "bla bla bla," I only do it so that I can see how this handles new lines.<br />
            <div style="text-align: right">
              <div class="btn-small accept"><span>accept</span></div>
              <div class="btn-small decline"><span>decline</span></div>
            </div>
          </div>
        </div>
        <div class="projectItem">
          <div class="projectItem-image" :style="{'background-image': 'url(' + projectImage + ')'}"></div>
          <div class="projectItem-content">
            <strong>{{ projectName }}</strong><br />
            This is a project for stuff. When I say "bla bla bla," I only do it so that I can see how this handles new lines.<br />
            <div style="text-align: right">
              <div class="btn-small accept"><span>accept</span></div>
              <div class="btn-small decline"><span>decline</span></div>
            </div>
          </div>
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
      ...mapGetters(['explore'])
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
</style>

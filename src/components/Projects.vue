<template>
  <div class="project_wrapper">
    <div class="project" v-for="project in projects" :key="project.id">
      <div class="project-header">
        <div class="col-left">
          <div class="project-role" href="#">
            <div class="project-roleImage" :style="{'background-image': 'url(' + project.userImg + ')'}"></div>
            <div class="project-roleDetails">
              <div>{{ project.role }}</div>
              <div class="project-subtitle">{{ project.client }}</div>
            </div>
          </div>
        </div>
        <div class="col-right">
          <router-link :to="{ name: 'projectTech', params: { id: project.id } }">
            <i class="icon ion-ios-settings"></i>
          </router-link>
        </div>
      </div>
      <router-link :to="{ name: 'project', params: { id: project.id } }">
        <div class="project-image" :style="{'background-image': 'url(' + project.img + ')'}">
          <div class="project-details1">
            <div class="col-left">
              <i class="icon ion-play"></i>
            </div>
            <div class="col-right" v-html="project.date"></div>
          </div>
        </div>
        <div class="project-details2">
          <div class="project-title">
            <strong>{{ project.title }}</strong>
          </div>
          <div class="project-subtitle" v-html="project.type"></div>
        </div>
        <div class="project-description" v-html="project.description"></div>
      </router-link>
      <!--
      <div class="project-footer">
        <div class="col-left">
          <a v-if="project.codeURL" :href="project.codeURL" target="_blank">
            <i class="ion-icon-GitHub"></i>&nbsp; View Code
          </a>
        </div>
        <div class="col-right">
          <a v-if="project.projectURL" :href="project.projectURL" target="_blank">
            <i class="ion-ios-eye-outline"></i>&nbsp; View {{ project.type }}
          </a>
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'projects',
    computed: {
      ...mapState(['projects'])
    },
    methods: {
      ...mapActions(['newModal'])
    }
  }
</script>

<style>
  .project {
  	width: 100%;
  	margin: 20px 0px 70px 0px;
    font-size: 14px;
    text-align: left;
  }

  .project-header {
  	padding: 0px 35px 0px 30px;
  	margin-bottom: 10px;
    height: 35px;
  }

  .project-role {
    outline: none;
    height: 35px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .project-roleImage {
  	border-radius: 50%;
  	background-position: center;
  	background-size: cover;
  	height: 35px;
  	width: 35px;
  	display: inline-flex;
    margin-right: 12px;
  }

  .project-roleDetails {
    line-height: 17px;
  }

  .project-image {
  	height: 200px;
  	width: 100%;
  	background-color: #2d2d2d;
  	background-position: center;
  	background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    -moz-box-shadow: inset 0 -120px 90px -100px #000000;
    -webkit-box-shadow: inset 0 -120px 90px -100px #000000;
    box-shadow: inset 0 -120px 90px -100px #000000;
  }

  .project-details1 {
  	padding: 171px 35px 3px 30px;
  	font-weight: 100;
  	overflow: hidden;
  }

  .project-details2 {
    color: #fff;
    padding: 10px 35px 10px 30px;
    font-size: 16px;
    background-color: #191670;
  }

  .project-title {
    font-size: 16px;
  }

  .project-subtitle {
    font-weight: 100;
    font-size: 14px;
    opacity: 0.7;
  }

  .project-description {
  	padding: 0px 35px 0px 30px;
    font-size: 16px;
    margin: 16px 0px;
  }

  .project-footer {
  	padding: 0px 35px 0px 30px;
  	font-weight: 100;
    text-transform: capitalize;
  }

  .project-header .col-left, .project-header .col-right,
  .project-details1 .col-left, .project-details1 .col-right,
  .project-footer .col-left, .project-footer .col-right {
    white-space: nowrap; /* this helps our two 50% divs fit without wrapping, and generally prevents divs from wrapping, causing them to overflow text on the right, which we want in some cases. */
  }

  .project-details1 .col-right, .project-details1 .col-left,
  .project-footer .col-right, .project-footer .col-left {
  	overflow: hidden;
  }

  @media screen and (min-width: 800px) {
    .project_wrapper {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    .project {
    	margin-bottom: 30px;
    }
    .project-image {
      border-radius: 2px 2px 0px 0px;
    }
    .project-details2 {
      border-radius: 0px 0px 2px 2px;
    }
    .project-description, .project-title,
    .project-details2 .project-subtitle {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .project-description {
      height: 24px;
    }

    .project-header, .project-details1, .project-details2,
    .project-description, .project-footer {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
</style>

<template>
  <div class="Standard">
    <div class="project-header">
      <div class="col-left">
        <a class="project-user" href="#">
          <div class="project-userImage" :style="{'background-image': 'url(' + project.userImg + ')'}"></div>
          <div class="project-username" href="#">{{ project.username }}</div>
        </a>
      </div>
      <div class="col-right">
        <a href=""><i class="icon ion-ios-more"></i></a>
      </div>
    </div>
    <div class="project-image" :style="{'background-image': 'url(' + project.img + ')'}"></div>
    <div class="project-details1">
      <div class="col-left">{{ project.mediaTitle }}</div>
      <div class="col-right">
        {{ project.type }}
      </div>
    </div>
    <div class="project-text">
      <p>
        <strong>{{ project.intro }}</strong>
      </p>
      <p>
        {{ project.body }}
      </p>
    </div>
    <div class="project-footer">
      <div class="col-left">
        <i class="icon ion-ios-chatbubble"></i>&nbsp;{{ project.commentCount.toLocaleString('en') }} comments
      </div>
      <div class="col-right">
        <i class="icon ion-ios-heart-outline"></i>&nbsp;{{ project.likeCount.toLocaleString('en') }} likes
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'Project',
    props: ['project'],
    methods: {
      ...mapMutations(['setModal'])
    }
  }
</script>

<style>
  .Project {
  	width: 100%;
  	margin: 0px 0px 70px 0px;
  }

  .project-header {
  	padding: 0px 35px 0px 30px;
  	white-space: nowrap; /* this helps our two 50% divs fit without wrapping */
  	font-size: 14px;
  	margin-bottom: 10px;
    height: 35px;
  }

  .project-user {
    outline: none;
    height: 35px;
  }

  .project-userImage {
  	border-radius: 50%;
  	background-position: center;
  	background-size: cover;
  	height: 35px;
  	width: 35px;
  	display: inline-block;
  }

  .project-username {
  	display: inline-block;
    position: relative;
    top: -12px;
    margin-left: 8px;
  }

  .project-image {
  	height: 200px;
  	width: 100%;
  	background-color: #2d2d2d;
  	background-position: center;
  	background-repeat: no-repeat;
  	color: #fff;
  }

  .project-details1 {
  	padding: 7px 35px 5px 30px;
  	white-space: nowrap; /* this helps our two 50% divs fit without wrapping */
  	font-size: 14px;
  	font-weight: 100;
  	margin-bottom: 8px;
  	overflow: hidden;
  }

  .project-details2 {
  	padding: 7px 35px 5px 30px;
  	font-size: 14px;
  	font-weight: 100;
  	margin-bottom: 8px;
  	width: 100%;
  	overflow: hidden;
  }

  .project-text {
  	padding: 0px 35px 0px 30px;
  }

  .project-footer {
  	padding: 0px 35px 0px 30px;
  	white-space: nowrap; /* this helps our two 50% divs fit without wrapping */
  	font-size: 14px;
  	font-weight: 100;
  }
</style>

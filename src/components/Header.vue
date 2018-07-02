<template>
  <header class="PortfolioHeader">
    <div class="col-left">
      <router-link class="nav-button" :to="{ name: 'options' }">
        <i class="ion-ios-arrow-down"></i>
      </router-link>
      <router-link class="logo" :to="{ name: 'projects' }">
        Quintus Greene
      </router-link>
    </div>
    <div class="col-right" style="font-size: 14px;">
      <a class="header-icon">
        <i class="ion-ios-bell"></i>
      </a>
      <a class="header-icon">
        <i class="ion-ios-person"></i>
      </a>
    </div>
  </header>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'PortfolioHeader',
    methods: {
      ...mapActions(['newModal'])
    }
  }
</script>

<style scoped>
  .PortfolioHeader {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    background-color: #191919;
    overflow: hidden;
  	white-space: nowrap; /* this helps our two 50% divs fit without wrapping */
  	padding: 0px 35px 0px 30px;
  	z-index: 2;
  }

  .col-left {
  	font-size: 18px;
    width: 60%;
  }

  .col-right {
    font-size: 18px;
    width: 40%;
  }

  .logo {
    margin-left: 15px;
    white-space: nowrap;
    color: #fff;
  }

  .nav-button {
    background-color: rgba(45, 45, 45, 1);
    color: #fff;
  }

  .nav-button:hover i {
    color: #fff;
  }

  .header-icon {
    margin-left: 30px;
    color: #fff;
  }
</style>

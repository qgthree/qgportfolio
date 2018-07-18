<template>
  <header class="PortfolioHeader">
    <div class="col-left">
      <router-link class="logo" :to="{ name: 'projects' }">
        QUINTUS GREENE
      </router-link>
    </div>
    <div class="col-right" style="font-size: 14px;">
      <router-link class="header-icon" :to="{ name: 'contact' }">
        <i class="ion-ios-bell"></i>
      </router-link>
      <router-link class="header-icon" :to="{ name: 'about' }">
        <i class="ion-ios-person"></i>
      </router-link>
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
    overflow: hidden;
  	white-space: nowrap; /* this helps our two 50% divs fit without wrapping */
  	padding: 0px 35px 0px 30px;
  	z-index: 2;
    background-color: #fff;
    -webkit-box-shadow: 0 10px 20px -5px rgba(0,0,0,0.08);
    -moz-box-shadow: 0 10px 20px -5px rgba(0,0,0,0.08);
    box-shadow: 0 10px 20px -5px rgba(0,0,0,0.08);
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
    white-space: nowrap;
    font-weight: 100;
    padding-top: 3px;
    font-family: dense;
    font-weight: normal;
    font-size: 24px;
    letter-spacing: 3px;
  }

  .header-icon {
    margin-left: 30px;
    padding-top: 5px;
  }
</style>

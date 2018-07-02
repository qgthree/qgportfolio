<template>
  <div class="filters">
    <router-link class="filter router-link-active" to="/" tag="span">
      Projects
    </router-link>
    <router-link class="filter" to="/skills" tag="span">
      Skills
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'filterSub'
  }
</script>

<style>
  .filters {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    padding: 15px 35px;
  }

  .filter {
    font-size: 14px;
    margin: 0px 10px;
    cursor: pointer;
    transition: all .2s ease;
    display: inline-block;
    padding: 5px 0px 5px 0px;
    overflow: hidden;
    position: relative;
  }

  .filter:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #2d2d2d;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
  }

  @media (hover: hover) {
    .filter:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }

  .filter.router-link-exact-active:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
</style>

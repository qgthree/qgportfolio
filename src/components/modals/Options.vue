<template>
  <div class="modal-container">
    <div class="modal-area shaded">
      <div class="modal-header">
        <router-link class="nav-button" :to="{ name: explore }">
          <i class="icon ion-ios-arrow-up"></i>
        </router-link>
      </div>
      <div class="modal-body">
        <router-link :to="{ name: 'profile' }"><h2>ABOUT</h2></router-link>
        <router-link :to="{ name: 'contact' }"><h2>CONTACT</h2></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'options',
    computed: {
      ...mapGetters(['explore'])
    }
  }
</script>

<style scoped>
  .modal-container {
    width: 350px;
  }

  a {
    text-decoration: none !important; /* this is needed because of the ".modal-body > a" style in modal.vue*/
  }

  h2 {
    padding: 10px 0px 10px 0px;
    margin: 0px;
    transition: all .2s ease;
  }

  a:hover h2{
    margin-left: 10px;
  }
</style>

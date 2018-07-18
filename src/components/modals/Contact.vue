<template>
  <div class="modal-container">
    <div class="modal-area shaded">
      <div class="modal-header">
        <router-link class="nav-button" :to="{ name: explore }">
          <i class="icon ion-ios-arrow-up"></i>
        </router-link>
      </div>
      <div class="modal-body">
        <div class="contactTitle">
          CONTACT QUINTUS
        </div>
        <div class="contactText">
          Feel free to shoot me an email!
        </div>
        <br />
        <a class="contactText" href="mailto:langstonq@gmail.com">
          LangstonQ@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'contact',
    computed: {
      ...mapState(['explore']),
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

  .contactText {
    font-weight: 100;
    font-size: 15px;
    display: inline-block;
    text-align: left;
    margin-bottom: 10px;
  }

  .contactTitle {
    font-size: 14px;
    padding: 5px 0px 5px 0px;
    margin-bottom: 10px;
  }
</style>

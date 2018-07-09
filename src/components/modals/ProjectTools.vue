<template>
  <div class="modal-container">
    <div class="modal-area shaded">
      <div class="modal-header">
        <router-link class="nav-button" :to="{ name: explore }">
          <i class="icon ion-ios-arrow-up"></i>
        </router-link>
      </div>
      <div class="modal-body">
        <h2 v-for="(tech, index) in project.technologies">
          <span>{{ tech }}</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'projectTools',
    computed: {
      ...mapGetters(['explore']),
      project () {
        return this.$store.getters.projectById(this.$route.params.id)
      }
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

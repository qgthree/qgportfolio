<template>
  <div id="app">
    <VueModal v-if="modal !== 'explore'"></VueModal>
    <PortfolioHeader></PortfolioHeader>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import PortfolioHeader from '@/components/Header'
  import VueModal from '@/components/Modal'
  export default {
    name: 'app',
    components: {
      PortfolioHeader,
      VueModal
    },
    computed: {
      ...mapGetters(['modal'])
    },
    methods: {
      ...mapActions(['newModal']),
      ...mapMutations(['setExplore'])
    },
    created: function () {
      let meta = this.$route.meta
      this.newModal(meta.modal || 'explore')
      if (meta.explore) {
        this.setExplore(meta.explore)
      }
      document.title = meta.title
    },
    watch: {
      '$route.matched' () {
        let meta = this.$route.meta
        this.newModal(meta.modal || 'explore')
        if (meta.explore) {
          this.setExplore(meta.explore)
        }
        document.title = meta.title
        // for dynamic routes...
        // document.title = to.meta.title(to)
      }
    }
  }
</script>

<style>
  @import 'assets/styles/main.css';
</style>

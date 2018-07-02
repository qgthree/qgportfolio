<template>
  <div class="explore">
    <filterSub></filterSub>
    <component :is="explore"></component>
  </div>
</template>

<script>
  import filterSub from '@/components/FilterSub'
  import projects from '@/components/Projects'
  import { mapGetters } from 'vuex'
  export default {
    name: 'explore',
    components: {
      filterSub,
      projects
    },
    computed: {
      ...mapGetters(['explore'])
    }
  }
</script>

<style>
  .explore {
    padding-top: 50px;
  }
  @media screen and (min-width: 800px) {
    .explore {
      padding: 50px 30px;
    }
  }
</style>

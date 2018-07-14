<template>
  <div class="explore">
    <filters></filters>
    <component :is="explore"></component>
  </div>
</template>

<script>
  import filters from '@/components/Filters'
  import projects from '@/components/Projects'
  import skills from '@/components/Skills'
  import { mapGetters } from 'vuex'
  export default {
    name: 'explore',
    components: {
      filters,
      projects,
      skills
    },
    computed: {
      ...mapGetters(['explore'])
    }
  }
</script>

<style>
  .explore {
    padding-top: 50px;
    text-align: center;
  }
  @media screen and (min-width: 800px) {
    .explore {
      padding: 50px 30px;
    }
  }
</style>

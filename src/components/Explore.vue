<template>
  <div class="explore">
    <filters></filters>
    <transition name="fade" mode="out-in">
      <component :is="explore"></component>
    </transition>
  </div>
</template>

<script>
  import filters from '@/components/Filters'
  import projects from '@/components/Projects'
  import skills from '@/components/Skills'
  import { mapState } from 'vuex'
  export default {
    name: 'explore',
    components: {
      filters,
      projects,
      skills
    },
    computed: {
      ...mapState(['explore'])
    }
  }
</script>

<style>
  .explore {
    padding-top: 50px;
    text-align: center;
    max-width: 1200px;
    display: inline-block;
  }
  @media screen and (min-width: 800px) {
    .explore {
      padding: 50px 30px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>

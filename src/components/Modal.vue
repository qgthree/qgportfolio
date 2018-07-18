<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <component :is="modal"></component>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapState } from 'vuex'
  import project from '@/components/modals/Project'
  import options from '@/components/modals/Options'
  import projectTech from '@/components/modals/ProjectTech'
  import prettyButton from '@/assets/scripts/prettyButton'
  export default {
    name: 'VueModal',
    components: {
      project,
      options,
      projectTech
    },
    computed: {
      ...mapState(['modal'])
    },
    mounted: () => {
      const prettyElement = document.getElementsByClassName('pretty')
      const modalWrapper = document.querySelector('.modal-wrapper')
      prettyButton(prettyElement, modalWrapper)
    }
  }
</script>

<style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;

    /* fixes flicker in Chrome when closing modal */
    -webkit-transform: translatez(0);
  }

  .modal-wrapper {
    padding: 25px 0px;
    max-height: 100%;
    overflow-y: scroll;
  }

  .modal-container {
    width: 500px;
    max-width: 90%;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    overflow: hidden;
  }

  .modal-area {
    width: 100%;
    padding: 20px 30px;
    background-color: #fff;
    background-size: cover;
    background-position: center;
  }

  .modal-area.shaded {
    background-color: #E8F3EC;
  }

  .modal-area.with_bg {
    min-height: 200px;
  }

  .modal-body a {
    text-decoration: underline;
  }

  .modal-header {
    float: right;
    margin-right: 15px;
    z-index: 20000;
  }

  .modal-header .nav-button {
    position: fixed;
    z-index: 10000;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    transform: scale(1.1);
  }
</style>

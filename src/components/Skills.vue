<template>
  <div class="skills-wrapper">
    <div class="skills-group">
      <div class="skills-line">
        <div class="skills-heading">
          FRONT-END DEVELOPMENT
        </div>
      </div>
      <div class="skills-list">
        HTML5 ∙ CSS3/Sass ∙ JavaScript ∙ Vue.js ∙ Meteor ∙ Blaze ∙ jQuery ∙ Bootstrap ∙ YouTube API ∙ Jekyll/Liquid ∙ Markdown
      </div>
    </div>
    <div class="skills-group">
      <div class="skills-line">
        <div class="skills-heading">
          SERVER-SIDE DEVELOPMENT
        </div>
      </div>
      <div class="skills-list">
        Node.js ∙ Meteor DDP ∙ MongoDB ∙ AWS ∙ Mailgun API (email) ∙ GitHub Pages</div>
    </div>
    <div class="skills-group">
      <div class="skills-line">
        <div class="skills-heading">
          OTHER TOOLS &amp; TECHNOLOGIES
        </div>
      </div>
      <div class="skills-list">
        Git ∙ Webpack ∙ NPM ∙ Photoshop ∙ InDesign ∙ Google Analytics ∙ Google Tag Manager</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'projects'
  }
</script>

<style>
  .skills-wrapper {
    max-width: 90%;
    text-align: left;
    display: inline-block;
    margin-top: 30px;
  }

  .skills-group {
    width: 100%;
    margin-bottom: 40px;
  }

  .skills-line {
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 1px solid #191670;
    overflow: hidden;
    height: auto;
  }

  .skills-heading {
    padding: 4px 10px 3px 10px;
    background-color: #191670;
    color: #fff;
    display: inline-block;
  }

  .skills-list {
    padding: 0px 10px;
  }
</style>

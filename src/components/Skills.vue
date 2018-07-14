<template>
  <div class="skills-wrapper">
    <div class="skills-group">
      <div class="skills-line">
        <span class="skills-heading">
          FRONT-END DEVELOPMENT
        </span>
      </div>
      <div class="skills-list">HTML5 ∙ CSS3 ∙ JavaScript ∙ VueJS ∙ Meteor ∙ Blaze ∙ jQuery ∙ Bootstrap ∙ YouTube API ∙ Jekyll/Liquid ∙ Markdown ∙ XML/XSLT</div>
    </div>
    <div class="skills-group">
      <div class="skills-line">
        <span class="skills-heading">
          SERVER-SIDE DEVELOPMENT
        </span>
      </div>
      <div class="skills-list">NodeJS ∙ Meteor DDP ∙ MongoDB ∙ AWS ∙ Mailgun API (email) ∙ GitHub Pages</div>
    </div>
    <div class="skills-group">
      <div class="skills-line">
        <span class="skills-heading">
          OTHER TOOLS &amp; TECHNOLOGIES
        </span>
      </div>
      <div class="skills-list">Git ∙ Webpack ∙ NPM ∙ Adobe Photoshop ∙ Google Analytics ∙ Google Tag Manager</div>
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
    width: 700px;
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
    border-bottom: 1px solid #000;
  }

  .skills-heading {
    padding: 5px 10px;
    background-color: #4d003b;
    color: #fff;
  }

  .skills-list {
    padding: 0px 10px;
  }
</style>

<template>
  <div class="memes">
    <h1>Classic meme templates</h1>
    <memesList :height="380" :width="450" />
    <footer>
      <p>Source <a href="https://api.imgflip.com">img flip</a></p>
    </footer>
  </div>
</template>

<script>
  import MemesList from '../components/MemesList.vue'

  export default {
    name: 'MemePage',
    components: {
      MemesList
    }
  }
</script>

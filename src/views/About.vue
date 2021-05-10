<template>
  <div class="about">
    <div>
      <h1>About memes</h1>
      <br />
      <p>
        A meme is a cultural item that is transmitted by repetition and
        replication in a manner analogous to the biological transmission of
        genes.
        <br />An item in the form of an image, video, phrase, etc., that is
        spread via the internet and often altered in a creative or humorous way.
      </p>
    </div>
    <div>
      <h2>Have you heard of Chuck Norris?</h2>
    <b-button v-b-modal.modal-1 @click="fetchJoke"
      >Click me to get a quote from Mr. Chuck Norris</b-button
    >
    <p>Or type in a word in the addressfield</p>
    <b-modal id="modal-1" title="Chuck Norris ">
      <b-icon icon="emoji-laughing"></b-icon>
      <p class="my-4">
        {{ joke }}</p>
    </b-modal>
    <p v-if="paramJoke !== null && paramJoke.total > 0">
      {{ paramJoke.result[0].value }}
    </p>
    </div>
    <footer>
      <p>Source <a href="https://api.chucknorris.io/">Chuck Norris</a></p>
      
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        joke: null,
        paramJoke: null
      }
    },

    created() {
      this.fetchJoke()
      this.fetchJokeParams()
    },

    methods: {
      fetchJoke() {
        fetch('https://api.chucknorris.io/jokes/random')
          .then((response) => response.json())
          .then((result) => {
            this.joke = result.value
          })
      },

      fetchJokeParams() {
        fetch(
          'https://api.chucknorris.io/jokes/search?query=' +
            this.$route.params.param
        )
          .then((response) => response.json())
          .then((result) => {
            this.paramJoke = result
          })
      }
    },

    watch: {
      $route(to, from) {
        if (to !== from) {
          location.reload()
        }
      }
    }
  }
</script>

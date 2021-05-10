<template>
  <div>
    <span>Select the quantity of memes to be shown:</span>
    <form>
      <b-form-input v-model="amount" type="range" min="1" max="100"
        >$store.state.amount</b-form-input
      >
      <br />
      <b-col sm="1" class="numberInput">
        <b-form-input
          type="number"
          min="1"
          max="100"
          onkeydown="false"
          v-model="amount"
        ></b-form-input>

        <b-button
          variant="outline-primary"
          type="button"
          @click="$store.commit('setAmount', amount)"
          >Render</b-button
        >
      </b-col>
    </form>

    <ul v-if="$store.state.amount > 0">
      <li v-for="meme in memes.slice(0, $store.state.amount)" :key="meme.id">
        <br />
        <h2>{{ meme.name }}</h2>
        <img :src="meme.url" :height="height" :width="width" />
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Memes',
    props: {
      height: Number,
      width: Number
    },

    data() {
      return {
        memes: [],
        amount: null
      }
    },

    created() {
      this.fetchMemes()
      console.log(this.$store.state.amount)
    },
    computed: {
      get() {
        return this.$store.state.amount
      },
      set(amount) {
        return this.$store.commit('setAmount', amount)
      }
    },

    methods: {
      fetchMemes() {
        const axios = require('axios')
        axios.get('https://api.imgflip.com/get_memes').then((resp) => {
          this.memes = resp.data.data.memes
        })
      }
    }
  }
</script>

<style scoped>
  img {
    border: 5px solid #555;
  }
  .numberInput {
    margin: auto;
  }
</style>

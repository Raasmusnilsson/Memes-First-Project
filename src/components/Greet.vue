<template>
  <div>
    <form>
      <input class="home-input" type="text" placeholder="Enter name to" v-model="userName" />
      <input class="home-input" type="button" value="Get a greeting" @click="getGreeting" />
    </form>
    <p v-if="hasUserInput">
      Hey {{ userName }}! Continue to the <router-link to="/memes">Memes</router-link> page to see more.
    </p>
  </div>
  
</template>

<script>
  export default {
    name: 'Greet',

    data() {
      return {
        userName: null,
        hasUserInput: false
      }
    },
    methods: {
      getGreeting() {
        if (this.userName !== null && this.userName.length > 0) {
          this.hasUserInput = true
        } else this.hasUserInput = false
      }
    }
  }
</script>

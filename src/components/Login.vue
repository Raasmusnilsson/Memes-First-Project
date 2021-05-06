<template>
  <div class="hello">
    <form>
      <input type="text" placeholder="Namn" v-model="userName" />
      <input type="button" value="Log in" @click="fetchActivity" />
    </form>
    <p v-if="loggedIn">Du är inloggad som: {{ userName }}</p>
    <ol>
      <li v-for="activity in activities" :key="activity"> {{activity}}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    props: {},
    data() {
      return {
        userName: null,
        loggedIn: false,
        activities: []
      }
    },
    created() {
        this.fillWithActivities()
        console.log('Created')
      },
    methods: {
      isLoggedIn() {
        if (this.userName !== null && this.userName.length > 0) {
          this.loggedIn = true
        } else this.loggedIn = false
      },
      fetchActivity() {
        const axios = require('axios')
        axios.get('http://www.boredapi.com/api/activity/').then((resp) => {
          console.log(resp.data.activity)

          this.activities.push(resp.data.activity)
          console.log(this.activities.length)
        })
      },
      fillWithActivities() {
        do {this.fetchActivity()}
        while (this.activities.length >= 10)
      },
      
    }
  }
</script>

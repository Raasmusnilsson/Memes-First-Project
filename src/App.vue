<template>
  <body>
    <p v-if="isOnline">Internet <b-icon icon="bar-chart-fill" variant="success"></b-icon></p>
    <p v-if="isOffline">No Internet <b-icon icon="bar-chart-fill" variant="danger"></b-icon></p>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/memes">Memes</router-link>
      </div>
      <router-view />
    </div>
  </body>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  body {
    background-color: cadetblue;
  }
</style>

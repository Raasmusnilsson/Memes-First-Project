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


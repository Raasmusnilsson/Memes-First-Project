<template>
  <div class="home">
    
    <img alt="Meme logo" src="../assets/meme-logo.png" />
    <HelloWorld msg="Classic memes images" />
    <Greet />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
 import Greet from '../components/Greet.vue';

export default {
  name: "Home",
  components: {
    HelloWorld,
    Greet
  },
};
</script>

<template>
  <div>
    <input @click="onClick" type="button" value="I'm over 18" id="b-button" />
  </div>
</template>

<script>
  export default {
    name: 'AdultAge',

    data() {
      return {
        adultAge: false
      }
    },
    methods: {
      onClick() {
        this.adultAge = true
        this.$emit('adult-age', this.adultAge)
      }
    }
  }
</script>

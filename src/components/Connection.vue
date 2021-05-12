<template>
  <div>
    <p id="p-internet" v-if="isOnline">
      Online <b-icon icon="bar-chart-fill" variant="success"></b-icon>
    </p>
    <p id="p-internet" v-if="isOffline">
      Offline <b-icon icon="bar-chart-fill" variant="danger"></b-icon>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Connection'
}
</script>

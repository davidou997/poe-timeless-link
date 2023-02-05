<template>
  <v-row class="justify-space-between">
    <img
      :src="currentJewelImg"
      :alt="currentJewelName"
      class="jewel-img">
    <span class="text">{{ currentJewelName }}</span>
    <img
      :src="currentJewelImg"
      :alt="currentJewelName"
      class="jewel-img">
    
    
  </v-row>
</template>

<script>
export default {
  computed: {
    currentJewel() { //The currently selected jewel
      return this.$store.getters.getCurrentJewel
    },
    currentJewelName() { //The name of the currently selected jewel
      return this.$store.getters.getJewelName(this.currentJewel)
    },
    currentJewelImg() { //The image of the currently selected jewel
      return this.$store.getters.getJewelImg(this.currentJewel)
    }
  }
}
</script>

<style scoped>
.jewel-title {
  color: #E5E8EB;
}
.text {
  font-size: 30px;
  font-weight: 500;
}
.jewel-img {
  vertical-align: middle;
  height: 3em;
  width: 3em;
}
</style>
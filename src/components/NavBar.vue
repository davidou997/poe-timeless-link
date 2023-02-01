<template>
  <v-toolbar
    color="#12181D"
    class="pr-3"
    flat>
    <v-toolbar-title class="text">
      <v-btn
        tile
        color="rgba(0,0,0,0)"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        @click="goHome()">
        <img class="title-img mr-2" :src="jewel" alt="Timeless Jewel">
        <span :class="hover ? 'nav-hover': 'text'" class="text-none local-font">timeless.bulk</span>
      </v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
      <nav-button
        :icon-name="'mdi-magnify'"
        :text="'Search'"
        :route="'/search'"
      />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import jewel from "./../assets/Timeless_Jewel_inventory_icon.png"
import NavButton from "./NavButton.vue"

export default {
  components: {
    NavButton
  },
  methods: {
    goHome: function() {
      this.$router.push('/')
    }
  },
  data: function() {
    return {
      jewel: jewel, //Image of the title jewel
      hover: false //If the titel is
    }
  },
}
</script>  

<style scoped>
.title-img {
  vertical-align: middle;
  height: 2em;
  width: 2em;
}
.local-font {
  font-size: 20px;
}
</style>
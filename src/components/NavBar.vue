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
        <img class="title-img mr-3" :src="jewel" alt="Timeless Jewel">
        <span :class="hover ? 'nav-hover': 'text'" class="text-none local-font">timeless.bulk</span>
      </v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
      <nav-button
        v-for="(item, index) in navigationInfo"
        v-bind:key="index"
       :icon-name="item.iconName"
       :text="item.name"
       :route="item.route"
       :external="item.external"/>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import jewel from "../assets/timeless_jewel.png"
import NavButton from "./NavButton.vue"

export default {
  components: {
    NavButton
  },
  methods: {
    goHome: function() { //Goes to home page
      this.$router.push('/')
    }
  },
  data: function() {
    return {
      jewel: jewel, //Image of the title jewel
      hover: false //If the title is is hovered on
    }
  },
  computed: {
    navigationInfo() { //Info for navigation buttons
      return [
        // {
        //   name: 'Home',
        //   iconName: 'mdi-home',
        //   route: '/'
        // },
        // {
        //   name: 'About',
        //   iconName: 'mdi-help',
        //   route: '/about'
        // },
        // {
        //   name: 'Search',
        //   iconName: 'mdi-magnify',
        //   route: '/search'
        // },
        {
          name: 'Wiki',
          iconName: 'mdi-information-outline',
          route: 'https://www.poewiki.net/wiki/Timeless_Jewel',
          external: true
        },
        {
          name: 'Repo',
          iconName: 'mdi-source-branch',
          route: 'https://github.com/davidou997/timeless-bulk',
          external: true
        },
      ]
    }
  }
}
</script>  

<style scoped>
.title-img {
  vertical-align: middle;
  height: 3em;
  width: 3em;
}
.local-font {
  font-size: 25px;
}
</style>
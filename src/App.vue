<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './components/FooterComp.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    Footer,
    NavBar
  },
  data: () => ({
    //
  }),
}
</script>

<style>
.v-application {
  background-color: #1D262F;
}
.text {
  color: #F5F7FA
}
.nav-hover {
  text-decoration: underline;
  color: #10B77F;
}
</style>

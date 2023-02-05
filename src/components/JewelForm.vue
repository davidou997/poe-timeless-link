<template>
  <v-row>
    <v-col class="mt-5">
      <v-row class="text steps-text">1. Select Conquerors</v-row>
      <v-row>
          <conq-button
          v-for="(conq, index) in conquerors"
          :key="index"
          :img="conq.img"
          :name="conq.name"
          :keystone="conq.keystone"/>
      </v-row>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="mt-5">
      <v-row class="text steps-text">2. Enter seeds</v-row>
      <v-row>
        <conq-seeds/>
      </v-row>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="mt-5">
      <v-row class="text steps-text">3. Generate links</v-row>
    </v-col>
  </v-row>
</template>

<script>
import ConqButton from './ConqButton.vue';
import ConqSeeds from './ConqSeeds.vue';

export default {
  components: {
    ConqButton,
    ConqSeeds
  },
  computed: {
    currentJewel() {
      return this.$store.getters.getCurrentJewel
    },
    conquerors() {
      return this.$store.getters.getJewelConqs(this.currentJewel)
    }
  }
}
</script>

<style scoped>
.steps-text {
  font-size: 20px;
}
</style>
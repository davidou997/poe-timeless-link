<template>
  <v-row>
    <v-col class="mt-5">
      <v-row class="text steps-text mb-0">1. Select Conquerors</v-row>
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
      <v-row class="text steps-text mb-0">2. Enter Seeds</v-row>
      <v-row>
        <conq-seeds/>
      </v-row>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="mt-5">
      <v-row class="text steps-text mb-0">3. Generate Links</v-row>
      <v-row class="mb-0">
        <gen-link/>
      </v-row>
      <v-row>
        <link-table/>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import ConqButton from './ConqButton.vue';
import ConqSeeds from './ConqSeeds.vue';
import GenLink from './GenLink.vue';
import LinkTable from './LinkTable.vue';

export default {
  components: {
    ConqButton,
    ConqSeeds,
    GenLink,
    LinkTable
  },
  computed: {
    currentJewel() { //The current jewel
      return this.$store.getters.getCurrentJewel
    },
    conquerors() { //The conquerors of the current jewel
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
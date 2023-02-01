<template>
  <v-container class="mt-2" justify="center" fill-height>
    <page-card>
      <v-container class="pa-3">
        <v-row class="pa-0">
          <v-col cols="2">
            <v-row class="py-3 pl-5 jewel-text">
              <strong>JEWELS</strong>
            </v-row>
            <v-row v-for="(jewel, index) in jewels" :key="index">
              <v-btn
                tile
                block
                color="transparent"
                left
                class="text-none jewel-button py-5">
                <img :src="jewel.img" :alt="jewel.name" class="jewel-img mr-2">
                <span class="text"> {{ jewel.name }}</span>
              </v-btn>
            </v-row>
          </v-col>
          <v-col class="jewel-options">
            Options
          </v-col>
        </v-row>
      </v-container>
    </page-card>
  </v-container>
</template>

<script>
import PageCard from '../components/PageCard.vue'
import pride from '../assets/lethal_pride.png'
import restraint from '../assets/brutal_restraint.png'
import vanity from '../assets/glorious_vanity.png'
import faith from '../assets/militant_faith.png'
import hubris from '../assets/elegant_hubris.png'

export default {
  components: {
    PageCard
  },
  data() {
    return {
      
    }
  },
  computed: {
    jewels() {
      return [
        {
          name: 'Lethal Pride',
          img: pride
        },
        {
          name: 'Brutal Restraint',
          img: restraint
        },
        {
          name: 'Glorious Vanity',
          img: vanity
        },
        {
          name: 'Militant Faith',
          img: faith
        },
        {
          name: 'Elegant Hubris',
          img: hubris
        }
      ]
    }
  }
}
</script>

<style scoped>
.jewel-img {
  height: 2em;
  width: 2em;
  vertical-align: middle;
}
.jewel-options {
  background-color: #1D262F;
}
.jewel-text {
  color: #636D76;
  font-size: 14px;
}
.jewel-button {
  justify-content: left;
}
</style>
<template>
  <v-container class="mt-2" justify="center" fill-height>
    <page-card>
      <v-container class="pa-3">
        <v-row class="pa-0">
          <v-col cols="3">
            <v-row class="py-3 pl-5 jewel-text">
              <strong>JEWELS</strong>
            </v-row>
            <v-row v-for="(jewel, index) in jewels" :key="index">
              <jewel-button
                :img="jewel.img"
                :name="jewel.name"
                :id="jewel.id"
                :curr="current"
                @selectJewel="setJewel"
              />
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
import JewelButton from '../components/JewelButton.vue'
import pride from '../assets/lethal_pride.png'
import restraint from '../assets/brutal_restraint.png'
import vanity from '../assets/glorious_vanity.png'
import faith from '../assets/militant_faith.png'
import hubris from '../assets/elegant_hubris.png'

export default {
  components: {
    PageCard,
    JewelButton
  },
  data() {
    return {
      current: 'pride' //The selected jewel
    }
  },
  computed: {
    jewels() { //Jewel information, will be moved to store
      return [
        {
          name: 'Lethal Pride',
          img: pride,
          id: 'pride'
        },
        {
          name: 'Brutal Restraint',
          img: restraint,
          id: 'restraint'
        },
        {
          name: 'Glorious Vanity',
          img: vanity,
          id: 'vanity'
        },
        {
          name: 'Militant Faith',
          img: faith,
          id: 'faith'
        },
        {
          name: 'Elegant Hubris',
          img: hubris,
          id: 'hubris'
        }
      ]
    }
  },
  methods: {
    setJewel: function(id) { //Sets the currently selected jewel
      this.current = id;
    }
  }
}
</script>

<style scoped>
.jewel-options {
  background-color: #1D262F;
}
.jewel-text {
  color: #909BA6;
  font-size: 14px;
}
</style>
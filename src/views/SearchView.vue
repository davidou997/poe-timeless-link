<template>
  <v-container class="mt-2" justify="center" fill-height>
    <page-card>
      <v-container class="pa-3">
        <v-row class="pa-0">
          <v-col cols="3">
            <v-row class="py-3 pl-5 jewel-text">
              <strong>JEWELS</strong>
            </v-row>
            <jewel-selection/>
          </v-col>
          <v-col class="jewel-options pa-10">
            <jewel-title/>
            <jewel-form/>
          </v-col>
        </v-row>
      </v-container>
    </page-card>
  </v-container>
</template>

<script>
import PageCard from '../components/PageCard.vue'
import JewelSelection from '@/components/JewelSelection.vue'
import JewelForm from '@/components/JewelForm.vue'
import JewelTitle from '@/components/JewelTitle.vue'

export default {
  components: {
    PageCard,
    JewelSelection,
    JewelForm,
    JewelTitle
  },
  data() {
    return {
      current: '' //The selected jewel
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
  font-size: 15px;
  text-decoration: solid;
}
</style>
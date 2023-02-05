<template>
    <v-row v-for="(jewel, index) in jewels" :key="index">
        <jewel-button
        :id="jewel"/>
    </v-row>
</template>

<script>
import JewelButton from '../components/JewelButton.vue'

export default {
    components: {
        JewelButton
    },
    computed: {
        jewels() { //List of jewels
            return this.$store.getters.getJewels
        }
    }
}
</script>

<style>

</style>
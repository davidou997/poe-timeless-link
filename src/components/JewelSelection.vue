<template>
    <v-row v-for="(jewel, index) in jewels" :key="index">
        <jewel-button
        :id="jewel"
        :curr="current"
        @selectJewel="setJewel"
        />
    </v-row>
</template>

<script>
import JewelButton from '../components/JewelButton.vue'

export default {
    emits: ['selectJewel'],
    data() {
        return {
            current: '' //The selected jewel
        }
    },
    components: {
        JewelButton
    },
    computed: {
        jewels() { //List of jewels
            return this.$store.getters.getJewels
        }
    },
    methods: {
        setJewel: function(id) { //Sets the currently selected jewel
            this.current = id;
            this.$emit('selectJewel', this.current)
        }
    },
    mounted() { //Sets the selected jewel on mount
        this.setJewel(this.$store.getters.getCurrentJewel)
    }
}
</script>

<style>

</style>
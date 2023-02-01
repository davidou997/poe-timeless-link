<template>
    <v-row v-for="(jewel, index) in jewels" :key="index">
        <jewel-button
        :img="jewel.img"
        :name="jewel.name"
        :id="jewel.id"
        :curr="current"
        @selectJewel="setJewel"
        />
    </v-row>
</template>

<script>
import JewelButton from '../components/JewelButton.vue'
import pride from '../assets/lethal_pride.png'
import restraint from '../assets/brutal_restraint.png'
import vanity from '../assets/glorious_vanity.png'
import faith from '../assets/militant_faith.png'
import hubris from '../assets/elegant_hubris.png'

export default {
    data() {
        return {
            current: '' //The selected jewel
        }
    },
    components: {
        JewelButton
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
    },
    mounted() { //Sets the selected jewel on mount
        this.current = 'pride'
        this.$emit('selectJewel', this.current)
    }
}
</script>

<style>

</style>
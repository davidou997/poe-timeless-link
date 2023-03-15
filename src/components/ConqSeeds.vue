<template>
    <v-container>
        <v-row>
            <v-text-field
                class="mt-3 mb-2"
                v-model="currSeed"
                variant="outlined"
                validate-on="input"
                clearable
                color="#10B77F"
                :rules="currSeed ? [rules.inRange] : []"
                :label="`${minSeed} - ${maxSeed}`"
                @keydown.enter="submitSeed"/>
        </v-row>
        <v-row>
            <v-chip
                v-for="(seed, index) in currentSeeds"
                :key="index"
                variant="outlined"
                closable
                close-icon="mdi-close-circle"
                color="#10B77F"
                class="ma-1"
                size="large"
                @click.close="deleteSeed(seed)">
                <span class="text">{{ seed }}</span>
            </v-chip>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            currSeed: '', //The current seed
            rules: { //Rules to display error messages for input
                inRange: value => (value >= this.minSeed && value <= this.maxSeed) || 'Must be within range',
            }
        }
    },
    computed: {
        currentJewel() { //The current jewel
            this.clearSeed() //When the current jewel changes, AKA recomputed, clear seed field
            return this.$store.getters.getCurrentJewel
        },
        minSeed() { //The minimum seed of the current jewel
            return this.$store.getters.getJewelMinSeed(this.currentJewel)
        },
        maxSeed() { //The maximum seed of the current jewel
            return this.$store.getters.getJewelMaxSeed(this.currentJewel)
        },
        currentSeeds() { //The list of submitted seeds
            return this.$store.getters.getCurrentSeeds
        }
    },
    methods: {
        submitSeed: function() { //Submits the seed if valid and clears the field
            if(this.currSeed && this.currSeed >= this.minSeed && this.currSeed <= this.maxSeed) {
                this.$store.commit('submitSeed', this.currSeed)
                this.clearSeed()
            }
        },
        deleteSeed: function(seed) { //Deletes the seed from the chip
            this.$store.commit('deleteSeed', seed)
        },
        clearSeed: function() {
            this.currSeed = ''
        }
    }
}
</script>

<style scoped>
.v-text-field {
    font-size: 15px;
    color: #10B77F;
}
</style>
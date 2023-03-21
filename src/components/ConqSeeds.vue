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
                persistent-hint
                hint="Press Enter key to submit seed"
                @keydown.enter="submitSeed"/>
        </v-row>
        <v-row>
            <v-card
                class="pa-1 pb-3"
                variant="outlined">
                <v-card-title>Submitted Seeds</v-card-title>
                <v-card-subtitle
                    v-if="noSeeds"><i>Submit a seed above!</i>
                </v-card-subtitle>
                <div class="px-3">
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
                </div>
                
            </v-card>
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
            },
            noSeeds: true
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

                if(this.noSeeds) { //Remove default message when a seed is added
                    this.noSeeds = false
                }
            }
        },
        deleteSeed: function(seed) { //Deletes the seed from the chip
            this.$store.commit('deleteSeed', seed)
            if(this.currentSeeds.size === 0) {
                console.log(this.currentSeeds.size)
                this.noSeeds = true
            }
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
.v-card {
    color: #10b77f69;
    width: 100%;
    background-color: transparent;
}
.v-card-title {
    font-size: 17px;
    color: #10B77F
}
</style>
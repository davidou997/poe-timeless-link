<template>
    <v-container class="pa-3">
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
                class="pa-1 pb-3 submitted-seeds"
                variant="outlined"
                @mouseenter="submitHover = true"
                @mouseleave="submitHover = false"
                :class="submitHover ? 'submitHover' : ''">
                <v-card-title>
                    <span>Submitted Seeds</span>
                    <v-btn
                        v-if="!noSeeds"
                        variant="plain"
                        icon="mdi-delete"
                        class="clear-seeds"
                        position="absolute">
                        <v-icon>mdi-delete</v-icon>
                        <v-dialog
                            v-model="showSeedDialog"
                            activator="parent"
                            width="auto"
                            transition="fade-transition">
                            <v-card class="seed-dialog">
                                <v-card-text>
                                    Are you sure you want to clear all seeds?
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn
                                        class="ml-2"
                                        variant="plain"
                                        @click="clearAllSeeds">
                                        Confirm
                                    </v-btn>
                                    <v-btn
                                        variant="plain"
                                        @click="closeSeedDialog">
                                        Cancel
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-btn>
                </v-card-title>
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
            noSeeds: true,
            submitHover: false,
            showSeedDialog: false
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
        },
        closeSeedDialog() { //Closes the seed dialog by turning the controlling boolean to false
            this.showSeedDialog = false
        },
        clearAllSeeds() { //Clears all seeds and closes the dialog
            this.$store.commit('deleteSeeds')
            this.closeSeedDialog()
        }
    },
    watch: {
        'currentSeeds.size'(size) { //Watches size of submitted seeds and sets the delete all toggle appropriately
            if(size < 1) {
                this.noSeeds = true
            } else {
                this.noSeeds = false
            }
        }
    }
}
</script>

<style scoped>
.v-text-field {
    font-size: 15px;
    color: #10B77F;
}
.submitted-seeds {
    color: #185E4D;
    width: 100%;
    background-color: transparent;
    transition: color 0.3s ease;
}
.submitted-seeds.submitHover {
    color: #10B77F;
}
.v-card-title {
    font-size: 17px;
    color: #10B77F
}
.clear-seeds {
    width: 2em;
    height: 2em;
}
.seed-dialog {
    background-color: #1D262F;
    color: #10B77F;
}
</style>
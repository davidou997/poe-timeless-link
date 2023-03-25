<template>
    <v-btn
        variant="outlined"
        size="large"
        @mouseenter="buttonHov = true"
        @mouseleave="buttonHov = false"
        @click="genLinks"
        :class="buttonHov ? 'option-alt-text' : 'option-text'">
    <v-icon
        class="mr-1">
        mdi-link-variant
    </v-icon>
    <span
        class="text-none"
        :class="buttonHov ? 'text-alt' : ''"
        >Generate Links</span>
    </v-btn>
    <div
        v-show="showError"
        class="pt-3 pl-2 text-red-darken-3 error">
        <v-icon>mdi-alert-circle</v-icon>
        <strong class="ml-1">Missing seeds</strong>
    </div>
</template>

<script>
export default {
    data() {
        return { //If the button is hovered on
            buttonHov: false,
            showError: false
        }
    },
    computed: {
        seedAmount() {
            return this.$store.getters.getCurrentSeeds.size
        },
    },
    methods: {
        genLinks() { //Generates links based on selected criteria
            if(this.seedAmount > 0) {
                this.$store.dispatch('generateLinks')
            } else {
                this.displayError()
            }
        },
        displayError() {
            this.showError = true
            setTimeout(() => {
                this.showError = false
            }, 1500)
        }
    }
}
</script>

<style scoped>
.option-text {
  color: #10B77F;
  background-color: #1D262F;
}
.option-alt-text {
  color: #1D262F;
  background-color: #10B77F;
}
.v-btn {
    font-size: 15px;
}
.text-alt {
    text-decoration: underline;
}
.error {
    animation: error ease 1.5s
}
@keyframes error {
    0% {
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    80% { 
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
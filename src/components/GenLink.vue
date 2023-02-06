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
</template>

<script>
export default {
    data() {
        return { //If the button is hovered on
            buttonHov: false
        }
    },
    methods: {
        genLinks() { //Generates links based on selected criteria
            this.$store.dispatch('generateLinks')
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
</style>
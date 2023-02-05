<template>
    <v-btn
        flat
        variant="outlined"
        top
        size="large"
        class="mr-3 my-2"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        @click="toggleConq"
        :class="(hover || currConqs.has(name)) ? 'option-alt-text' : 'option-text'">
        <img
        :src="img"
        :alt="keystone"
        class="keystone-img mr-1">
        <span class="text-none">
            {{ name }} ({{ keystone }})
        </span>
    </v-btn>
</template>

<script>
export default {
    props: {
        img: { //The image of the conqueror keystone
            required: true,
            type: String
        },
        name: { //The name of the conqueror
            required: true,
            type: String
        },
        keystone: { //The name of the conqueror keystone
            required: true,
            type: String
        }
    },
    data() {
        return {
            hover: false //If the button is being hovered
        }
    },
    computed: {
        currConqs() { //The list of selected conqs
            return this.$store.getters.getCurrentConqs
        }
    },
    methods: {
        toggleConq() { //Toggles the conq button
            if(this.currConqs.has(this.name)) {
                this.$store.commit('deleteConq', this.name)
            } else {
                this.$store.commit('submitConq', this.name)
            }
            
        }
    }
}
</script>

<style scoped>
.keystone-img {
  vertical-align: middle;
  height: 2em;
  width: 2em;
}
.option-text {
  color: #10B77F;
  background-color: #1D262F;
}
.option-alt-text {
  color: #1D262F;
  background-color: #10B77F;
  text-decoration: underline;
}
.v-btn {
    font-size: 15px;
}
</style>
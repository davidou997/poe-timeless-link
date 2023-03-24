<template>
  <v-btn
    tile
    :color="hover ? 'white' : ''"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    @click="goToRoute()">
    <v-icon
        v-if="iconName"
        :color="hover ? hoverColor : defaultColor"
        class="mr-1">
        {{ iconName }}
    </v-icon>
    <span
        v-if="text"
        :class="hover ? 'nav-hover' : 'text'"
        class="text-none local-font">
        {{ text }}
    </span>
  </v-btn>
</template>

<script>

export default {
    props: {
        iconName: { //Name of MDI icon
            required: false,
            type: String
        },
        text: { //Text displayed on
            required: false,
            type: String
        },
        route: { //Route when button is clicked
            required: true,
            type: String,
            default: ''
        },
        external: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            hover: false, //If the button is hovered
            onCurrRoute: false
        }
    },
    methods: {
        /**
         * Goes to the routed page if the curreng page isn't the intended destination.
         * Opens external link in new tab if external boolean is true
         */
        goToRoute() { //Goes to routed page if the current page isn't the intended destination
            if(this.external) { //Checks if external
                window.open(this.route, '_blank', 'noreferrer')
            } else { 
                if(!(this.$route.name.toLowerCase() === this.route.substring(1))){ //Only if current route doesn't match intended route
                    this.$router.push(this.route)
                }
            }
            
        }
    },
    computed: {
        hoverColor() { //Colour of on-hover effect of button
            return '#10B77F'
        },
        defaultColor() { //Default colour of nav button
            return '#F5F7FA'
        },
    },
}
</script>

<style scoped>
.local-font{
    font-size: 19px;
}
</style>
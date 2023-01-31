<template>
  <v-btn
    tile
    :color="hover ? 'white' : ''"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    @click="$router.push(route)">
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
            type: String
        }
    },
    data() {
        return {
            hover: false //If the button is hovered
        }
    },
    computed: {
        hoverColor() { //Colour of on-hover effect of button
            return '#10B77F'
        },
        defaultColor() { //Default colour of nav button
            return '#F5F7FA'
        }
    }
}
</script>

<style scoped>
.local-font{
    font-size: 15px;
}
</style>
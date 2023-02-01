<template>
    <v-btn
        tile
        block
        :color="(hover || id === curr) ? '#182028' : 'transparent'"
        elevation="0"
        class="text-none jewel-button py-7"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        @click="selectJewel">
        <img 
            :src="img"
            :alt="name"
            class="jewel-img mr-3">
        <span class="jewel-name" :class="(hover || id === curr) ? 'underline' : ''"> {{ name }}</span>
    </v-btn>
</template>

<script>
export default {
    props: {
        img: { //Image of the jewel
            required: true,
            type: String
        },
        name: { //Name of the jewel
            required: true,
            type: String
        },
        id: { //ID of the jewel
            required: true,
            type: String
        },
        curr: { //Currently selected jewel
            required: true,
            type: String
        }
    },
    data() {
        return { //If the button is being hovered on
            hover: false
        }
    },
    methods: {
        selectJewel: function() { //Informs parent of selected jewel
            this.$emit('selectJewel', this.id);
        }
    }
}
</script>

<style scoped>
.jewel-img {
  height: 3em;
  width: 3em;
  vertical-align: middle;
}
.jewel-button {
  justify-content: left;
}
.v-btn {
    border-radius: 0px;
}
.underline {
    text-decoration: underline;
}
.jewel-name {
    color: #E5E8EB;
    font-size: 18px;
    text-overflow: clip;
    white-space: break-spaces;
}
</style>
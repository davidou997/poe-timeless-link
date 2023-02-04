<template>
    <v-btn
        flat
        outlined
        top
        x-large
        class="mr-3 my-2"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        :class="hover ? 'option-alt-text' : 'option-text'">
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
        img: {
            required: true,
            type: String
        },
        name: {
            required: true,
            type: String
        },
        keystone: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            hover: false
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
    border: 1px solid #10B77F;
    font-size: 15px;
}
</style>
<template>
  <v-table
    v-if="links.length > 0"
    fixed-header
    class="link-table mt-2"
    density="comfortable">
    <thead>
        <tr>
            <th class="copy-column">
                Copy
            </th>
            <th class="link-column">
                Link
            </th>
            <th class="conq-column">
                Conquerors
            </th>
            <th class="seed-column">
                Seed(s)
            </th>
        </tr>
    </thead>
    <tbody>
        <tr
            v-for="(link, index) in links"
            :key="index"
            class="column-text">
            <td class="pa-0 justify-center align-center">
                <v-btn
                    class="ma-0 pa-0"
                    variant="tonal"
                    size="small"
                    width="100%"
                    height="100%"
                    :rounded="0">
                    <v-icon>
                        mdi-content-copy
                    </v-icon>
                </v-btn>
            </td>
            <td class="pa-0 justify-center align-center">
                <v-btn
                    class="ma-0 pa-0 text-none"
                    variant="tonal"
                    width="100%"
                    height="100%"
                    :rounded="0"
                    @click="openTradeLink(link.link)">
                    <v-icon
                        size="small"
                        class="mr-2">
                        mdi-open-in-new
                    </v-icon>
                    <span>Open</span>
                </v-btn>
            </td>
            <td>
                Conq 1, Conq 2, Conq 3
            </td>
            <td>
                {{ seedString(link.seeds) }}
            </td>
        </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
    computed: {
        links() { //Gets the generated links
            return this.$store.getters.getGeneratedLinks
        }
    },
    methods: { //Takes an array of strings and converts into a comma delimited string
        seedString: function(seedArray) {
            let finalString = ''
            for(let i = 0; i < seedArray.length; i++) {
                finalString += seedArray[i]
                if(i < seedArray.length - 1) {
                    finalString += ', '
                }
            }
            return finalString
        },
        openTradeLink(url) {
            window.open(url, '_blank', 'noreferrer')
        }
    }
}
</script>

<style scoped>
.copy-column {
    width: 5%;
}
.link-table {
    width: 100%;
    border: 1px #10B77F solid;
    border-radius: 4px;
    background-color: transparent;
}
.link-column {
    width: 10%;
}
.conq-column {
    width: 30%;
}
.seed-column {
    width: 55%;
}
a:link, a:visited, .column-text {
    color: #10B77F;
}
th {
    color: #1D262F !important;
    background-color: #10B77F  !important;
}
</style>
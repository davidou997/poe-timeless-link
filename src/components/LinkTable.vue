<template>
  <v-table
    v-if="links.length > 0"
    fixed-header
    class="link-table mt-2"
    density="comfortable">
    <thead>
        <tr>
            <th class="text-left link-column">
                Link
            </th>
            <th class="text-left">
                Seed(s)
            </th>
        </tr>
    </thead>
    <tbody>
        <tr
            v-for="(link, index) in links"
            :key="index"
            class="column-text">
            <td>
                <a :href="link.link"
                    target="_blank"
                    rel="noopener noreferrer">
                    {{ link.link }}
                </a>
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
        }
    }
}
</script>

<style scoped>
.link-table {
    width: 100%;
    border: 1px #10B77F solid;
    border-radius: 4px;
    background-color: transparent;
}
.link-column {
    width: 60%;
}
a:link, a:visited, .column-text {
    color: #10B77F;
}
th {
    color: #1D262F !important;
    background-color: #10B77F  !important;
}
</style>
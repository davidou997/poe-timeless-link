// import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    currentJewel: 'pride',
    currentSeeds: new Set(),
    currentConqs: new Set(),
    generatedLinks: [],
    jewels: {
      'pride': {
        name: 'Lethal Pride',
        img: require('@/assets/lethal_pride.png'),
        seedMin: 10000,
        seedMax: 18000,
        conqs: [
          {
            name: 'Akoya',
            keystone: 'Chainbreaker',
            img: require('@/assets/keystone_chainbreaker.png')
          },
          {
            name: 'Kaom',
            keystone: 'Strength of Blood',
            img: require('@/assets/keystone_strength_of_blood.png')
          },
          {
            name: 'Rakiata',
            keystone: 'Tempered by War',
            img: require('@/assets/keystone_tempered_by_war.png')
          }
        ]
      },
      'restraint': {
        name: 'Brutal Restraint',
        img: require('@/assets/brutal_restraint.png'),
        seedMin: 500,
        seedMax: 8000,
        conqs: [
          {
            name: 'Asenath',
            keystone: 'Dance with Death',
            img: require('@/assets/keystone_dance_with_death.png')
          },
          {
            name: 'Balbala',
            keystone: 'The Traitor',
            img: require('@/assets/keystone_the_traitor.png')
          },
          {
            name: 'Nasima',
            keystone: 'Second Sight',
            img: require('@/assets/keystone_second_sight.png')
          }
        ]
      },
      'vanity': {
        name: 'Glorious Vanity',
        img: require('@/assets/glorious_vanity.png'),
        seedMin: 100,
        seedMax: 8000,
        conqs: [
          {
            name: 'Ahuana',
            keystone: 'Immortal Ambition',
            img: require('@/assets/keystone_immortal_ambition.png')
          },
          {
            name: 'Doryani',
            keystone: 'Corrupted Soul',
            img: require('@/assets/keystone_corrupted_soul.png')
          },
          {
            name: 'Xibaqua',
            keystone: 'Divine Flesh',
            img: require('@/assets/keystone_divine_flesh.png')
          }
        ]
      },
      'faith': {
        name: 'Militant Faith',
        img: require('@/assets/militant_faith.png'),
        seedMin: 2000,
        seedMax: 10000,
        conqs: [
          {
            name: 'Avarius',
            keystone: 'Power of Purpose',
            img: require('@/assets/keystone_power_of_purpose.png')
          },
          {
            name: 'Dominus',
            keystone: 'Inner Conviction',
            img: require('@/assets/keystone_inner_conviction.png')
          },
          {
            name: 'Maxarius',
            keystone: 'Transcendence',
            img: require('@/assets/keystone_transcendence.png')
          }
        ]
      },
      'hubris': {
        name: 'Elegant Hubris',
        img: require('@/assets/elegant_hubris.png'),
        seedMin: 2000,
        seedMax: 160000,
        conqs: [
          {
            name: 'Cadiro',
            keystone: 'Supreme Decadence',
            img: require('@/assets/keystone_supreme_decadence.png')
          },
          {
            name: 'Caspiro',
            keystone: 'Supreme Ostentation',
            img: require('@/assets/keystone_supreme_ostentation.png')
          },
          {
            name: 'Victario',
            keystone: 'Supreme Grandstanding',
            img: require('@/assets/keystone_supreme_grandstanding.png')
          }
        ]
      }
    }
  },
  getters: {
    getCurrentJewel: state => state.currentJewel, //Returns the id of the current jewel
    getJewelName: state => id => { //Returns the name of the jewel from the passed id
      return state.jewels[id].name
    },
    getJewelImg: state => id => { //Returns the image of the jewel from the passed id
      return state.jewels[id].img
    },
    getJewels: state => Object.keys(state.jewels), //Returns a list of jewels
    getJewelConqs: state => id => { //Returns the list of conquerors of the jewel from the passed id
      return state.jewels[id].conqs
    },
    getJewelMinSeed: state => id => { //Returns the minimum seed of the jewel from the passed id
      return state.jewels[id].seedMin
    },
    getJewelMaxSeed: state => id => { //Returns the maximum seed of the jewel from the passed id
      return state.jewels[id].seedMax
    },
    getCurrentSeeds: state => { //Returns the currently selected seeds
      return state.currentSeeds
    },
    getCurrentConqs: state => { //Returns the currently selected conquerors
      return state.currentConqs
    },
    getGeneratedLinks: state => { //Returns generated links
      return state.generatedLinks
    }
  },
  mutations: {
    setCurrentJewel(state, id) { //Sets the id of the currently selected jewel
      state.currentJewel = id
    },
    submitSeed(state, seed) { //Adds the passed seed to the set
      state.currentSeeds.add(seed)
    },
    deleteSeed(state, seed) { //Removes the submitted seed from the set
      state.currentSeeds.delete(seed)
    },
    deleteSeeds(state) { //Removes all submitted seeds from the set
      state.currentSeeds.clear()
    },
    submitConq(state, conq) { //Adds the submitted conq to the set
      state.currentConqs.add(conq)
    },
    deleteConq(state, conq) { //Removes the submitted conq from the set
      state.currentConqs.delete(conq)
    },
    clearSeeds(state) { //Clears all stored seeds
      state.currentSeeds.clear()
    },
    clearConqs(state) { //Clears all stored conqs
      state.currentConqs.clear()
    },
    clearLinks(state) { //Clears all generated links
      state.generatedLinks = []
    },
    addLink(state, link) { //Adds a link to the list of generated links
      state.generatedLinks.push(link)
    }
  },
  actions: {
    generateLinks(context) { //Will generate links by contacting POE API
      let seeds = Array.from(context.getters.getCurrentSeeds)
      let conqs = Array.from(context.getters.getCurrentConqs)
      if(conqs.length < 1) { //If none are selected, use all conqs
        context.getters.getJewelConqs(context.getters.getCurrentJewel).forEach((conqInfo) => {
          //Cycles through all of the conq info and pushes its name
          conqs.push(conqInfo.name)
        })
      }
      if(seeds.length > 0 && conqs.length > 0) { //Only do something if there are seeds and conqs
        context.commit('clearLinks') //Clear all previous links
        let chunkSize = Math.floor(38 / conqs.length) //Compute chunk size, max number of modifiers are 38
        let chunks = []
        let baseLink = 'https://www.pathofexile.com/trade/search/Sanctum/?q=' //Base trade link
        let baseFilter = { //Base filter per modifier
          id: '',
          value: {
            min: 0,
            max: 0
          }
        }
        let baseQuery = { //Base of the query
          "query": {
            "status": {
              "option": "online"
            },
            "stats": [
              {
                "type": "count",
                "min" : 1,
                "filters": []
              }
            ]
          }
        }
        for(let i = 0; i < seeds.length; i += chunkSize) {
          chunks.push(seeds.slice(i, i + chunkSize))
        }
        chunks.forEach(chunk => {
          let link = {
            link: baseLink,
            seeds: chunk
          }
          let query = JSON.parse(JSON.stringify(baseQuery))
          conqs.forEach(conq => {
            let conqId = 'explicit.pseudo_timeless_jewel_' + conq.toLowerCase()
            chunk.forEach(seed => {
              let filter = JSON.parse(JSON.stringify(baseFilter))
              filter.id = conqId
              filter.value.min = seed
              filter.value.max = seed
              query.query.stats[0].filters.push(filter)
            })
          })
          link.link += JSON.stringify(query)
          context.commit('addLink', link)
        })
      }
    }
  },
  modules: {
  }
})

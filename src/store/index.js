import { createStore } from 'vuex'

export default createStore({
  state: {
    currentJewel: 'pride',
    jewels: {
      'pride': {
        name: 'Lethal Pride',
        img: require('@/assets/lethal_pride.png'),
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
    getCurrentJewel: state => state.currentJewel,
    getJewelName: state => id => {
      return state.jewels[id].name
    },
    getJewelImg: state => id => {
      return state.jewels[id].img
    },
    getJewels: state => Object.keys(state.jewels),
    getJewelConqs: state => id => {
      return state.jewels[id].conqs
    }
  },
  mutations: {
    setCurrentJewel(state, payload) {
      state.currentJewel = payload
    }
  },
  actions: {
  },
  modules: {
  }
})

import { createStore } from 'vuex'

export default createStore({
  state: {
    currentJewel: 'pride',
    jewels: {
      'pride': {
        name: 'Lethal Pride',
        img: require('@/assets/lethal_pride.png'),
        entities: [
          {
            name: 'Akoya'
          },
          {
            name: 'Kaom'
          },
          {
            name: 'Rakiata'
          }
        ]
      },
      'restraint': {
        name: 'Brutal Restraint',
        img: require('@/assets/brutal_restraint.png'),
        entities: [
          {
            name: 'Akoya'
          },
          {
            name: 'Kaom'
          },
          {
            name: 'Rakiata'
          }
        ]
      },
      'vanity': {
        name: 'Glorious Vanity',
        img: require('@/assets/glorious_vanity.png'),
        entities: [
          {
            name: 'Akoya'
          },
          {
            name: 'Kaom'
          },
          {
            name: 'Rakiata'
          }
        ]
      },
      'faith': {
        name: 'Militant Faith',
        img: require('@/assets/militant_faith.png'),
        entities: [
          {
            name: 'Akoya'
          },
          {
            name: 'Kaom'
          },
          {
            name: 'Rakiata'
          }
        ]
      },
      'hubris': {
        name: 'Elegant Hubris',
        img: require('@/assets/elegant_hubris.png'),
        entities: [
          {
            name: 'Akoya'
          },
          {
            name: 'Kaom'
          },
          {
            name: 'Rakiata'
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
    getJewels: state => Object.keys(state.jewels)
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

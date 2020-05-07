import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);




export const store = new Vuex.Store({
  state: {
  projects: [
    {
      id: 1,
      name: 'Chameleon Bonaparte' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: '#icons reimagined ',
      source: '../../../DTIYS/chameleon.jpg',
    },
    {
      id: 2,
      name: 'Ventress' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: 'Fanfique',
      source: '../../../Characters/Ventress 2.jpg',
    },
    {
      id: 3,
      name: 'Cosmo Blonde' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: '',
      source: '../../../DTIYS/cosmo blonde.jpg',
    },

    {
      id: 4,
      name: 'Purple Girl' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: '',
      source: '../../../DTIYS/purplegirl.jpg'
    },
    {
      id: 5,
      name: 'Miles Morales' ,
      category: 'Digital' ,
      tags: '',
      description: 'Fanfique',
      source: '../../../Characters/miles-morales.jpg',
    },
    {
      id: 6,
      name: 'Libra' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../DTIYS/libra.jpg',
    },
    {
      id: 7,
      name: 'Steakcrow' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../DTIYS/steakcrow.jpg',
    },
    {
      id: 8,
      name: 'Cold' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../Tales of Echo/cold.jpg',
    },
    {
      id: 9,
      name: 'Khlint' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../Tales of Echo/Khlint3.jpg',
    },
    {
      id: 10,
      name: 'Time' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../Tales of Echo/time-3.jpg',
    },
    {
      id: 11,
      name: 'Khlint' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../Tales of Echo/Khlint2.jpg',
    },
    {
      id: 12,
      name: 'Cosmic Dream' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../Tales of Echo/Cosmic-dream.jpg',
    },
    {
      id: 13,
      name: 'Virgo' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../Tales of Echo/Virgo.jpg',
    },
    {
      id: 14,
      name: 'Quiver Power' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../Characters/Quiver-power2.jpg',
    },
    {
      id: 15,
      name: 'Russel' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../Tales of Echo/Russell 2.jpg',
    },
    {
      id: 16,
      name: 'Float' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../Tales of Echo/float 3.jpg',
    },
    {
      id: 17,
      name: 'Faye' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../Tales of Echo/Faye.jpg',
    },
    {
      id: 18,
      name: 'Death' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../Tales of Echo/death.jpg',
    },
    {
      id: 19,
      name: 'Death & Milk Samurai Cyborg' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../DTIYS/deathandmilk-samurai-cyborg 4.jpg',
    }
  ]
  },
  getters: {
  projects(state){
  return state.projects;
  }
  }

  
});
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  projects: [
    {
      id: 1,
      name: 'Chameleon' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: '#icons reimagined ',
      source: '../../../DTIYS/chameleon.jpg',
    },
    {
      id: 2,
      name: 'Death and Milk Samurai Cyborg' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: '#DTIYS',
      source: '../../../DTIYS/deathandmilk-samurai-cyborg 4.jpg',
    },
    {
      id: 3,
      name: 'Death and Milk Samurai Cyborg' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: '#march of robots',
      source: '../../../DTIYS/cosmo blonde.jpg',
    },

    {
      id: 4,
      name: 'Purple Girl' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: '#march of robots',
      source: '../../../DTIYS/purplegirl.jpg'
    },
    {
      id: 5,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../DTIYS/steakcrow.jpg',
    },
    {
      id: 6,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../DTIYS/libra.jpg',
    },
    {
      id: 7,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Artchallenges/substance.jpg',
    },
    {
      id: 8,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../DTIYS/fuel.jpg',
    },
    {
      id: 9,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../DTIYS/toy.jpg',
    },
    {
      id: 10,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Tales of Echo/Khlint3.jpg',
    },
    {
      id: 11,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Tales of Echo/Khlint2.jpg',
    },
    {
      id: 12,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Tales of Echo/Cosmic-dream.jpg',
    },
    {
      id: 13,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Tales of Echo/Virgo.jpg',
    },
    {
      id: 14,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Artchallenges/bomb 1.jpg',
    },
    {
      id: 15,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Tales of Echo/Russell 2.jpg',
    },
    {
      id: 16,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Tales of Echo/float 3.jpg',
    },
    {
      id: 17,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Tales of Echo/Faye.jpg',
    },
    {
      id: 18,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Tales of Echo/death.jpg',
    },
    {
      id: 19,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Artchallenges/three1.jpg',
    },
    {
      id: 20,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Tales of Echo/cold.jpg',
    },
    {
      id: 21,
      name: '' ,
      category: 'Digital' ,
      tags: '',
      description: '#march of robots',
      source: '../../../Tales of Echo/time-3.jpg',
    },
  ]
  },
  getters: {
  projects(state){
  return state.projects;
  }
  }

  
});
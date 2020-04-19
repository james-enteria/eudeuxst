import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  projects: [
    {
      id: 1,
      name: 'Substance' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: '#march of robots ',
      source: '../../../Artchallenges/substance.jpg',
    },
    {
      id: 2,
      name: 'Bomb 1' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: '#march of robots',
      source: '../../../Artchallenges/bomb 1.jpg',
    },
    {
      id: 3,
      name: 'Death and Milk Samurai Cyborg' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: '#march of robots',
      source: '../../../Artworks; DTIYS/deathandmilk-samurai-cyborg 4.jpg',
    },
  ]
  },
  getters: {
  projects(state){
  return state.projects;
  }
  }

  
});
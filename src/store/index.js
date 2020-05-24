import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



export const store = new Vuex.Store({
  state: {
  projects: [
    {
      id: 1,
      name: 'Chameleon Bonaparte' ,
      category: 'Icons Reimagined (Alter design for Historical/Folk/Popculture Icons)' ,
      tags: 'Art Challenge',
      description: 'Napoleon Bonaparte was a successful and great ruler of France. He won several dozens of battles during his life. Would he be the same if he were a chameleon?',
      source: '../../../Icons Reimagined/chameleon.jpg',
    },
    {
      id: 2,
      name: 'Asajj Ventress' ,
      category: 'Fanatique (Fan Art)' ,
      tags: 'Art Challenge',
      description: 'This is my personal fan art of Ventress from Star Wars.',
      source: '../../../Fanatique/Ventress 2.jpg',
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
      category: 'Fanatique' ,
      tags: '',
      description: 'Here is my take on Miles Morales.',
      source: '../../../Fanatique/miles-morales.jpg',
    },
    {
      id: 6,
      name: 'Libra' ,
      category: 'DTIYS' ,
      tags: '',
      description: '',
      source: '../../../DTIYS/libra.jpg',
    },
    {
      id: 7,
      name: 'Steakcrow' ,
      category: 'DTIYS' ,
      tags: '',
      description: '',
      source: '../../../DTIYS/steakcrow.jpg',
    },
    {
      id: 8,
      name: 'Cold' ,
      category: 'Timeless (Collection of Other Worlds/Stories)' ,
      tags: '',
      description: '',
      source: '../../../Timeless/cold.jpg',
    },
    {
      id: 9,
      name: 'Khlint' ,
      category: 'Tales from Echo' ,
      tags: '',
      description: '',
      source: '../../../Tales from Echo/Khlint3.jpg',
    },
    {
      id: 10,
      name: 'Time' ,
      category: 'Course to Juno (Sci-fi Adventure)' ,
      tags: '',
      description: '',
      source: '../../../Course to Juno/time-3.jpg',
    },
    {
      id: 11,
      name: 'Khlint' ,
      category: 'Tales from Echo' ,
      tags: '',
      description: '',
      source: '../../../Tales from Echo/Khlint2.jpg',
    },
    {
      id: 12,
      name: 'Cosmic Dream' ,
      category: 'Course to Juno (Sci-fi Adventure)' ,
      tags: '',
      description: '',
      source: '../../../Course to Juno/Cosmic-dream.jpg',
    },
    {
      id: 13,
      name: 'Virgo' ,
      category: 'Tales from Echo' ,
      tags: '',
      description: '',
      source: '../../../Tales from Echo/Virgo.jpg',
    },
    {
      id: 14,
      name: 'Quiver Power' ,
      category: 'Timeless (Collection of Other Worlds/Stories)' ,
      tags: '',
      description: '',
      source: '../../../Timeless/Quiver-power2.jpg',
    },
    {
      id: 15,
      name: 'Russel' ,
      category: 'Tales from Echo' ,
      tags: '',
      description: '',
      source: '../../../Tales from Echo/Russell 2.jpg',
    },
    {
      id: 16,
      name: 'Float' ,
      category: 'Tales from Echo' ,
      tags: '',
      description: '',
      source: '../../../Tales from Echo/float 3.jpg',
    },
    {
      id: 17,
      name: 'Faye' ,
      category: 'Tales from Echo' ,
      tags: '',
      description: '',
      source: '../../../Tales from Echo/Faye.jpg',
    },
    {
      id: 18,
      name: 'Death' ,
      category: 'Icons Reimagined' ,
      tags: '',
      description: '',
      source: '../../../Icons Reimagined/death.jpg',
    },
    {
      id: 19,
      name: 'Death & Milk Samurai Cyborg' ,
      category: 'Digital' ,
      tags: '',
      description: '',
      source: '../../../DTIYS/deathandmilk-samurai-cyborg 4.jpg',
    },
    {
      id: 20,
      name: 'Triceratops Theme' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: 'lorem ipsum',
      source: '../../../Timeless/Triceratops.jpg',
    },
    {
      id: 21,
      name: 'Timmy' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: 'lorem impsum',
      source: '../../../Timeless/Timmy.jpg',
    },
    {
      id: 22,
      name: 'The Fallen' ,
      category: 'Timeless' ,
      tags: 'Art Challenge',
      description: 'lorem impsum',
      source: '../../../Timeless/The Fallen.jpg',
    },
    {
      id: 23,
      name: 'Kenma' ,
      category: 'Tales from Echo' ,
      tags: 'Art Challenge',
      description: 'lorem impsum',
      source: '../../../Tales from Echo/Kenma.jpg',
    },
    {
      id: 24,
      name: 'Rifleman' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: 'lorem impsum',
      source: '../../../Tales from Echo/Rifleman.jpg',
    },
    {
      id: 25,
      name: 'Buccaneer' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: 'lorem impsum',
      source: '../../../Tales from Echo/Buccaneer.jpg',
    },
    {
      id: 26,
      name: 'Crew Variant' ,
      category: 'Digital' ,
      tags: 'Art Challenge',
      description: 'lorem impsum',
      source: '../../../Tales from Echo/Crew Variant.jpg',
    }

  ]
  },
  getters: {
  projects(state){
  return state.projects;
  }
  }

  
});
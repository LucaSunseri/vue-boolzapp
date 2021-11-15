/* 
  Milestone 1
  Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
  Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
*/

const app = new Vue({

  el: '#app',

  data: {
    contacts: [
      {
        name: 'Michele Garibaldi',
        avatar: 'avatar_1.jpg',
      },
      {
        name: 'Girolamo Rossi',
        avatar: 'avatar_8.jpg',
      },
      {
        name: 'Marzia La Rita',
        avatar: 'avatar_6.jpg',
      },
      {
        name: 'Gaia Di Giovanni',
        avatar: 'avatar_io.jpg',
      },
      {
        name: 'Giuseppe Buffon',
        avatar: 'avatar_5.jpg',
      },
      {
        name: 'Gianfredo Grattino',
        avatar: 'avatar_7.jpg',
      },
    ]
  }

});
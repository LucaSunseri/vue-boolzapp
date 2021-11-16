/* 
  Milestone 1
  Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
  Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
  Milestone 2
  Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
  Click sul contatto mostra la conversazione del contatto cliccato
  Milestone 3
  Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
  Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
*/

const app = new Vue({

  el: '#app',

  data: {
    contacts: [
      {
        name: 'Michele Garibaldi',
        avatar: 'avatar_1.jpg',
        visible: true,
        message: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'è da tanto che non ci sentiamo',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto bene grazie, tu come stai?',
            status: 'received'
          },
          {
            date: '10/01/2020 16:30:30',
            text: 'Alla grande, oggi mi sono laureato!',
            status: 'sent'
          },
        ],
      },
      {
        name: 'Girolamo',
        avatar: 'avatar_8.jpg',
        visible: true,
        message: [
          {
            date:'20/03/2020 16:30:00',
            text: 'Hey Girolamo, perchè oggi non sei venuto a scuola?',
            status: 'sent'
          },
          {
            date:'20/03/2020 16:31:01',
            text: 'La prof. di Matematica ti cercava',
            status: 'sent'
          },
          {
            date:'20/03/2020 16:35:45',
            text: 'Non avevo studiato nulla',
            status: 'received'
          },
          {
            date:'20/03/2020 16:35:58',
            text: 'Ho detto, però a mia mamma, che stavo poco bene XD',
            status: 'received'
          },
          {
            date:'20/03/2020 18:35:45',
            text:'Vedi di studiare, perchè ha detto che ti interroga, appena ti vede',
            status: 'sent'
          },
          {
            date:'20/03/2020 21:58:35',
            text:'Grazie per avermi avvisato',
            status: 'received'
          },
        ],
      },
      {
        name: 'Mamma',
        avatar: 'avatar_6.jpg',
        visible: false,
        message: [
          {
            date:'28/03/2020 10:10:40',
            text:'Hai dato da mangiare al gatto?',
            status: 'received'
          },
          {
            date:'28/03/2020 10:15:40',
            text:'Si, già fatto!',
            status: 'sent'
          },
          {
            date:'28/03/2020 10:16:10',
            text:'I vestiti li hai stessi?',
            status: 'received'
          },
          {
            date:'28/03/2020 11:10:40',
            text:'Fatto anche quello',
            status: 'sent'
          },
          {
            date:'28/03/2020 11:30:25',
            text:'Va bene, ci vediamo per l\'ora di pranzo',
            status: 'received'
          },
        ],
      },
      {
        name: 'Gaia Di Giovanni',
        avatar: 'avatar_io.jpg',
        visible: false,
        message: [
          {
            date:'10/01/2020 15:30:55',
            text:'Ti ricordo dell\'affitto di questo mese',
            status: 'received'
          },
          {
            date:'10/01/2020 15:31:55',
            text:'Per favore la puntualità',
            status: 'received'
          },
          {
            date:'10/01/2020 18:20:05',
            text:'Va bene, non si preoccupi, provvederò subito!',
            status: 'sent'
          },
        ],
      },
    ],
    activeChat: 0,
    newMessageText: '',
  },
  methods: {

    showChat(index) {
      console.log('vediamo', index);
      this.activeChat = index;
    },

    addNewMessage(index) {
      
      console.log('Proviamo a prendere l\'input', this.newMessageText);

      if (this.newMessageText.length > 0) {
        const newMessage = {
          date: 'proviamo',
          text: this.newMessageText,
          status: 'sent'
        }

        this.contacts[index].message.push(newMessage);

        this.newMessageText = '';

        setTimeout(() => {
          const newMessage = {
            date: 'proviamo',
            text: 'Funziona',
            status: 'received'
          }
          this.contacts[index].message.push(newMessage)
        },1000)
      }


    }

  }

});
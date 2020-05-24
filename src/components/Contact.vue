<template>
    

  <div class="row text-center justify-content-center mt-5 pt-5">
    <div class="col-12">
      <h1>Social Media Accounts</h1>
    </div>

    <div class="col-md-3 col-6">

      <a href="https://deviantart.com/eudeuxst" target="_blank" rel="noopener noreferrer">
        <v-card shaped>
          <i class="fab fa-deviantart"></i>
          <p>DeviantArt</p>
        </v-card>
      </a>
    </div>

    <div class="col-md-3 col-6">
      <a href="https://instagram.com/eudeuxst" target="_blank" rel="noopener noreferrer"> 
      <v-card shaped>

      <i class="fab fa-instagram"></i>
      <p>Instagram</p>

      </v-card>
      </a>
    </div>
    <div class="col-md-3 col-6">
      <a href="https://ello.co/eudeuxst" target="_blank" rel="noopener noreferrer">
      <v-card shaped>

      <i class="fab fa-ello"></i>
      <p>Ello</p>

      </v-card>
      </a> 


    </div>
    <div class="col-md-3 col-6">
      <v-card shaped>

      <i class="fas fa-envelope"></i>
      <p>eudeuxst.studio@gmail.com</p>

      </v-card>


    </div>

    <div class="col-12 col-md-6 mb-5">
    <v-card class="p-3" raised>
    <v-card-title>Email me directly for a quote/inquiry!</v-card-title>
    
    <v-form
    ref="form" 
    @submit.prevent="sendEmail"
    method="post"
      
    >
      <v-text-field
        v-model="name"
        :counter="30"
        :rules="nameRules"
        label="Name"
        required
        outlined
        name="user_name"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        outlined
        name="user_email"
      ></v-text-field>

      <v-textarea
      v-model="message"
          outlined
          label="Message"
          name="message"
          type="submit"
          
          
        ></v-textarea>



      <v-btn
        :disabled="loading"
        class="ma-2"
        type="submit"
        color="info"
        :loading="loading"
        @click="loader = 'loading'"
      >
        send
      </v-btn>
    
    </v-form>
    </v-card>
    </div>

  </div>

</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data: () => ({
      loader: null,
      loading: false,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 30) || 'Name must be less than 30 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: ''
    }),
  methods: {
    validate () {
        this.$refs.form.validate()
    },
    sendEmail: (e) => {
      
       //will initiate loading animation on SEND button
      //this.valid= true;
      emailjs.sendForm('gmail', 'template_WzgI4IpE', e.target, 'user_MDfHDxFOT2HK1Db0vKyES')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);

        }, (error) => {
            console.log('FAILED...', error);

        });
      //this.valid=false;
      this.name = "";
      this.email = "";
      this.message = "";
    }
  },
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 5000)

        this.loader = null
      },
    }
}
</script>

<style scoped>
@font-face {
		font-family: Dense;
		src: url(../../public/dense.otf);
}
  i{
    color: grey;
    font-size: 7em;
    cursor: pointer;
  }

  h1{
    color:darkgray;
    font-size: 1.3em;
  }
  p {
    font-family: Dense, sans-serif;
    font-size: 1.5em;
  }
</style>
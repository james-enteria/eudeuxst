<template>
    

  <div class="row text-center justify-content-center">
    <div class="col-md-6">
    
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
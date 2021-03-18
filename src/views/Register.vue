<template>
  <div class="register">
  <b-container>
  <b-card bg-variant="dark" class="text-center" text-variant="white" title="Register">
  <b-form @submit="onSubmit" v-if="show">
  <b-row>
  <b-col cols="6">
  <b-form-group label="Email address">
  <b-form-input v-model="email" type="email" placeholder="Enter email"></b-form-input>
  </b-form-group>
  </b-col>
  <b-col class="6">
  <b-form-group label="Password">
  <b-form-input v-model="pass" type="password" placeholder="Enter password"></b-form-input>
  </b-form-group>
  </b-col>
  </b-row>
  <b-row>
  <b-col class="6">
  <b-form-group label="Name">
  <b-form-input v-model="name" placeholder="Enter name"></b-form-input>
  </b-form-group>
  </b-col>
  <b-col class="6">
  <b-form-group label="Surname">
  <b-form-input v-model="surname" placeholder="Enter surname"></b-form-input>
  </b-form-group>
  </b-col>
  </b-row>
  <b-row>
  <b-col class="3">
  <b-form-group label="Phone">
  <b-form-input v-model="phone" placeholder="Enter phone number" type="tel"></b-form-input>
  </b-form-group>
  </b-col>
  <b-col class="3">
  <b-form-group label="Gender">
  <select class="form-control" v-model="gender"><option>Male</option><option>Female</option><option>Other</option></select>
  </b-form-group>
  </b-col>
  </b-row>
  <br>
  <b-button variant="success" @click="addData()" v-on:click="$store.state.say('สมัครสำเร็จ ระบบได้ทำการเก็บข้อมูลของท่านแล้ว')"> Submit </b-button>
  </b-form>
  </b-card>
  </b-container>
  </div>
</template>

<script>
export const db = firebase.firestore();
import firebase from "firebase/app";
export default {
  data () {
    return {
      data:[],
      show: true,
    };
  },
  methods: {
    addData() {
      const data = {
        Email: this.email,
        First_Name: this.name,
        Last_Name: this.surname,
        Password: this.pass,
        Phone: this.phone,
        Gender: this.gender,
      };
      db.collection('User')
        .doc('infouser')
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> User');
        })
        .catch(function (error) {
          console.error('Error writing document: ', error);
        });
      const dataText = {
        Email: this.email,
        First_Name: this.name,
        Last_Name: this.surname,
        Password: this.pass,
        Phone: this.phone,
        Gender: this.gender,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection('MyText')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyText');
        })
        .catch(function (error) {
          console.error('Error writing document: ', error);
        });
    },
    reset() {},
  },
};
</script>
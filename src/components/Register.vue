<template>
    <div class="signin" style="position:relative;margin: 93px 0">
    <div class="helper">
      <b-card text-variant="black" header="Sign in" class="text-center signin-group">
        <b-form-input v-model="email" type="text" placeholder="อีเมล์" class="signin-input"></b-form-input>
        <b-form-input v-model="password" type="password" placeholder="พาสเวิร์ด" class="signin-input"></b-form-input>
        <b-form-input v-model="cpassword" type="password" placeholder="ยืนยันพาสเวิร์ด" class="signin-input"></b-form-input>
        <b-form-input v-model="fname" type="text" placeholder="ชื่อ" class="signin-input"></b-form-input>
        <b-form-input v-model="lname" type="text" placeholder="นามสกุล" class="signin-input"></b-form-input>
        <b-form-input v-model="phoneNumber" type="text" placeholder="เบอร์โทรศัพท์" class="signin-input"></b-form-input>
        <b-button class="yr-button" @click="submit()" type="submit">ตกลง</b-button>
        <!-- <b-button class="yr-button" @click="cLogout()" type="submit">Sign Out</b-button> -->
      </b-card>
      <!-- {{info}} -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */

const axios = require('axios');

    export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      cpassword: '',
      fname:'',
      lname: '',
      phoneNumber:'',
      regisDate: new Date()
    }
  },
  methods:{
      submit(){
        var querystring = require('querystring');

        var chackEP = querystring.stringify({
          User_email: this.email,
          User_password: this.password,
          User_fname: this.fname,
          User_lname: this.lname,
          User_mobile: this.phoneNumber,
          User_reg_date: this.regisDate
        });
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        axios.post('http://fishyutt.xyz/api/youry/insert_user.php', chackEP, config)
          .then((result) => {
              console.log(result)
              console.log('sccess')
          })
          .catch((error) => {
            // Do somthing
            console.log(error.response)
          })
          
      }
  }
}
</script>


<style>
  .signin {
    display: table;
    height: 100%;
    position: absolute;
    overflow: hidden;
    width: 100%;
  }

  .helper {
    display: table-cell;
    vertical-align: middle;
  }

  .signin-group {
    position: relative;
    width: 30%;
    top: -50%;
    margin: 0 auto;
  }

  .signin-input {
    margin-bottom: 20px
  }

  .yr-button {
    border-radius: 1000px;
    background: #ffa200;
    border-color: #ffa200;
    min-width: 100px;
    float: right;
  }

</style>
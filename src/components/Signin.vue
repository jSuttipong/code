<template>
  <div class="signin">
    <div class="helper">
      <b-card text-variant="black" header="Sign in" class="text-center signin-group">
        <b-form-input v-model="username" type="text" placeholder="Username" class="signin-input"></b-form-input>
        <b-form-input v-model="password" type="password" placeholder="Password" class="signin-input"></b-form-input>
        <router-link to="/Register">create account</router-link>
        <b-button class="yr-button" @click="cSignin()" type="submit">Sign in</b-button>
        <!-- <b-button class="yr-button" @click="cLogout()" type="submit">Sign Out</b-button> -->
        {{reportAlert}}
      </b-card>
      <!-- {{info}} -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const axios = require('axios');
    export default {
  name: 'App',
  data(){
      return{
          username: null,
          password: null,
          reportAlert: '',
          userSignin: false
      }

      
  },
  methods:{
      cSignin(){
        var querystring = require('querystring');
        var chackEP = querystring.stringify({
          User_email: this.username,
          User_password: this.password,
        });

        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        axios.post('http://fishyutt.xyz/api/youry/chk_user.php', chackEP, config)
          .then((result) => {
            if(result.data[0].Status_user == true){
              console.log('Login success')
              this.$session.start()
              this.$session.set('session', result.body)
              this.$session.set('session', true)
              // Vue.$http.headers.common['Authorization'] = User_email + result.body
              this.$router.push( {path:'/',params: { userSignin: true }})
              // console.log(this.$session.getAll())
            }
            else {
                this.reportAlert = 'E-mail หรือ Password ไม่ถูกต้อง ลองใหม่อีกครั้ง'
            }
            // console.log(result)
            // console.log("success")
            // console.log('---------'+this.$session.get('lgs'))
          })
          .catch((error) => {
            console.log(error.response)
          })
      },
      cLogout(){
        console.log(this.$session.getAll())
        this.$session.clear()
        this.$session.destroy()
        
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

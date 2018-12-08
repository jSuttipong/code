<template>
    <div class="fontth mt-5 mb-5" style="min-height:567px">
        <b-container>
            <h3>ข้อมูลบัตรเครดิต/เดบิต</h3>
            <!-- <b-input-group size="sm">
                
            <h5>ธนาคาร</h5>
            <b-form-input v-model="bankName"></b-form-input>
            <h5>เลขบนบัตร</h5>
            <b-form-input v-model="bankNumber"></b-form-input>
            <h5>วันที่หมดอายุ</h5>
            <b-form-input v-model="cardDate"></b-form-input>
            <h5>CVV *ด้านหลังของบัตร</h5>
            <b-form-input v-model="cvv"></b-form-input>
            </b-input-group> -->
            <b-card text-variant="black" header="" class="text-center signin-group ">
        <b-form-input v-model="email" type="text" placeholder="ธนาคาร" class="signin-input mb-3"></b-form-input>
        <b-form-input v-model="email" type="text" placeholder="เลขบนบัตร" class="signin-input mb-3"></b-form-input>
        <b-form-input v-model="email" type="text" placeholder="วันที่หมดอายุ" class="signin-input mb-3"></b-form-input>
        <b-form-input v-model="password" type="password" placeholder="CVV *ด้านหลังของบัตร" class="signin-input mb-3"></b-form-input>

         <div class="vld-parent">
        <loading :active.sync="isLoading"
        :can-cancel="false"
        loader='dots'
        color= '#106FFF'
        backgroundColor= '#ffffff'
        :is-full-page="true"></loading>
        </div>

        <!-- <bar-loader class="custom-class" :loading="loading" :size="150" :sizeUnit="px"></bar-loader> -->
        <!-- <b-button class="yr-button" @click="cLogout()" type="submit">Sign Out</b-button> -->
      </b-card>
        <!-- {{imgResult}} -->
        <div class="mt-4">
        <b-button class="yr-button" @click="createOrder()">ยืนยัน</b-button>
        <b-button class="yr-button" style="background-color:#999; border:none" @click="cancer()">ยกเลิก</b-button>
        </div>
        </b-container>
        
    </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
const axios = require('axios');
    export default {
    props:["imgResult"],
      components: {
            Loading
        },
  name: 'App',
  data(){
      return{
          isLoading: false
      }
  },
  methods:{
      createOrder(){
        this.isLoading = true;
         var querystring = require('querystring');
        var c = this.$session.get('sessionData')
        var chackEP = querystring.stringify({
          user_id: c[0].User_id,
        });

        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        
        axios.post('http://fishyutt.xyz/api/youry/insert_order.php', chackEP, config)
          .then((result) => {
           console.log(result)
           this.$router.push( {name:'Order'})
            this.isLoading = false;
          })
          .catch((error) => {
            console.log(error.response)
            this.isLoading = false;
          })
      },
      cancer(){
          this.$router.push( {name:'Home',})
      }
  }
}    
</script>
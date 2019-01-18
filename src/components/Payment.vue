<template>
    <div class="fontth mt-5 mb-5" style="min-height:567px">
        <b-container>
            <!-- <h3>ข้อมูลบัตรเครดิต/เดบิต</h3> -->
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
        <!-- <div class="center">ชำระเงิน {{orderId}}</div> -->
        <b-card text-variant="black" :header="'ชำระเงิน '+orderId" class="text-center signin-group " style="width:50%">
        <p class="left mb-1" style="font-size:14px">ธนาคาร</p>
        <b-form-input v-model="bankName" type="text" placeholder="krungthai bank" class="signin-input mb-3"></b-form-input>
        <p class="left mb-1" style="font-size:14px">ชื่อบนบัตร</p>
        <b-form-input v-model="nameOnCard" type="text" placeholder="Suttipong Senasuttiphan" class="signin-input mb-3"></b-form-input>
        <p class="left mb-1" style="font-size:14px">เลขบนบัตร</p>
        <b-form-input v-model="bankNumber" type="text" placeholder="1234 4567 8912 3456" class="signin-input mb-3"></b-form-input>
        <p class="left mb-1" style="font-size:14px">วันที่หมดอายุ</p>
        <b-form-input v-model="cardDate" type="text" placeholder="08/20" class="signin-input mb-3 left mr-3" style="width:"></b-form-input>
        <p class="mb-1 left" style="font-size:14px">cvv *ด้านหลังบัตร</p>
        <b-form-input v-model="cvv" type="password" placeholder="123" class="signin-input mb-3 " style=""></b-form-input>
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
        <div class="mt-4">
        <b-button class="yr-button"  v-b-modal.checkC>ยืนยัน</b-button>
        <b-button class="yr-button" style="background-color:#999; border:none" @click="cancer()">ยกเลิก</b-button>
        </div>
      </b-card>
        </b-container>

        <b-modal id="checkC" ref="myModalRef" hide-footer title="ยืนยันการจ่ายเงิน" >
                  <p class="my-4 cred">ยืนยัน</p>
                  <b-button @click="payment()" class="yr-button">ตกลง</b-button>
                  <b-button class="yr-button mr-3" @click="hideModal" style="background-color:#999; border:none">ยกเลิก</b-button>
        </b-modal>
    </div>
</template>
<script>
/* eslint-disable */
import Loading from 'vue-loading-overlay';
const axios = require('axios');
    export default {
    props:["orderId"],
      components: {
            Loading
        },
  name: 'App',
  data(){
      return{
          isLoading: false,
          bankName: '',
          nameOnCard: 'Suttipong Senasuttiphan',
          bankNumber: '1234456789123456',
          cardDate: '08/20',
          cvv: '789',
      }
  },
  methods:{
      payment(){
        this.$refs.myModalRef.hide()
        this.isLoading = true
        var theData = new FormData();
        theData.append('order_id',this.orderId);
        theData.append('payment_name',this.nameOnCard);
        theData.append('payment_card',this.bankName);
        theData.append('payment_date',this.cardDate);
        theData.append('payment_cvv',this.cvv);
        axios({
                  method: 'post',
                  url: 'http://fishyutt.xyz/dev/admin/files/api/orders_api/update_order_payment.php',
                  data: theData,
                  config: { headers: {'Content-Type': 'multipart/form-data' }}
              })
              .then((result) => {
              console.log(result)
              console.log('sccess')
              this.$router.push( {name:'Order'})
              this.isLoading = false
          })
          .catch((error) => {
            console.log('dataerror--------'+error)
            this.isLoading = false
          })
      },
      cancer(){
          this.$router.push( {name:'Home',})
      },
      hideModal () {
      this.$refs.myModalRef.hide()
    }
  }
}    
</script>
<style>
.helper {
    display: table-cell;
    vertical-align: middle;
  }
</style>

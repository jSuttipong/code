<template>
    <div class="fontth">
        <b-container class="wapper-order-bill">
            <div >
                <h2 class="pt-4 mb-4 center" >ข้อมูลการสั่งทำ</h2>
                <div>
                    <b-row>
                        <b-col>
                            <img :src="orderDataShow.url_marker" class="image-show" style="display: flex; justify-content: center;">
                        </b-col>
                        <b-col>
                            <h3 >เลขที่การสั่งทำ {{orderDataShow.order_id}}</h3>
                        <b-row class="mt-4">
                            <b-col>
                                <div class="bot-border mb-2"><h5>ผู้สั่งทำ</h5></div>
                                <p>คุณ {{userData.user_fname}} {{userData.user_lname}}</p>
                                <div class="bot-border mb-2"><h5>ราคา</h5></div>
                                <p>{{orderDataShow.order_price}}</p>
                            </b-col>
                            <b-col>
                                <div class="bot-border mb-2"><h5>วันที่สั่งทำ</h5></div>
                                <p>{{orderDataShow.order_date}}</p>
                            </b-col>
                            <b-col>
                                <div class="bot-border mb-2"><h5>สถานะ</h5></div>
                                <p>{{orderDataShow.order_status}}</p>
                            </b-col>
                        </b-row>
                        </b-col>
                    </b-row>
                    <div class="right">
                    <b-button class="yr-button ml-3" @click="goPayment()">ชำระเงิน</b-button>
                    <b-button class="yr-button" @click="close()">ปิด</b-button>
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>
<script>
/* eslint-disable */
import Loading from 'vue-loading-overlay';
export default {
  props: ["orderData"],
  components: {
      Loading
    },
    data(){
      return{
          isLoading: false,
          orderDataShow: '',
          userData:''
      }
  },
   mounted(){
       const getUserData = this.$session.get('sessionData')
        this.userData = getUserData[0]
       this.orderDataShow = this.orderData[0]   
      },
    methods:{
        goPayment(){
            this.$router.push( {name:'Payment',params: { orderId: this.orderDataShow.order_id}})
        },
        close(){
            this.$router.push( {name:'Home'})
        } 
    }
}  
</script>
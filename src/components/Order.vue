<template>
    <div>
        <b-container>
            <div class="order-space fontth mb-5">
                <h1 class="center mt-5">Your Order</h1>
                <div class="textName">คุณ {{userData.fname}} {{userData.lname}}</div>
                <div><p>เบอร์โทร : {{userData.mobile}}</p></div>
                <div style="width:100%;height:50px"><b-button class="yr-button order-btn">Order ทั้งหมด</b-button></div>
                <vue-good-table
                :columns="columns"
                :search-options="{
                    enabled: true
                }"
                :pagination-options="{
                    enabled: true,
                    perPage: 5,
                    perPageDropdown: [5, 10],
                }"
                @on-row-click="onRowClick"
                :rows="rows"/>
                <div class="vld-parent">
        <loading :active.sync="isLoading"
        :can-cancel="false"
        loader='dots'
        color= '#106FFF'
        backgroundColor= '#ffffff'
        :is-full-page="true"></loading>
        </div>
            </div>
            <!-- Modal Component -->
            <b-modal v-model="showData" size="lg" centered title="รายการ">
                <h3>Order ID : {{passData.orderId}}</h3>
                <h5>ประเภท : {{passData.orderType}}</h5>
                <h5>ราคา : {{passData.price}}</h5>
                <h5>สถานะ : {{passData.status}}</h5>
                <div v-for="item in imgData" :key="item">
                    <img :src="item.markerPath" alt="" class="left mr-3 ml-3 mt-3" style="width:200px;height:130px">
                </div>
                <!-- {{passData}} -->
            </b-modal>
        </b-container>
    </div>
</template>
<script>
/* eslint-disable */
import Loading from 'vue-loading-overlay';
var numeral = require('numeral');
const axios = require('axios');
export default {
    name: 'app',
    components: {
            Loading
        },
    data(){
        return{
            showData: false,
            passData: '',
            userData: '',
            imgData: [],
             columns: [
        {
          label: 'Order ID',
          field: 'orderId',
        },  
        {
          label: 'รายการ',
          field: 'orderType',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'DD MMM YYYY',
        },
        {
          label: 'ราคา',
          field: 'price',
          type: 'number',
        },
        {
          label: 'สถานะ',
          field: 'status',
        },],
         rows: [],
      isLoading: false
        }
    },
    mounted(){
        this.isLoading = true;
       const getUserData = this.$session.get('sessionData')
       this.userData = getUserData[0]
        var querystring = require('querystring');
        var chackEP = querystring.stringify({
          user_id: this.userData.User_id,
        //   User_password: this.password,
        });

        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        axios.post('http://fishyutt.xyz/api/youry/adminy/order_user.php', chackEP, config)
          .then((result) => {
            // console.log(result.data)
            const data = result.data
            // console.log(data.length)
            for (var i = 0; i < data.length; i++) { 
                this.rows.push({orderId:data[i].order_id,
            orderType:data[i].order_type,
            createdAt: data[i].order_time,
            price: data[i].order_price,
            status: data[i].order_status})
            }
            // console.log(this.rows)

            // console.log(this.rows)
            // console.log(this.rows[0].orderType)
            // if(){

            // }
             for (var i = 0; i < data.length; i++) { 
                if(this.rows[i].orderType == 0){
                    this.rows[i].orderType = "โฟโต้บุ๊ค"
                }else this.rows[i].orderType = "การ์ด";
            }
            for (var i = 0; i < data.length; i++) { 
                if(this.rows[i].status == 0){
                    this.rows[i].status = "ยังไม่จ่ายเงิน"
                }else if(this.rows[i].status == 1){
                    this.rows[i].status = "จ่ายเงินแล้ว"
                }else if(this.rows[i].status == 2){
                    this.rows[i].status = "กำลังดำเนินการ"
                }else this.rows[i].status = "เสร็จสิ้น"
            }
            
            for (var i = 0; i < data.length; i++) { 
                var c = numeral(this.rows[i].price).format('0,0')
                this.rows[i].price = c
                
            }
        // if(this.rows.orderType == 0){
        //     return 'โฟโต้บุ๊ค'
        // }else return 'การ์ด';
            this.isLoading = false
          })
          .catch((error) => {
            console.log(error.response)
            this.isLoading = false
          })

        
        // for (var i = 0; i < this.rows.length; i++) { 
        //        console.log(this.rows.orderType)
        //     }
    },
    methods:{
        onRowClick(params) {
            this.isLoading = true;
            this.showData=true
            this.passData = params.row
            this.imgData= []
             var querystring = require('querystring');
        var chackEP = querystring.stringify({
          order_id: this.passData.orderId,
        //   User_password: this.password,
        });

        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        axios.post('http://fishyutt.xyz/api/youry/adminy/order_user_detail.php', chackEP, config)
          .then((result) => {
            // console.log(result.data)
            // this.imgData.push(result.data)
            // console.log(this.imgData)
            const data = result.data
            // console.log(data)
            for (var i = 0; i < data.length; i++) { 
                this.imgData.push({markerName:data[i].marker_image_name,
                markerPath:data[i].marker_image_path,
            })
            }
            // console.log(this.imgData)
            this.isLoading = false
          })
          .catch((error) => {
            console.log(error.response)
            this.isLoading = false
          })
  },
    }
     }
</script>
<style>
.order-space{
    width: 100%;
    min-height: 566px;
    height: auto;
    position: relative
}
.order-btn{
    float:left !important;
    background-color:#61A0FF !important;
    border:none
}
.textName{
    font-size: 20px
}
</style>

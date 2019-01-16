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
            <b-modal v-model="showData" size="lg" centered :title="'รายการที่ '+passData.orderId">
                <div>
                    <h5>ประเภท : {{passData.orderType}}</h5>
                    <h5>ราคา : {{passData.price}}</h5>
                    <h5>สถานะ : {{passData.status}}</h5>
                </div>
                <!-- <div v-for="item in imgData" :key="item">
                    <img :src="item.markerPath" alt="" class="left mr-3 ml-3 mt-3" style="width:200px;height:130px">
                    <video width="50%" controls>
                            <source :src="item.videoPath" type="video/mp4">
                          </video>
                </div> -->
                <div>
                    <!-- {{imgData}} -->
                    <img :src="passData.markerImg" alt="">
                    <video width="50%" controls>
                            <source :src="passData.video" type="video/mp4">
                    </video>
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
          dateInputFormat: 'YYYY-MM-DD h:mm:ss7',
          dateOutputFormat: 'DD MMM YYYY h:mm:ss',
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
         allData: '',
      isLoading: false
        }
    },
    mounted(){
        this.isLoading = true;
    //    const getUserData = this.$session.get('sessionData')
    //    this.userData = getUserData[0]
    //    console.log('--------'+this.$session.get('sessionData'))
        var querystring = require('querystring');
        var chackEP = querystring.stringify({
            user_id: '4'
        //   user_id: this.userData.User_id,
        //   User_password: this.password,
        });

        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        var theData = new FormData();
        theData.append('user_id','4');
        var rawData = {
            user_id: '4',
        }
        rawData = JSON.stringify(rawData) 
        // axios({
        //           method: 'post',
        //           url: 'http://fishyutt.xyz/dev/admin/files/api/users_api/order_user_detail.php',
        //           data: theData,
        //           config: { headers: {'Content-Type': 'multipart/form-data' }}
        //       })
        axios.post('http://fishyutt.xyz/dev/admin/files/api/users_api/order_user_detail.php', chackEP, config)
//         axios.get('http://fishyutt.xyz/dev/admin/files/api/users_api/order_user_detail.php', {
//     params: {
//       user_id: '4'
//     }
//   })
          .then((result) => {
            console.log(result)
            console.log(result.data)
            const data = result.data
            this.allData = result.data
            console.log(data.length)
            for (var i = 0; i < data.length; i++) { 
                this.rows.push({orderId:data[i].order_id,
            orderType:data[i].order_type,
            createdAt: data[i].order_date,
            price: data[i].order_price,
            status: data[i].order_status,
            markerImg: data[i].marker.marker_img,
            video: data[i].marker.marker_vdo})
            }

            // for (var i = 0; i < data.length; i++) { 
            //     this.imgData.push({markerPath:data[i].marker.marker_img,
            //     videoPath:data[i].marker.marker_vdo,
            // })
            // }
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
            
            // for (var i = 0; i < data.length; i++) { 
            //     var c = numeral(this.rows[i].price).format('0,0')
            //     this.rows[i].price = c
                
            // }
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
            // this.isLoading = true;
            this.showData=true
            this.passData = params.row
            // this.imgData= []
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
        // axios.post('http://fishyutt.xyz/dev/admin/files/api/users_api/order_user_detail.php', chackEP, config)
        //   .then((result) => {
        //     // console.log(result.data)
        //     // this.imgData.push(result.data)
        //     // console.log(this.imgData)
        //     const data = result.data
        //     // console.log(data)
        //     for (var i = 0; i < data.length; i++) { 
        //         this.imgData.push({markerPath:data[i].marker_img,
        //         videoPath:data[i].marker_vdo,
        //     })
        //     }
        //     // console.log(this.imgData)
        //     this.isLoading = false
        //   })
        //   .catch((error) => {
        //     console.log(error.response)
        //     this.isLoading = false
        //   })
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

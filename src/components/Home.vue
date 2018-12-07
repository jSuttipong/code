<template>
  <div>
    <!-- <div>
      <HomeContent/>
    </div> -->
    <div>
  <b-row>
      <b-col md="1">
      </b-col>
      <b-col>
        <b-row>
          <b-col md="5" class="fontth fs24 cwhite">
            <h1 class="mt-5">Youry คืออะไร?</h1>
            <p> เราคือแพลตฟอร์มที่รับทำสื่อสิ่งพิมพ์ในรูปแบบออนไลน์
              โดยเราได้นำเทคโนโลยีAR มาใช้งานร่วมกับสื่อสิ่งพิมพ์
              ทำให้คุณได้รับประสบณ์ใหม่ๆ ตอนนี้เราได้ให้บริการโฟโต้บุ๊ค
              และ การ์ดเชิญสำหรับงานต่างๆ ท่านที่สนใจสามารถเลือกชม
              สินค้าได้จากทางเว็บไซต์นี่เลย
            </p>
            <br>
            <p>สำหรับท่านที่ไม่เข้าใจว่าAR คือะไร <a href="#" class="cred">คลิกเลย</a></p>
          </b-col>
          <b-col md="1"></b-col>
          <b-col md="6" left><img src="../assets/banner1.png" height="470px" width="auto" class="mt-5"></b-col>
        </b-row>
        <p class="fontth fs32 cwhite">สั่งสินค้าได้ง่ายๆเพียงแค่</p>
        <div v-for="(item) in items" class="fontth cwhite" :key="item.id">
          <div class="flowbox">
            {{item.numFlow}}
            <br>
            <img :src="item.iconFlow">
            <br>
            <br>
            {{item.nameFlow}}
          </div>
        </div>
        <!-- v for -->

      </b-col>
      <b-col md="1">
      </b-col>
    </b-row>
    <div class="fontth mt-5 ">
      <b-container>
        <h1 class="center mb-3">สินค้าแนะนำ</h1>
        <b-row>
          <b-col md="3">
            <div v-for="item in productList" :key="item.id">
              <img :src="item.pImg" class="product-box mt-3">
            </div>
          </b-col>
          <b-col md="5">
            <h1>Photo book</h1>
            <p class="fs24">โฟโต้บุ๊คสำหรับการท่องเที่ยวที่ทำให้คุณเก็บความสุข
              ย้อนวันวานไปกับรุปภาพและวีดีโอของคุณ ที่คุณได้
              รวบรวมเก็บไว้ในนี้</p>
            <h3>ตัวเลือก</h3>
            <div>
              <p class="left">ชนิดปก :</p>
              <b-form-select v-model="coverSelected" :options="coverType" class="mb-3 yr-select" size="sm" />
              <p class="left">ขนาดของหนังสือ :</p>
              <b-form-select v-model="bSizeSelected" :options="bsType" class="mb-3 yr-select" size="sm" />
              <p class="left">จำนวนหน้า :</p>
              <b-form-select v-model="pageSelected" :options="pageType" class="mb-3 yr-select" size="sm" />
              <p class="left">ราคา : 1,520</p>
            </div>
            <div class="mt-5">
              <b-button class="yr-button">เลือก</b-button>
            </div>

          </b-col>
          <b-col md="4">
            <i class="fas fa-expand-arrows-alt" v-b-modal.modal1></i>
            <img src="../assets/product/bookcover.png" style="width:auto; height:300px;">
            <b-modal id="modal1">
              <img src="../assets/product/bookcover.png" size="lg">
            </b-modal>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
    </b-container>
    <div class="bgartest mt-5 center cwhite fontth">
      <b-container>
        <h1 class="cwhite mt-5">AR Test</h1>
        <p class="fs24 mt-3">คุณสามารถนำโทรศัพท์ของคุณที่มีแอปพลิเคชั่น Youry มาสแกนเพื่อดู AR
        </p>
        <div class="center">
          <p> <img src="../assets/qrcode.jpeg" style="width:150px; height:150px;">
            ทดลองใช้AR ดาวน์โหลดได้ที่</p>
            <img src="../assets/gplogo.png" style="width:auto; height:24px;">
        </div>

      </b-container>
    </div>
    <div class="fontth" style="height: auto">
      <b-container>
        <h1 class=" mt-5 center">ทดลองสแกน AR ได้ที่นี่</h1>
        <img src="../assets/arcover.jpg" style="width:auto; height:350px;" class="mt-5">
        <img src="../assets/arcard.png" style="width:auto; height:500px;" class="mt-5">
      </b-container>
    </div>
    </div>
  </div>

</template>
<script>
/* eslint-disable */
import HomeContent from '@/components/HomeContent'
// import {userChack} from '@/components/Signin'
  export default {
    props: ["userData","userSignin"],
    name: 'Home',
    // props:['userChack'],
    data() {
      return {
        mailContact: '',
        items: [{
            numFlow: '1',
            iconFlow: require('../assets/flowicon/icon1.png'),
            nameFlow: 'เลือกสินค้าของคุณ'
          },
          {
            numFlow: '2',
            iconFlow: require('../assets/flowicon/icon2.png'),
            nameFlow: 'เลือกแบบที่สนใจ'
          },
          {
            numFlow: '3',
            iconFlow: require('../assets/flowicon/icon3.png'),
            nameFlow: 'อัพโหลดและเขียนข้อความที่ต้องการ'
          },
          {
            numFlow: '4',
            iconFlow: require('../assets/flowicon/icon4.png'),
            nameFlow: 'ชำระเงิน'
          },
          {
            numFlow: '5',
            iconFlow: require('../assets/flowicon/icon5.png'),
            nameFlow: 'ดูต้นแบบและสั่งปรับแก้'
          },
          {
            numFlow: '6',
            iconFlow: require('../assets/flowicon/icon6.png'),
            nameFlow: 'รอรับสินค้า'
          },
        ],
        productList: [{
            pName: 'photobook',
            pImg: require('../assets/product/bookcover.png')
          },
          {
            pName: 'photobook',
            pImg: require('../assets/product/card.png')
          },
          {
            pName: 'photobook',
            pImg: require('../assets/product/card2.png')
          },
        ],
        imgSelect: null,
        coverSelected: null,
        bSizeSelected: null,
        pageSelected: null,
        coverType: [{
            value: null,
            text: 'Please select an option'
          },
          {
            value: 'ปกแข็ง',
            text: 'ปกแข็ง'
          },
          {
            value: 'ปกอ่อน',
            text: 'ปกอ่อน'
          },
        ],
        bsType: [{
            value: null,
            text: 'Please select an option'
          },
          {
            value: '6x6',
            text: '6x6 นิ้ว'
          },
          {
            value: '8x8',
            text: '8x8 นิ้ว'
          },
        ],
        pageType: [{
            value: null,
            text: 'Please select an option'
          },
          {
            value: '30',
            text: '30'
          },
          {
            value: '40',
            text: '40'
          },
        ],
        

      }
    },
    methods:{
      cSignout(){
        console.log(this.$session.getAll())
        this.$session.clear()
        this.$session.destroy()
        
      }
    }

  }

</script>

<style>
  @import '../assets/Style.css';

  body {
    background-image: url("../assets/bg.png")
  }

  .f-left {
    float: left;
  }

  .bg-info {
    background-color: white !important;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: #707070;
  }

  .flowbox {
    background: #9CC7FF;
    width: 250px;
    height: 250px;
    border-radius: 1000px;
    float: left;
    text-align: center;
    margin: 5px;
    padding: 30px
  }

  .product-box {
    height: 200px;
    width: 260px;
    background-color: #707070;
    border-radius: 10px;

  }

  .email{
    width: 200px;
    margin-right: 10px
  }

  .navbar-nav .nav-link:hover{
    color: #007bff !important
  }
</style>

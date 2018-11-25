<template>
  <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
      crossorigin="anonymous">
    <b-navbar toggleable="md" type="dark" variant="info" style="box-shadow: 0px 1px 6px #888888; position:fixed;z-index:1; width:100%">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">
          <img src="../assets/logo.png" height="50" width="auto" />
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Product</b-nav-item>
            <b-nav-item href="#">Showcase</b-nav-item>
            <b-nav-item href="#">About Us</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown left>
              <!-- Using button-content slot -->
              <template slot="button-content">
                <em>Login</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- navbar -->
    <div style="height:76px; width:100%"></div>


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
    



    <div class="footer fontth cwhite">
      <b-container>
        <b-row class="mt-5">
          <b-col md="4">
            <ul>
            <li v-for="footerItem in footerItem " :key="footerItem.id" >
              <a class="cwhite left" href="#" style="margin-right:20px ">{{footerItem.name}}</a>
            </li>
            </ul>
            <br>
            <p style="font-size:12px;"><i class="fas fa-copyright" style="font-size:12px; margin-top: 110px"></i>2018 Youry, All rights reserved.</p>
          </b-col>
          <b-col md="4">
            <p>ติดต่อเรา</p>
            <p>เลขที่ 80 ถนนป๊อปปูล่า ต.บ้านใหม่
              อำเภอปากเกร็ด จังหวัดนนทบุรี 11120
              โทรศัพท์ 091-765-9890
              อีเมล์ customer@youry.com</p>
          </b-col>
          <b-col md="4">
            <p >ติดตามข่าวสาร<a href=""><i class="fab fa-instagram" style="margin:0px 10px"></i ></a>
            <a href=""><i class="fab fa-facebook" style="margin:0px 10px"></i></a>
            <a href=""><i class="fab fa-twitter" style="margin:0px 10px"></i></a></p>
            <br>
            <b-form-input v-model="text1" type="text" placeholder="E-mail" class="email left"></b-form-input>
            <b-button class="yr-button">ส่ง</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>

</template>
<script>
  /* eslint-disable */
import HomeContent from '@/components/HomeContent'
  export default {
    name: 'Home',
    data() {
      return {
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
        footerItem: [{
            name: 'หน้าแรก'
          },
          {
            name: 'สินค้า'
          },
          {
            name: 'ราคา'
          },
          {
            name: 'เกี่ยวกับเรา'
          },
        ]

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

</style>

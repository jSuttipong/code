<template>
  <div class="wrapper fontth" style="background-color:#e9ebee; height:100%">
      <div v-if="themeSelection == false">
        <b-container class="pt-3">
          <h1 class="mb-3">เลือกธีม AR</h1>
          <div v-for="themeItem in themeItem" :key="themeItem.themeTag" >
            <div @click="selectTheme(themeItem)">
              <div class="box-on">
                <h3 class="text-on-pic cwhite">{{themeItem.themeName}}</h3>
                <img class="theme-select" :src="themeItem.themepic" alt="">
              </div>
            </div>
          </div>

    <!-- <form ref="myForm">
      <input type="file" name="files" id="file" ref="file" @change="onFileChange"/>
      <b-button @click="go()">send</b-button>
    </form>
    <form ref="my2">
      <input type="file" name="vdo" id="file" ref="file" />
      <b-button @click="go()">send</b-button>
    </form> -->

    <img :src="image" style="display: flex; justify-content: center;">
        </b-container>
      </div>
     <div v-else>
        <div class="box-onbanner">
            <h1 class="text-on-banner cwhite">{{selecttionItem.themeName}}</h1>
            <img class="theme-banner" :src="selecttionItem.themepic" alt="">
        </div>
        <b-container class="mt-3 mb-5">
          <p>{{selecttionItem.themeDetail}}</p>
          <b-carousel id="carousel1" class="mt-5"
                style="text-shadow: 1px 1px 2px #333;width:50%;margin-left: auto;margin-right: auto;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="300"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
          >
            <div v-for=" data in selecttionItem.themeEx" :key="data.ex">
              <b-carousel-slide :img-src="data.ex"
              ></b-carousel-slide>
            </div>
          </b-carousel>
          <p class="mt-2 cred">*นี่เป็นเพียงตัวอย่างที่นำมาแสดงเท่านั้น เมื่อสั่งทำการออกแบบจะเปลี่ยนแปลงตามความต้องการ</p>
      <div class="mt-5 center">
        <b-button @click="back()" class="yr-button">ยกเลิก</b-button>
        <b-button @click="next()" class="yr-button">ตกลง</b-button>
      </div>

        </b-container>
      </div>
    <div class="vld-parent">
        <loading :active.sync="isLoading"
        :can-cancel="false"
        loader='dots'
        color= '#106FFF'
        backgroundColor= '#ffffff'
        :is-full-page="true"></loading>
        </div>
    <!-- {{imageType}} -->
  </div>

</template>

<script>
/* eslint-disable */

import Loading from 'vue-loading-overlay';
import FreeTransform from 'vue-free-transform'
const axios = require('axios');
  export default {
    props: ["Layouts"],
    name: 'app',
    components: {
      FreeTransform,
      Loading,
    },
    data() {
      return {
        userData: '',
        slide: 0,
      sliding: null,
        file : '',
        themeSelection: false,
        selecttionItem: null,
        passData: this.layouts,
        elements: [
        ],
        inputMarker: [],
        image: '',
        imageType: '',
        showData:false,
        videoData:'',
        isLoading: false,
        chackUpload: false,
        textIn: "",
        text: '',
        my2: '',
        myFormData: '',
        arBtSelect:[],
        arButtonItem: [
          {
            arbName:'location',
            value: 'location'
          },
          {
            arbName: 'gallery',
            value: 'gallery'
          },
          {
            arbName: 'contact',
            value: 'contact'
          },
          {
            arbName: 'freebutton',
            value: 'freebutton'
          }
        ],
        themeItem: [
          {
            themeName: 'VINTAGE',
            themeTag: 'vintage',
            themeDetail: 'เหมยเฮียแชมพูสป็อต เซ็นทรัลอ่อนด้อยอีโรติก รีดไถเทค ออสซี่ เทียมทานครูเสดเซ็นทรัล ออทิสติกฟีดตนเองติ๋มฟินิกซ์สตาร์มิลค์ เคลมไวกิ้งเซรามิกนายพราน มะกัน รากหญ้า ซัพพลายเออร์ซูเอี๋ยติ๋มแจ๊กพอตเมจิก คอนเซ็ปต์ ไอซ์ รีไซเคิลโซนี่',
            themepic: require('../assets/theme/vintage.jpg'),
            themeEx: [{
              ex: require('../assets/theme/1-ex/ex1.png'),
            },
            {
              ex: require('../assets/theme/1-ex/ex2.png'),
            },
            {
              ex: require('../assets/theme/1-ex/ex3.png'),
            }

            ]
              
          },
          {
            themeName: 'MODERN',
            themeTag: 'modern',
            themeDetail: 'เหมยเฮียแชมพูสป็อต เซ็นทรัลอ่อนด้อยอีโรติก รีดไถเทค ออสซี่ เทียมทานครูเสดเซ็นทรัล ออทิสติกฟีดตนเองติ๋มฟินิกซ์สตาร์มิลค์ เคลมไวกิ้งเซรามิกนายพราน มะกัน รากหญ้า ซัพพลายเออร์ซูเอี๋ยติ๋มแจ๊กพอตเมจิก คอนเซ็ปต์ ไอซ์ รีไซเคิลโซนี่',
            themepic: require('../assets/theme/modern.jpg')
          },
          {
            themeName: 'BLACK AND WHITE',
            themeTag: 'bandw',
            themeDetail: 'เหมยเฮียแชมพูสป็อต เซ็นทรัลอ่อนด้อยอีโรติก รีดไถเทค ออสซี่ เทียมทานครูเสดเซ็นทรัล ออทิสติกฟีดตนเองติ๋มฟินิกซ์สตาร์มิลค์ เคลมไวกิ้งเซรามิกนายพราน มะกัน รากหญ้า ซัพพลายเออร์ซูเอี๋ยติ๋มแจ๊กพอตเมจิก คอนเซ็ปต์ ไอซ์ รีไซเคิลโซนี่',
            themepic: require('../assets/theme/bandw.jpg')
          },
          {
            themeName: 'GARDEN PARTY',
            themeTag: 'garden',
            themeDetail: 'เหมยเฮียแชมพูสป็อต เซ็นทรัลอ่อนด้อยอีโรติก รีดไถเทค ออสซี่ เทียมทานครูเสดเซ็นทรัล ออทิสติกฟีดตนเองติ๋มฟินิกซ์สตาร์มิลค์ เคลมไวกิ้งเซรามิกนายพราน มะกัน รากหญ้า ซัพพลายเออร์ซูเอี๋ยติ๋มแจ๊กพอตเมจิก คอนเซ็ปต์ ไอซ์ รีไซเคิลโซนี่',
            themepic: require('../assets/theme/garden.jpg')
          }
        ]
      }
    },
    created(){
      // console.log(this.Layouts)
      // var querystring = require('querystring');


        
      // axios.get('http://fishyutt.xyz/dev/admin/files/api/query_theme.php')
      //     .then((result) => {
      //       console.log('555555555555555555555555555555')
      //       console.log(result)
            
      //     })
      //     .catch((error) => {
      //       console.log(error.response)
      //     })
    },
    mounted() {
      // const getUserData = this.$session.get('sessionData')
      //  this.userData = getUserData[0]
    },
    methods: {
      onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    onFileChange(e) {
    //   this.markerData = new FormData(this.$refs.marker);
    // this.markerData = e.target.files[0]
    this.myFormData = new FormData(this.$refs.myForm)
    // console.log('1111'+this.myFormData)
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      this.isLoading = true;
      setTimeout(() => {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = e => {
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
        this.isLoading = false;
      }, 500);
    },
    removeImage: function(e) {
      this.image = "";
    },
      go(){
        this.isLoading = true
        var myFormData2 = new FormData(this.$refs.my2)
        var querystring = require('querystring');
        // console.log('*******************'+this.formData2+'**********************')
        var chackEP = querystring.stringify({
          files: this.myFormData,
          vdo: this.myFormData2
        });

        console.log(this.myFormData)
        axios({
                  method: 'post',
                  url: 'http://fishyutt.xyz/dev/admin/files/api/orders_api/insert_order_card.php',
                  data: this.chackEP,
                  config: { headers: {'Content-Type': 'multipart/form-data' }}
              }).then((result) => {
              console.log(result)
              console.log('sccess')
              this.isLoading = false
          })
          .catch((error) => {
            // Do somthing
            this.isLoading = false
            console.log(error)
            console.log(error.response)
          })
      },
      selectTheme(data){
        this.themeSelection = true
        this.selecttionItem = data
        console.log(this.selecttionItem)
      },
      close: function (elements) {

        // delete this.elements[0]
        this.elements = []

      },
      // onFileChange(e) {
      //   this.isLoading = true
      //   // console.log(e)
      //   var files = e.target.files ;
      //   this.videoData = files;
      //   console.log(this.videoData)
      //   if (!files.length)
      //     return;

      //   this.createImage(files[0]);
        

      // },
      // createImage(file) {
        
      //   var image = new Image();
      //   var reader = new FileReader();
      //   var vm = this;
        
      //   reader.onload = (e) => {
      //     vm.image = e.target.result;
      //     // vm.imageType = e;
      //     // console.log(vm.image.naturalWidth)
      //   };
      //   reader.readAsDataURL(file);
      //   this.imageType = document.getElementById('markerFile');
      //   this.chackUpload = true
      //   // this.videoData = this.image;
      //   // console.log(vm.image.width  )
      //        setTimeout(() => {
      //       this.isLoading = false
      // },2000)
      //   console.log('---------------------')
      // },
      // removeImage: function (e) {
      //   this.image = '';
      //   this.elements = []
      //   this.chackUpload = false
      //   // this.$forceUpdate();
      // },
      
      success(){
         $("form").submit(function(evt){	 
           console.log('55555555555555555555555555555555555555555555')
      evt.preventDefault();
      var formData = new FormData($(this)[0]);
      
        // this.$router.push({name:'ChackOrder',params:{dataChack: this.elements, dataChack2:this.inputMarker} })
        // var filess = document.getElementById('files');
        this.isLoading = true;
        var querystring = require('querystring');
        // var filesData = document.getElementById('filesData')
        // console.log("-----------------"+filesData)
        var chackEP = querystring.stringify({
          files : formData,
        });
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        
        axios.post('http://fishyutt.xyz/dev/admin/files/api/orders_api/insert_order_card.php', chackEP, config)
          .then((result) => {
              console.log(result)
              console.log('sccess')
              // console.log(this.videoData)
              // this.$router.push( {name:'Home'})
              this.isLoading = false
              // this.$router.push('http://fishyutt.xyz/api/youry/uploads.php' )
              // window.open('http://fishyutt.xyz/api/youry/uploads.php', '_blank');
              
              // window.open("http://fishyutt.xyz/api/youry/uploads.php");
          })
          .catch((error) => {
            // Do somthing
            this.isLoading = false
            console.log(error.response)
          })
        // document.getElementById('input').files[0]
        // console.log('---------------------'+e)
        // this.$router.push( {name:'ChackOrder',params: { imgData: this.image,imageType:myFile}})
      })},
      // reset(){
      //   this.elements = []
      // },
      // goPayment(){
      //   this.$router.push( {name:'Payment',params: { imgResult: this.image}})
      // }
      next(){
        this.isLoading = true
      //   var myFormData = new FormData(this.$refs.myForm)
      //   // console.log(myFormData)
      //  var querystring = require('querystring');
      //   var chackEP = querystring.stringify({
      //   //   order_id: '',
      //       user_id: this.userData.User_id,
      //       order_type: '2',
      //       theme_id : '2'

      //   //   User_password: this.password,
      //   });

      //   const config = {
      //     headers: {
      //       'Content-Type': 'application/x-www-form-urlencoded'
      //     }
      //   }
      //   axios.post('http://fishyutt.xyz/dev/admin/files/api/orders_api/create_order.php', chackEP, config)
      //     .then((result) => {

      //       const data = result.data
      //       console.log('data-------------'+result)
      //       console.log('data-------------'+data)
      //       this.isLoading = false
      //     })
      //     .catch((error) => {
      //       console.log('dataerror--------'+error.response)
      //       this.isLoading = false
      //     })
        setTimeout(() => {
          this.$router.push( {name:'OrderCreate',params: { themeResult: this.selecttionItem}})
                  this.isLoading = false
        },500)
        
      },
      back(){
        this.themeSelection = false
      }
    }
  }

</script>

<style>
  #app {
    display: flex;
    background: #F8FAFC;
  }

  .wrapper {
    flex: 1;
    min-height: 680px
  }

  .workspace {
    width: 700px;
    height: auto;
    margin: 25px auto;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.10);
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: #fff;

  }

  * {
    box-sizing: border-box;
  }

  .tr-transform__content {
    user-select: none;
  }

  .tr-transform__rotator {
    top: -45px;
    left: calc(50% - 7px);
  }

  .tr-transform__rotator,
  .tr-transform__scale-point {
    background: #fff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .tr-transform__rotator:hover,
  .tr-transform__scale-point:hover {
    background: #F1F5F8;
  }

  .tr-transform__rotator:active,
  .tr-transform__scale-point:active {
    background: #DAE1E7;
  }

  .tr-transform__scale-point--tl {
    top: -7px;
    left: -7px;
  }

  .tr-transform__scale-point--ml {
    top: calc(50% - 7px);
    left: -7px;
  }

  .tr-transform__scale-point--tr {
    left: calc(100% - 7px);
    top: -7px;
  }

  .tr-transform__scale-point--tm {
    left: calc(50% - 7px);
    top: -7px;
  }

  .tr-transform__scale-point--mr {
    left: calc(100% - 7px);
    top: calc(50% - 7px);
  }

  .tr-transform__scale-point--bl {
    left: -7px;
    top: calc(100% - 7px);
  }

  .tr-transform__scale-point--bm {
    left: calc(50% - 7px);
    top: calc(100% - 7px);
  }

  .tr-transform__scale-point--br {
    left: calc(100% - 7px);
    top: calc(100% - 7px);
  }

  .upload-file {
    width: 100px;

  }

  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }

  /* .btn {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
} */

  .upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }

  .bt-h {
    height: 40px;
  }

  .item-bar {
    height: 80px;
    width: 100%;
    background-color: #07bbf6;
  }

  .add-button{
    border-radius: 1000px;
    background: #ffa200 !important;
    border-color: #ffa200;
    min-width: 100px;
}

</style>

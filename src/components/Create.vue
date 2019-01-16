<template>
  <div class="wrapper fontth pagebg" style="background-color:#fff; height:100%">
      <div v-if="themeSelection == false">
          <div class="box-onbanner">
            <h1 class="text-on-banner cwhite">ตัวอย่าง</h1>
            <img class="theme-banner" src="../assets/theme/modern.jpg" alt="">
        </div>
        <div class="box-example">
          <b-container class="pt-1">
            <b-row>
              <b-col>
                <b-carousel id="carousel1"
                style="width:100%;"
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
            <div v-for=" data in exampleDesign" :key="data.ex">
              <b-carousel-slide :img-src="data.ex"
              ></b-carousel-slide>
            </div>
          </b-carousel>
              </b-col>
              <b-col>
                <h1>Design</h1>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <b-container >
          <div class="work-area">
            <div class="layout-area" >
                <h3 class="center pt-3">เลือก Layout ในการจัดตำแน่งของปุ่ม</h3>
              <div v-for="layout in layout" :key="layout.lid" class="box-on-layout" >
                <img :src="layout.layoutImg" class="left layout-selected" >
              <div class="layout-on" @click="active = layout.lid,layoutSet(layout.value)" :class="{layoutactive: active === layout.lid }">
                <div class="text-on-layout" >{{layout.btn}}</div>
              </div>
              </div>
            </div>
            <div class="inputData-area" >
              <b-row>
                <b-col>
                  <div v-if="!image">
                  <form ref="marker" class="input-none" enctype="multipart/form-data">
                    <label for="marker-upload" class="box-upload mt-5 mb-5" style="display: flex; justify-content: center;">
                      <h1 class="text-on-upload">
                        <i class="fas fa-upload">
                          <h5 class="fontth mt-2">Upload Marker</h5>
                        </i>
                      </h1>
                    </label>
                    <input
                      class="input-none"
                      type="file"
                      name="files"
                      id="marker-upload"
                      ref="file"
                      @change="onFileChange"
                    >
                    </form>
                    </div>
                    <div v-else>
                      <img :src="image" class="image-show" style="display: flex; justify-content: center;">
                      <b-button class="mt-3 ml-3 mb-3 yr-button" @click="removeImage()">ลบ Marker</b-button>
                    </div>
                </b-col>
                <b-col class="pr-4">
                  <div v-if="image">
                    <h4 class="mt-3 fontth">อัพโหลดวีดีโอ ที่จะแสดงบนAR</h4>
                    <div v-if="!video">
                      <form ref="videoShow" class="input-none" enctype="multipart/form-data">
                        <label for="vdo-upload" class="button-upload mt-2" >
                          <h5 class="text-on-btn-upload">
                            <i class="fas fa-upload"></i>
                          </h5>
                        </label>
                        <input
                          class="input-none"
                          type="file"
                          name="vdo"
                          id="vdo-upload"
                          ref="file"
                          @change="onFileChangeToVideo"
                        >
                      </form>
                    </div>
                    <div v-else>
                    <video width="100%" controls>
                      <source :src="video" type="video/mp4">
                    </video>
                    <b-button @click="removeVideo" class="yr-button mt-2 mb-2">Remove Video</b-button>
                  </div>
                  <h4 class="corange">ปุ่มที่จะแสดง</h4>
                  <div>
                    <div >
                      <!-- <b-form-select v-if="countBtn == 4||countBtn == 3||countBtn == 2||countBtn == 1" v-model="btnData1" :options="btnOnCard" class="mb-3 yr-select" >
                        <template slot="first">
                        <option :value="null" disabled>-- เลือกปุ่มที่ 1 --</option>
                        </template>
                      </b-form-select> -->
                      <div>
                        <h5 class="mb-2">Location</h5>
                        <b-form-input class="mb-2" v-model="locationBtn" type="text" placeholder="Location ของคุณ"></b-form-input>
                      </div>
                      <div>
                        <h5 class="mb-2">Contact</h5>
                        <b-form-input class="mb-2" v-model="contactBtn" type="text" placeholder="การติดต่อ ของคุณ เช่นเบอร์โทรศัพท์"></b-form-input>
                      </div>
                      <div>
                        <h5>Gallerys</h5>
                        <form ref="gallerys" enctype="multipart/form-data">
                          <!-- <label for="file-upload" class="button-upload mt-2">
                                                  <h5 class="text-on-btn-upload"><i class="fas fa-upload"></i></h5>
                                              </label>
                          <input class="input-none " type="file" name="files" id="file-upload"  ref="file" multiple />-->
                          <label class="button-upload input-none">
                            <h5 class="text-on-btn-upload">
                              <i class="fas fa-upload"></i>
                            </h5>
                            <input type="file" ref="gallerysData" name="gallerys[]" id="filesToUpload" @change="setDataGallerys" multiple="multiple">
                          </label>
                        </form>
                      </div>
                      <div>
                        <b-button class="yr-button right ml-3" @click="createOrder()">ตกลง</b-button>
                        <b-button class="yr-button right">ยกเลิก</b-button>
                      </div>
                      <!-- <b-form-select v-if="countBtn == 4||countBtn == 3||countBtn == 2" v-model="btnData2" :options="btnOnCard" class="mb-3 yr-select" >
                        <template slot="first">
                        <option :value="null" disabled>-- เลือกปุ่มที่ 2 --</option>
                        </template>
                      </b-form-select>
                      <div v-if="btnData2=='gallery'">
                        <h5>อัพโหลดGallery</h5>
                        <GalleryForm></GalleryForm>
                      </div>
                      <div v-else-if="btnData2=='location'">
                        <h5>ข้อมูลLocation</h5>
                        <LocationForm></LocationForm>
                      </div>
                      <div v-else-if="btnData2=='contact'">
                        <h5>ข้อมูลContact</h5>
                        <ContactForm></ContactForm>
                      </div>
                      <b-form-select v-if="countBtn == 4||countBtn == 3" v-model="btnData3" :options="btnOnCard" class="mb-3 yr-select" >
                        <template slot="first">
                        <option :value="null" disabled>-- เลือกปุ่มที่ 3 --</option>
                        </template>
                      </b-form-select>
                      <div v-if="btnData3=='gallery'">
                        <h5>อัพโหลดGallery</h5>
                        <GalleryForm></GalleryForm>
                      </div>
                      <div v-else-if="btnData3=='location'">
                        <h5>ข้อมูลLocation</h5>
                        <LocationForm></LocationForm>
                      </div>
                      <div v-else-if="btnData3=='contact'">
                        <h5>ข้อมูลContact</h5>
                        <ContactForm></ContactForm>
                      </div> -->
                      <!-- <b-form-select v-model="btnData4" class="mb-3 yr-select" >
                        <template slot="first">
                        <option value="null" disabled>-- Share --</option>
                        </template>
                      </b-form-select> -->
                    </div>
                  </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
          <!-- <div v-for="themeItem in themeItem" :key="themeItem.themeTag" >
            <div @click="selectTheme(themeItem)">
              <div class="box-on">
                <h3 class="text-on-pic cwhite">{{themeItem.themeName}}</h3>
                <img class="theme-select" :src="themeItem.themepic" alt="">
              </div>
            </div>
          </div> -->

    <!-- <form ref="myForm">
      <input type="file" name="files" id="file" ref="file" @change="onFileChange"/>
      <b-button @click="go()">send</b-button>
    </form>
    <form ref="my2">
      <input type="file" name="vdo" id="file" ref="file" />
      <b-button @click="go()">send</b-button>
    </form> -->

    <!-- <img :src="image" style="display: flex; justify-content: center;"> -->
        </b-container>
      </div>
     <!-- <div v-else>
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
            <div v-for=" data in themeItem.themeEx" :key="data.ex">
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
      </div> -->
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
        active: '1',
        countBtn: '1',
        btnCard: null,
        btnData1: null,
        btnData2: null,
        btnData3: null,
        btnData4: null,
        gallerytBtn: '',
        contactBtn: '',
        locationBtn: '',
        ShareBtn: '',
        video: '',
        videoData: '',
        markerData: '',
        gallerys: [],
        userData: '',
        slide: 0,
      sliding: null,
        file : '',
        themeSelection: false,
        selecttionItem: null,
        passData: this.layouts,
        inputMarker: [],
        image: '',
        imageType: '',
        showData:false,
        videoData:'',
        isLoading: false,
        chackUpload: false,
        myFormData: '',
        btnOnCard: [
          // { 
          //   text: 'เลือกปุ่ม',
          //   value: null
          // },
          {
            text:'location',
            value: 'location',
            btnModel: ''
          },
          {
            text: 'gallery',
            value: 'gallery',
            btnModel: ''
          },
          {
            text: 'contact',
            value: 'contact',
            btnModel: ''
          },
        ],
        layout: [
          {
            layoutImg: require('../assets/layout/lv2_1.png'),
            lid: '1',
            value: '1',
            btn: '1 Button'
          },
          {
            layoutImg: require('../assets/layout/lv2_2.png'),
            lid: '2',
            value: '2',
            btn: '2 Button'
          },
          {
            layoutImg: require('../assets/layout/lv2_3.png'),
            lid: '3',
            value: '3',
            btn: '3 Button'
          },
          {
            layoutImg: require('../assets/layout/lv2_4.png'),
            lid: '4',
            value: '4',
            btn: '4 Button'
          },
          {
            layoutImg: require('../assets/layout/lv2_5.png'),
            lid: '5',
            value: '4',
            btn: '4 Button'
          },
          
        ],
        exampleDesign: [
          {
              ex: require('../assets/theme/1-ex/ex1.png'),
            },
            {
              ex: require('../assets/theme/1-ex/ex2.png'),
            },
            {
              ex: require('../assets/theme/1-ex/ex3.png'),
            }
        ],
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
      layoutSet(data){
        this.countBtn = parseInt(data)
        console.log(data)
      },
      onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    onFileChange(e) {
    //   this.markerData = new FormData(this.$refs.marker);
    // this.markerData = e.target.files[0]
    this.markerData = document.getElementById('marker-upload').files[0]
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
      }, 300);
    },
    removeImage: function(e) {
      this.isLoading = true
      setTimeout(() => {
          this.image = "";
          this.isLoading = false
        },200)
      
    },
    onFileChangeToVideo(e) {
        // this.videoData = e.target.files[0]
        this.videoData = document.getElementById('vdo-upload').files[0]
      // this.videoData = new FormData(this.$refs.video)
      console.log('videoData----'+this.videoData)
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createVideo(files[0]);
    },
    createVideo(file) {
      var video = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.video = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeVideo: function(e) {
      this.video = "";
    },
    setDataGallerys(){
      // this.files = this.$refs.files.files;
      // var input = document.getElementById('filesToUpload');
      // console.log(document.getElementById('filesToUpload').files)
      // this.gallerys = document.getElementById('filesToUpload').files
      // console.log('asdfghjkl'+this.gallerys)
        // var list = document.getElementById('fileList');

        //empty list for now...
        // while (list.hasChildNodes()) {
        //   list.removeChild(ul.firstChild);
        // }

        //for every file...
        this.gallerys = this.$refs.gallerysData.files;
        console.log(this.gallerys)
        // for (var x = 0; x < input.files.length; x++) {
        //   //add to list
        //   // this.gallerys[x].push(document.getElementById('filesToUpload').files[x])
        //   // this.gallerys[x] = document.getElementById('filesToUpload').files[x]
        //   // this.gallerys = document.getElementById('gallery').files[0]
        //   // console.log('data---'+this.gallerys)
        //   // var li = document.createElement('li');
        //   // li.innerHTML = 'File ' + (x + 1) + ':  ' + input.files[x].name;
        //   // list.append(li);
        // }
      // console.log('data---'+document.getElementById('gallerys'))
    },
      // go(){
      //   this.isLoading = true
      //   var myFormData2 = new FormData(this.$refs.my2)
      //   var querystring = require('querystring');
      //   // console.log('*******************'+this.formData2+'**********************')
      //   var chackEP = querystring.stringify({
      //     files: this.myFormData,
      //     vdo: this.myFormData2
      //   });

      //   console.log(this.myFormData)
      //   axios({
      //             method: 'post',
      //             url: 'http://fishyutt.xyz/dev/admin/files/api/orders_api/insert_order_card.php',
      //             data: this.chackEP,
      //             config: { headers: {'Content-Type': 'multipart/form-data' }}
      //         }).then((result) => {
      //         console.log(result)
      //         console.log('sccess')
      //         this.isLoading = false
      //     })
      //     .catch((error) => {
      //       // Do somthing
      //       this.isLoading = false
      //       console.log(error)
      //       console.log(error.response)
      //     })
      // },
      selectTheme(data){
        this.themeSelection = true
        this.selecttionItem = data
        console.log(this.selecttionItem)
      },
      close: function (elements) {

        // delete this.elements[0]
        this.elements = []

      },
      
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
    createOrder(){
      // var userData = this.$session.getAll()
      this.isLoading = true
      if(this.$session.get('session') == true){
        const getUserData = this.$session.get('sessionData')
        this.userData = getUserData[0]
        var theData = new FormData();
        theData.append('user_id',this.userData.user_id);
        theData.append('order_type','2');
        theData.append('layout_id',this.countBtn);
        theData.append('location',this.locationBtn);
        theData.append('contact',this.contactBtn);
        theData.append('price','1999');
        theData.append('orther','none');
        theData.append('files',this.markerData);
        theData.append('vdo',this.videoData);

        for( var i = 0; i < this.gallerys.length; i++ ){
          let file = this.gallerys[i];

          theData.append('gallerys[' + i + ']', file);
        }
        // theData.append('gallerys[]',this.gallerys);
      }
      axios({
                  method: 'post',
                  url: 'http://fishyutt.xyz/dev/admin/files/api/orders_api/insert_order_card.php',
                  data: theData,
                  config: { headers: {'Content-Type': 'multipart/form-data' }}
              })
              .then((result) => {
              console.log(result)
              console.log('sccess')
              // this.$router.push( {name:'Order'})
              this.isLoading = false
          })
          .catch((error) => {
            console.log('dataerror--------'+error)
            console.log('dataerror--------'+error.response)
            this.isLoading = false
          })
      
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

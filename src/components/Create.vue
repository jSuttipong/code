<template>
  <div class="wrapper" style="background-color:#e9ebee; height:100%">
    <!-- <div >
    <input type="file" @change="onFileChange" class="yr-button upload-file left">
  </div> -->
    <div class="item-bar">
      <b-container>
        <div class="upload-btn-wrapper" v-if="!image">
          <form action="">
          <b-button class="yr-button cwhite bt-h mt-3">Upload Marker</b-button>
          <input type="file" @change="onFileChange" id="files" name="files" />
          </form>
        </div>

        <div v-else class="upload-btn-wrapper left">
          <b-button class="yr-button cwhite bt-h mt-3" @click="removeImage" style="background-color:#e53167;border:none">Remove Marker</b-button>
        </div>
        <div class="left ml-3 mt-3" v-if="image">
          <b-button class="cwhite add-button" style="margin-top:0;background-color:#707070 !important;border:none"  @click="addButton()">Upload Video
    </b-button>
    <b-button class="cwhite add-button" style="margin-top:0"  @click="chackARBL()">Location
    </b-button>
    <b-button class="cwhite add-button" style="margin-top:0"  @click="chackARBG()">Gallery
    </b-button>
    <b-button class="cwhite add-button" style="margin-top:0"  @click="chackARBC()">Contact
    </b-button>
    <b-button class="cwhite add-button" style="margin-top:0"  @click="reset()">Reset
    </b-button>
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
    <div class="workspace" ref="workspace">
      <div v-for="element in elements" :key="element.id">
        <!-- <b-button class="yr-button cwhite" @click="close()">X</b-button> -->
        <FreeTransform :x="element.x" :y="element.y" :scale-x="element.scaleX" :scale-y="element.scaleY" :width="element.width"
          :height="element.height" :angle="element.angle" :offset-x="offsetX" :offset-y="offsetY" :disable-scale="element.disableScale === true" :textIn="textIn"
          @update="update(element.id,$event)">
          <div class="element" :style="getElementStyles(element)">
            {{textIn}}
            <!-- <img src="../assets/armarker.jpg" width="420" height="315" style="border: 2px solid #333"> -->
          </div>
        </FreeTransform>
      </div>
      <img :src="image" width="700" height="auto" >
      <!-- <video width="400" controls>
  <source :src="videoData.name" type="video/mp4">
</video> -->
    </div>
    {{imageType}}
    <b-container>
    <b-form-textarea id="textarea2"
                   v-model.trim="text"
                   placeholder="ข้อความเพิ่มเติม"
                   :rows="3"
                   class="mb-5 mt-5"></b-form-textarea>
      <b-button class="cwhite add-button mb-2 right" style="margin-top:-40px" @click="success()">เสร็จสิ้น</b-button>
    </b-container>
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
      Loading
    },
    data() {
      return {
        passData: this.layouts,
        bLocation: true,
        bGallery: true,
        bContact: true,
        bFfreebtn: true,
        elements: [
        ],
        inputMarker: [],
        offsetX: 0,
        offsetY: 0,
        image: '',
        imageType: '',
        videoData:'',
        isLoading: false,
        chackUpload: false,
        text: '',
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
        ]
      }
    },
    created(){
      // console.log(this.Layouts)
    },
    mounted() {
      this.offsetX = this.$refs.workspace.offsetLeft
      this.offsetY = this.$refs.workspace.offsetTop
    },
    methods: {
      update(id, payload) {
        this.elements = this.elements.map(item => {
          if (item.id === id) {
            return {
              ...item,
              ...payload
            }
          }
          return item
        })
      },
      getElementStyles(element) {
        const styles = element.styles ? element.styles : {}
        return {
          width: `${element.width}px`,
          height: `${element.height}px`,
          ...styles
        }
      },
      addButton() {
        let yr = Math.random();
        this.elements.push({
          id: "el-" + yr,
          x: 140,
          y: 230,
          scaleX: 1,
          scaleY: 1,
          width: 420,
          height: 315,
          angle: 0,
          classPrefix: "tr",

          styles: {
            background: "linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)",
          }
        })
        console.log(this.elements)
      },
      close: function (elements) {

        // delete this.elements[0]
        this.elements = []

      },
      onFileChange(e) {
        this.isLoading = true
        // console.log(e)
        var files = e.target.files ;
        this.videoData = files;
        console.log(this.videoData)
        if (!files.length)
          return;

        this.createImage(files[0]);
        

      },
      createImage(file) {
        
        var image = new Image();
        var reader = new FileReader();
        var vm = this;
        
        reader.onload = (e) => {
          vm.image = e.target.result;
          // vm.imageType = e;
          // console.log(vm.image.naturalWidth)
        };
        reader.readAsDataURL(file);
        this.imageType = document.getElementById('markerFile');
        this.chackUpload = true
        this.videoData = this.image;
        // console.log(vm.image.width  )
             setTimeout(() => {
            this.isLoading = false
      },2000)
        console.log('---------------------')
      },
      removeImage: function (e) {
        this.image = '';
        this.chackUpload = false
        // this.$forceUpdate();
      },
      success(){
        // this.$router.push({name:'ChackOrder',params:{dataChack: this.elements, dataChack2:this.inputMarker} })
        // var filess = document.getElementById('files');
        this.isLoading = true;
        var querystring = require('querystring');

        var chackEP = querystring.stringify({
          chk_data: this.videoData,
        });
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        
        axios.post('http://fishyutt.xyz/api/youry/uploads.php', chackEP, config)
          .then((result) => {
              console.log(result)
              console.log('sccess')
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
      },
      chackARBL(){
        if(this.bLocation == true){
          this.bLocation = false
          this.elements.push({
          id: "el-2",
          x: 0,
          y: 30,
          scaleX: 1,
          scaleY: 1,
          width: 300,
          height: 100,
          angle: 0,
          classPrefix: "tr",
          disableScale: true,
          textIn: "Location",
          styles: {
            background: "linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)"
          }
        })
        }else{
          this.bLocation = true
        }
      },
      chackARBG(){
        if(this.bGallery == true){
          this.bGallery = false
          this.elements.push({
           id: "el-3",
          x: 400,
          y: 90,
          scaleX: 1,
          scaleY: 1,
          width: 300,
          height: 100,
          angle: 0,
          classPrefix: "tr",
          disableScale: true,
          styles: {
            background: "linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)",
          }
        })
        }else{
          this.bGallery = true
        }
      },
      chackARBC(){
        if(this.bGallery == true){
          this.bGallery = false
          this.elements.push({
           id: "el-4",
          x: 0,
          y: 590,
          scaleX: 1,
          scaleY: 1,
          width: 300,
          height: 100,
          angle: 0,
          classPrefix: "tr",
          disableScale: true,
          styles: {
            background: "linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)",
          }
        })
        }else{
          this.bGallery = true
        }
      },
      reset(){
        this.elements = []
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

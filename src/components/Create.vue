<template>
  <div class="wrapper" style="background-color:#e9ebee; height:100%">

    <!-- <div >
    <input type="file" @change="onFileChange" class="yr-button upload-file left">
  </div> -->
    <div class="item-bar">
      <b-container>
        <div class="upload-btn-wrapper" v-if="!image">
          <b-button class="yr-button cwhite bt-h mt-3">Upload Marker</b-button>
          <input type="file" @change="onFileChange" name="myfile" />
        </div>

        <div v-else class="upload-btn-wrapper">
          <b-button class="yr-button cwhite bt-h mt-3" @click="removeImage">Remove Marker</b-button>
        </div>
        <b-button class="cwhite add-button ml-3" style="margin-top:-30px" v-if="chackUpload" @click="addButton()">Upload Video
    </b-button>
    <b-button class="cwhite add-button mt-3 right" style="margin-top:-30px" @click="success()">เสร็จสิ้น</b-button>
      </b-container>
    </div>

    <div class="workspace" ref="workspace">
      <div v-for="element in elements" :key="element.id">
        <b-button class="yr-button cwhite" @click="close()">X</b-button>
        <FreeTransform :x="element.x" :y="element.y" :scale-x="element.scaleX" :scale-y="element.scaleY" :width="element.width"
          :height="element.height" :angle="element.angle" :offset-x="offsetX" :offset-y="offsetY" :disable-scale="element.disableScale === true"
          @update="update(element.id,$event)">
          <div class="element" :style="getElementStyles(element)">
            <img src="../assets/armarker.jpg" width="420" height="315" style="border: 2px solid #333">
          </div>
        </FreeTransform>
      </div>
      <img :src="image" width="798px" height="auto">
    </div>
    <b-container>
    <b-form-textarea id="textarea2"
                   v-model.trim="text"
                   placeholder="ข้อความเพิ่มเติม"
                   :rows="3"
                   class="mb-5 mt-5"></b-form-textarea>
    </b-container>
  </div>

</template>

<script>
/* eslint-disable */

  import FreeTransform from 'vue-free-transform'

  export default {
    name: 'app',
    components: {
      FreeTransform
    },
    data() {
      return {
        elements: [],
        inputMarker: [],
        offsetX: 0,
        offsetY: 0,
        image: '',
        chackUpload: false,
        text: ''
      }
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
          x: 0,
          y: 0,
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
        console.log(e.naturalWidth)
        var files = e.target.files || e.dataTransfer.files;
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
          console.log(vm.image.naturalWidth)
        };
        reader.readAsDataURL(file);
        var S = document.getElementById(file);
        this.chackUpload = true
        // console.log(vm.image.width  )
      },
      removeImage: function (e) {
        this.image = '';
        this.chackUpload = false
        // this.$forceUpdate();
      },
      success(){
        
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
  }

  .workspace {
    width: 800px;
    height: 800px;
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
    background-color: #555;
  }

  .add-button{
    border-radius: 1000px;
    background: #ffa200 !important;
    border-color: #ffa200;
    min-width: 100px;
}

</style>

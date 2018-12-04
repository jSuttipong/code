<template>
<div >
    <b-container class="fontth">
    <h1 class="mt-5 mb-5">เลือกสินค้าของคุณ</h1>
    <div v-for=" product in productList" :key="product" style="height:200px;width:300px" class="left mr-5">
        <div class="">
          <router-link :to="product.pLink" ><img :src="product.pImg" style="width:300px; height:200px;position:relative;" class="mb-5 product-select item">
            <div class="overlay">
              <div class="text">Hello World</div>
            </div>
          </router-link>
        </div>
    </div>
    </b-container>
    <div style="height:519px"></div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Product',
  data () {
    return {
      upHere: false,
      productList:[
          {
            pName: 'Card',
            pImg: require('../assets/product/card.png'),
            pLink: '/Layout'
          },
          {
            pName: 'NolmalPhoto',
            pImg: require('../assets/product/normal.png'),
            pLink: '/'
          },
          {
            pName: 'Premium',
            pImg: require('../assets/product/premium.png'),
            pLink: '/'
          },]
    }
  }
}
</script>

<style>
.product-select{
  border-radius: 10px;
  background-color: #333333
}
.item{
  width: 400px;
  height: 300px;
  z-index: 5;
}
.item:hover{
  border-radius: 10px;
  width: 300px;
  height: 200px;
  background-color: #333333;
  z-index: 1;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.item:hover .overlay {
  opacity: 1;
}
</style>

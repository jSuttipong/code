<template>
<div >
    <b-container class="fontth">
    <h1 class="mt-5 mb-5">เลือกสินค้าของคุณ</h1>
    <div v-for=" product in productList" :key="product">
        <router-link to="/Create" ><img :src="product.pImg" class="left" style="width:400px; height:400px;"></router-link>
    </div>
    </b-container>
    </div>
</template>

<script>
    export default {
  name: 'Product',
  data () {
    return {
      productList:[{
            pName: 'photobook',
            pImg: require('../assets/product/bookcover.png')
          },
          {
            pName: 'photobook',
            pImg: require('../assets/product/card.png')
          },]
    }
  }
}
</script>

<style>

</style>

<template>
    <div>
        <b-container class="fontth mt-5">
            <h1>เลือก Layout ของคุณ</h1>
            <div class="layout-main-space"> 
                <div class="layout-space mb-5 mt-5 left mr-5">
                    <div>
                        <router-link to="/Create">
                            <img src="../assets/product/layout1ex.png">
                        </router-link>
                    </div>
                </div>
                <div class="layout-space mb-5 mt-5 left">
                    <div>
                        <router-link to="/Create">
                            <img src="../assets/product/customlayout.png" alt="">
                        </router-link>
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Layout',
  data(){
    return {
        Layout:[
            {
                lName: 'Layout1'
            },
            {
                lName: 'Customlayout'
            }
        ]
    }
  }
}
</script>
<style>
    .layout-space{
        height: 400px;
        width: 300px;
        border: dotted 3px #333;
        border-radius: 10px;
        padding: 0;
        text-align: center;
    }
    .layout-space img{
        height: 400px;
        width: 290px;
    }
    .layout-main-space{
        min-height: 500px;
        width: 100%;
        /* position: absolute; */
        
    }
</style>

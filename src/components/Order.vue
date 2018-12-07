<template>
    <div>
        {{ttt[0].email}}
    </div>
</template>
<script>
    export default {
    name: 'app',
    data(){
        return{
            ttt : this.$session.get('sessionData')
        }
    }
     }
</script>
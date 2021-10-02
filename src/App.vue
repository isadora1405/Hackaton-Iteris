<template>
  <v-app :style="myStyle">

    <AppTopBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar.vue' 
export default {
  name: 'App',

  components: {
    AppTopBar
  },

  data: () => ({
      
      
      myStyle:{
      backgroundColor:"#B2EBF2" 
    }
    
   

     
  }),
};
 ({
    myStyle:{
      backgroundColor:"#16a085" 
    }
  })
</script>
<style>
    
</style>

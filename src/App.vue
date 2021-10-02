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
      
      drawer: false,
      group: null,
      myStyle:{
      backgroundColor:"#16a085" 
    }
    
   

     
  }),
};
</script>
<style>
  .configuracoes{
    background: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  }  
</style>

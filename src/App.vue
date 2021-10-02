<template>
  <v-app :style="myStyle">
    <Inicio/>
    <v-app-bar
      color="yellow darken-2 accent-4"
      dense
      dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Setembro Amarelo</v-toolbar-title>
    </v-app-bar>
<v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="yellow--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-hand-heart-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Quero ajuda!</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-allergy</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sintomas</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>  
export default {
  name: 'App',

  components: {
    
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

<template>

<div class="app-top-bar" >
    
   <v-app-bar app color="yellow darken-2 accent-4" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Setembro Amarelo</v-toolbar-title>
    </v-app-bar>

  <v-navigation-drawer :style="myStyle" v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="yellow--text text--accent-4">
          <router-link to='/'>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to='sites-ajuda'>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-hand-heart-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Quero ajuda!</v-list-item-title>
          </v-list-item>
          </router-link>

           <router-link to='quero-ajuda'>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-allergy</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sintomas</v-list-item-title>
          </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
    export default {
    name: 'AppTopBar',
    data() {
        return {
          drawer: false,
          group: null,
          myStyle:{
            backgroundColor:"#B2EBF2" 
          }
        }
    }
    };
</script>

<style>

</style>
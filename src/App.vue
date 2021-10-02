<template>
  <v-app>
    <router-view/>
    <v-app-bar
      color="yellow darken-2 accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Setembro Amarelo</v-toolbar-title>

    </v-app-bar>
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
     
  }),
};
</script>

<template>
  <v-app>
    <AppTopBar />
    <Inicio/>

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
  }
};
</script>

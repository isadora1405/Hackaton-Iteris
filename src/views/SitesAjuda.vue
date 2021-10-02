<template>

  <div class="sites-ajuda">
    <h2>Procure ajuda</h2>
    <p>Se você está passando por um momento difícil e perceber que não consegue lidar com suas angústias sozinho, busque ajuda.<p>O apoio profissional pode ser muito importante para superar uma fase difícil ou receber o diagnóstico correto para um tratamento efetivo. Por mais complicada que seja a situação, há sempre uma saída.</p>
    <ul>
      <li
        v-for="site of sitesAjuda"
        :key="site.id"
      > 
        <a class="link" :href="site.link"  target="_blank">{{ site.nome }}</a>
        <v-row>
    <v-col
      v-for="n in 1"
      :key="n"
      class="d-flex child-flex"
      cols="11"
    >
      <v-img
        :src="site.imagem"
        aspect-ratio="1"
        class="grey lighten-2"
        width="100%"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
      </li>
    </ul>
    
  </div>
  
</template>

<script>
export default {
  name: 'SitesAjuda',
  data() {
    return {
      sitesAjuda: []
    }
  },
  created() {
    fetch('https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json')
      .then(response => response.json())
      .then(json => {
        this.sitesAjuda = json
      })
  }
}
</script>
<style>
  h2{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    font-size: 50px;
  }
  p{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
  }
  .link{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>

<template>
  <div class="sites-ajuda">
    <h2>Procure ajuda</h2>
    <p>Se você precisa de ajuda ou conhece alguem que precise, nestes sites você pode encontrar  o que necessita</p>
    <ul>
      <li
        v-for="site of sitesAjuda"
        :key="site.id"
      >
        <a :href="site.url">{{ site.nome }}</a>
        <v-row>
    <v-col
      v-for="n in 1"
      :key="n"
      class="d-flex child-flex"
      cols="3"
    >
      <v-img
        :src="site.imagem"
        aspect-ratio="1"
        class="grey lighten-2"
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

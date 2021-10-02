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

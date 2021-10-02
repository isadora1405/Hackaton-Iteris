<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">Uma conversa, um abraço ou um simples "estou aqui", pode salvar muitas vidas!</h2>
        <v-img class="inicio-imagem mb-4"
        src="https://lh3.googleusercontent.com/proxy/H1nWTjnOwAuclzVZlWlpMO8KhI15V0HWJTf6O5QnDw3Byakb6k9zGPTm2O6f4GjaRhGl2NQmoBa6mJ90u-IBDON0ZKq_hwx2G16DeYRWUEdsCxTyU5mbbBgbUHAb">
        </v-img>
        <div> 
            <v-icon x-large>mdi-comment-multiple</v-icon>
            <p>Busque informações, procure ajuda, fale abertamente sobre as emoções.</p>
        </div>
        
    </v-container>
</template>

<script>
export default {
    name: 'Inicio',
    data() {
    return {
      group: null,
    }
  }
}
</script>

<style scoped>
    .inicio-imagem {
        border-radius: 3px;
    }
</style>
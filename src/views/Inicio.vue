<template>
    <v-container >
        <h2 class="texto-inicial text-h5 text-center mb-3 mt-5">Uma conversa, um abraço ou um simples "estou aqui", pode salvar muitas vidas!</h2>
        <v-img class="inicio-imagem mb-4"
        src="https://lh3.googleusercontent.com/proxy/H1nWTjnOwAuclzVZlWlpMO8KhI15V0HWJTf6O5QnDw3Byakb6k9zGPTm2O6f4GjaRhGl2NQmoBa6mJ90u-IBDON0ZKq_hwx2G16DeYRWUEdsCxTyU5mbbBgbUHAb">
        </v-img>
        <div> 
            <v-card :style="myStyle" class="d-flex flex-row mb-6"  flat tile mr-0>
                <v-icon  color="black" class="mr-2" x-large >mdi-comment-multiple</v-icon>
                <h3  class="texto-informativo text-center mb-0">Busque informações, procure ajuda, fale abertamente sobre as emoções.</h3>
            </v-card>
            
        </div>

        <v-footer  padless>
            <v-card class="flex" flat tile>
                <v-card-title class="rodape">
                    <strong class="subheading">Siga-nos nas Redes Sociais</strong>

                    <v-spacer></v-spacer>

                    <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                        <v-icon size="24px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                </v-card-title>
                
            </v-card>
        </v-footer>
        
    </v-container>
</template>

<script>
export default {
    name: 'Inicio',
    data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],

      myBackgroundStyle:{
          backgroundColor: "yellow darken-2 accent-4"
      },
      myStyle:{
            backgroundColor:"#B2EBF2" 
        }
        

    }
  }
}
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap");
    .inicio-imagem {
        border-radius: 5px;
    }
    .texto-inicial{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif!important;
        font-size: 35px !important;
    }
    .texto-informativo{
        font-family: sans-serif !important;
        font-size: 25px !important;
    }
    .rodape{
        background-color: #FFD600 !important;
    }
</style>
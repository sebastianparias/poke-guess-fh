<template>
  <PokemonPage />
</template>

<script>
import PokemonPage from '@/pages/PokemonPage.vue'

export default {
  name: 'App',
  components: {
    PokemonPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


  background-color: #FF0000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23fc3030' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23f96060' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23f79191' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23f4c1c1' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23F1F1F1' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
</style>

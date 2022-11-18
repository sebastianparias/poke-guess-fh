<template>
  <!-- <div style="max-width: 50vw; max-height: 50vh; background-color: white;"> -->
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
  padding: 1em;

}

body{
  background-image: url('./assets/pokemon2.jpg');
}
</style>

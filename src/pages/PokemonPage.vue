<template>
    <h1 v-if="!pokemon">Cargando...</h1>

    <div v-else>
        <h1>Who is this pokemon?</h1>
        <!-- img -->
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon " />

        <!-- opciones -->
        <PokemonOptions @selection="checkAnswer($event)" :pokemons="pokemonArray" />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{message}}</h2>
            <button @click="newGame()">New game</button>
        </template>

    </div>
</template>


<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    name: 'PokemonPage',

    components: {
        PokemonPicture, PokemonOptions
    },

    data() {
        return {
            pokemonArray: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },

    methods: {
        async mixPokemonArray() {
            this.pokemonArray = await getPokemonOptions()

            const randomInteger = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArray[randomInteger]
        },

        checkAnswer(pokemonId) {
            // console.log(pokemonId)
            this.showPokemon = true

            this.message = this.pokemon.id == pokemonId ? `You're right!` : `Oops :( it was ${this.pokemon.name}`
            this.showAnswer = true
        },

        newGame(){
            this.showAnswer = false
            this.showPokemon = false
            this.pokemonArray = []
            this.pokemon = null
            this.mixPokemonArray()

        }
    },

    mounted() {
        this.mixPokemonArray()
    }
}
</script>


<style lang="">
    
</style>
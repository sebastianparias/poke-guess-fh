<template>
    <h1 v-if="!pokemon" style="color: white;">Loading...</h1>

    <div v-else>
        <h1 class="three-d">Who is this pokemon?</h1>

        <!-- img -->
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

        <!-- opciones -->
        <PokemonOptions @selection="checkAnswer($event)" :pokemons="pokemonArray" />

        <template v-if="showAnswer">
            <h2 class="fade-in mt-3">{{ message }}</h2>
            <button @click="newGame()" class="btn">New game</button>
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
            if (this.showAnswer) {
                this.message = "Click new game!"
                return
            }

            this.showPokemon = true
            this.message = this.pokemon.id == pokemonId ? `You're right!` : `Oops :( it was ${this.pokemon.name}`
            this.showAnswer = true
        },

        newGame() {
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


<style scoped>
.three-d {
    text-transform: uppercase;
    font-family: verdana;
    font-weight: 700;
    color: #f5f5f5;
    text-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 5px 1px #919191,
        1px 6px 1px #919191,
        1px 7px 1px #919191,
        1px 8px 1px #919191,
        1px 9px 1px #919191,
        1px 10px 1px #919191,
        1px 18px 6px rgba(16, 16, 16, 0.4),
        1px 22px 10px rgba(16, 16, 16, 0.2),
        1px 25px 35px rgba(16, 16, 16, 0.2),
        1px 30px 60px rgba(134, 94, 94, 0.4);
}

.btn {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    font-weight: bold;
    margin-top: 3%;
}

.btn:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
}

.mt-3 {
    margin-top: 3%;
}
</style>
<template>
    <h1 v-if="!pokemon" style="color: black;">Loading...</h1>

    <div v-else id="card">
        <h1 class="three-d">Who is this pokemon?</h1>

        <!-- img -->
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

        <!-- opciones -->
        <PokemonOptions @selection="checkAnswer($event)" :pokemons="pokemonArray" />

        <div class="white-text">
            <p>Wins: {{ wins }}</p>
            <p>Remaining lifes:
                <img v-for="n in lifes" src="https://img.icons8.com/emoji/24/null/white-heart.png" class="life" />
            </p>
            <p>Streak: {{ streak }}</p>
            <p v-if="showAnswer && lifes">Next game in {{ counter }}</p>

        </div>

        <template v-if="showAnswer">
            <h2 class="fade-in mt-3" style="color: white;">{{ message }}</h2>
        </template>

        <button v-if="lifes == 0" class="new-game btn" @click="newGame()">
            New game
        </button>

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
            message: '',
            lifes: 3,
            streak: 0,
            wins: 0,
            counter: 5
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
                return
            }

            this.showPokemon = true

            if (this.pokemon.id == pokemonId) {
                this.message = `You're right!`
                this.wins++
                this.streak++
            } else {
                this.message = `Oops :( it was ${this.pokemon.name}`
                this.lifes--
                this.streak = 0
            }

            this.showAnswer = true
            this.count()
        },

        count() {
            if (this.lifes) {
                this.counter = 5

                const interval = setInterval(() => {
                    this.counter = this.counter - 1
                    if (this.counter == 0) {
                        clearInterval(interval);
                        this.counter = 5
                        this.newRound()
                    }
                }, 1000)

                interval()
            }
        },

        newRound() {
            this.showAnswer = false
            this.showPokemon = false
            this.pokemonArray = []
            this.pokemon = null
            this.mixPokemonArray()
        },

        newGame() {
            this.lifes = 3
            this.streak = 0
            this.wins = 0
            this.newRound()
        }
    },

    mounted() {
        this.mixPokemonArray()
    },


}
</script>


<style scoped>
.three-d {
    text-transform: uppercase;
    font-family: verdana;
    font-weight: 700;
    color: rgb(250, 211, 84);
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

.mt-3 {
    margin-top: 3%;
}

#card {
    /* background-color: rgb(222,235,217);  */
    background-color: rgba(198, 58, 32, 0.85);
    border-radius: 10px;
    max-width: fit-content;
    margin: auto;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.white-text {
    color: white;
    font-weight: bold;
}

.new-game {
    color: #2c3e50;
}

.new-game:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
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

.life {
    vertical-align: middle;
}
</style>
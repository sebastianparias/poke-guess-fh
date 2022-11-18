<template lang="">
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id"
            @click="$emit('selection', pokemon.id)">
            {{pokemon.name}}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'PokemonOptions',
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    }
}
</script>


<style scoped>
    /* Pokemon Options */
ul {
    list-style-type: none;
    margin-top: 20%;
}

li {
    background-color: rgb(250,211,84);
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    font-weight: bold;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>
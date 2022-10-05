import pokemonApi from '@/api/pokemonApi'

const getPokemons = () => {
    const pokemonsArray = Array.from(Array(650))
    return pokemonsArray.map((_, index) => index + 1)
}

const getPokemonOptions = async() => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))

    return pokemons
}

const getPokemonNames = async ([a, b, c, d] = []) => {
    // const respuesta = await pokemonApi.get(`/1`)

    // console.log(respuesta)

    const promisesArray = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]

    const [poke1, poke2, poke3, poke4] = await Promise.all(promisesArray)

    return [
        {name: poke1.data.name, id: poke1.data.id},
        {name: poke2.data.name, id: poke2.data.id},
        {name: poke3.data.name, id: poke3.data.id},
        {name: poke4.data.name, id: poke4.data.id},
    ]
}

export default getPokemonOptions
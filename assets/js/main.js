function convertPokemonToList(pokemon) {
    return `
        <li class="pokemon" class="${pokemon.type}">
            <span class="number">#0${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li>${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.img}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToList).join('')
})
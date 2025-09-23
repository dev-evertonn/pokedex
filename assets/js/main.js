const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5;
let offset = 0
const maxRecords = 15;

function loadPokemonList(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#0${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.img}" alt="${pokemon.name}">
            </div>
        </li>
    `).join('')
        pokemonList.innerHTML += newHtml;
    })
}

loadPokemonList(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNextPage = offset + limit;

    if (qtdRecordsWithNextPage >= maxRecords) {
        const newlimit = maxRecords - offset;
        loadPokemonList(offset, newlimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonList(offset, limit);
    }
})
const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
let currentId = 1;

const renderDetails = (details) => {
    const container = document.querySelector('.container');

    container.innerHTML = `
        <div class="card">
            <img src="${details.sprites.other.home.front_default}" />
            <h2>${details.name}</h2>
            <p>#${details.id}</p>
        </div>
    `;
};

const loadPokemonData = async (nextId) => {
    currentId = +nextId;
    const response = await fetch(apiURL + currentId);
    const data = await response.json();

    renderDetails(data);
};

const loadActionEvents = () => {
    const previousButton = document.querySelector('#previous');
    const nextButton = document.querySelector('#next');
    const searchForm = document.querySelector('#search-form')

    nextButton.addEventListener('click', () => {
        loadPokemonData(currentId + 1);
    });

    previousButton.addEventListener('click', () => {
        loadPokemonData(currentId - 1);
    });

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('#search-input');
        loadPokemonData(input.value);
    });
};

loadPokemonData(1)
loadActionEvents()


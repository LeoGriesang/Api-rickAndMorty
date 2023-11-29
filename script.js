"use strict";
async function fetchApi() {
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
    const json = await response.json();
    mostrarPersonagens(json);
}
fetchApi();
function mostrarPersonagens(data) {
    data.results.forEach((data) => {
        console.log(data);
    });
}

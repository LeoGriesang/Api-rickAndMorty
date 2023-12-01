"use strict";
async function fetchApi() {
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
    const json = await response.json();
    mostrarPersonagens(json);
}
fetchApi();
function mostrarPersonagens(data) {
    const img1 = document.getElementById('img-1');
    if (img1 instanceof HTMLImageElement) {
        console.log(img1?.src);
        img1?.setAttribute('src', data.results[0].image);
    }
    data.results.forEach((data) => {
        console.log(data);
    });
}

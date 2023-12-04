"use strict";
async function fetchApi() {
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
    const json = await response.json();
    mostrarPersonagens(json);
}
fetchApi();
function mostrarPersonagens(data) {
    const img1 = document.getElementById('img-1');
    const conteudo1 = document.getElementById('conteudo-1');
    if (img1 instanceof HTMLImageElement && conteudo1 instanceof HTMLElement) {
        img1.setAttribute('src', data.results[0].image);
        conteudo1.innerHTML = `
            <h1>${data.results[0].name}</h1>
            <h2>${data.results[0].status} - <span>${data.results[0].species}</span></h2>
            <h3>Last known location:</h3>
            <p>${data.results[0].location.name}</p>
            <h3>origin:</h3>
            <p>${data.results[0].origin.name}</p>
        `;
    }
    const img2 = document.getElementById('img-2');
    const conteudo2 = document.getElementById('conteudo-2');
    if (img2 instanceof HTMLImageElement && conteudo2 instanceof HTMLElement) {
        img2.src = `${data.results[1].image}`;
        conteudo2.innerHTML = `
        <h1>${data.results[1].name}</h1>
        <h2>${data.results[1].status} - <span>${data.results[1].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data.results[1].location.name}</p>
        <h3>origin:</h3>
        <p>${data.results[1].origin.name}</p>
        `;
    }
    const img3 = document.getElementById('img-3');
    const conteudo3 = document.getElementById('conteudo-3');
    if (img3 instanceof HTMLImageElement && conteudo3 instanceof HTMLElement) {
        img3.src = `${data.results[3].image}`;
        conteudo3.innerHTML = `
        <h1>${data.results[3].name}</h1>
        <h2>${data.results[3].status} - <span>${data.results[3].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data.results[3].location.name}</p>
        <h3>origin:</h3>
        <p>${data.results[3].origin.name}</p>
        `;
    }
    const img4 = document.getElementById('img-4');
    const conteudo4 = document.getElementById('conteudo-4');
    if (img4 instanceof HTMLImageElement && conteudo4 instanceof HTMLElement) {
        img4.src = `${data.results[9].image}`;
        conteudo4.innerHTML = `
        <h1>${data.results[9].name}</h1>
        <h2>${data.results[9].status} - <span>${data.results[9].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data.results[9].location.name}</p>
        <h3>origin:</h3>
        <p>${data.results[9].origin.name}</p>
        `;
    }
    const img5 = document.getElementById('img-5');
    const conteudo5 = document.getElementById('conteudo-5');
    if (img5 instanceof HTMLImageElement && conteudo5 instanceof HTMLElement) {
        img5.src = `${data.results[6].image}`;
        conteudo5.innerHTML = `
        <h1>${data.results[6].name}</h1>
        <h2>${data.results[6].status} - <span>${data.results[6].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data.results[6].location.name}</p>
        <h3>origin:</h3>
        <p>${data.results[6].origin.name}</p>
        `;
    }
    const img6 = document.getElementById('img-6');
    const conteudo6 = document.getElementById('conteudo-6');
    if (img6 instanceof HTMLImageElement && conteudo6 instanceof HTMLElement) {
        img6.src = `${data.results[14].image}`;
        conteudo6.innerHTML = `
        <h1>${data.results[14].name}</h1>
        <h2>${data.results[14].status} - <span>${data.results[14].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data.results[14].location.name}</p>
        <h3>origin:</h3>
        <p>${data.results[14].origin.name}</p>
        `;
    }
    data.results.forEach((data) => {
        console.log(data);
    });
}

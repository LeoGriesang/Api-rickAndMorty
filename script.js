"use strict";
async function fetchTeste() {
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
    const json = await response.json();
    console.log(json);
}
fetchTeste();
async function fetchApi(data1, data2, data3, data4, data5, data6) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${data1}, ${data2}, ${data3}, ${data4}, ${data5}, ${data6}`);
    const json = await response.json();
    mostrarPersonagens(json);
    console.log(json);
}
fetchApi('1', '2', '3', '4', '5', '6');
function mostrarPersonagens(data) {
    const img1 = document.getElementById('img-1');
    const conteudo1 = document.getElementById('conteudo-1');
    if (img1 instanceof HTMLImageElement && conteudo1 instanceof HTMLElement) {
        img1.setAttribute('src', data[0].image);
        conteudo1.innerHTML = `
            <h1>${data[0].name}</h1>
            <h2>${data[0].status} - <span>${data[0].species}</span></h2>
            <h3>Last known location:</h3>
            <p>${data[0].location.name}</p>
            <h3>origin:</h3>
            <p>${data[0].origin.name}</p>
        `;
    }
    const img2 = document.getElementById('img-2');
    const conteudo2 = document.getElementById('conteudo-2');
    if (img2 instanceof HTMLImageElement && conteudo2 instanceof HTMLElement) {
        img2.src = `${data[1].image}`;
        conteudo2.innerHTML = `
        <h1>${data[1].name}</h1>
        <h2>${data[1].status} - <span>${data[1].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data[1].location.name}</p>
        <h3>origin:</h3>
        <p>${data[1].origin.name}</p>
        `;
    }
    const img3 = document.getElementById('img-3');
    const conteudo3 = document.getElementById('conteudo-3');
    if (img3 instanceof HTMLImageElement && conteudo3 instanceof HTMLElement) {
        img3.src = `${data[3].image}`;
        conteudo3.innerHTML = `
        <h1>${data[3].name}</h1>
        <h2>${data[3].status} - <span>${data[3].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data[3].location.name}</p>
        <h3>origin:</h3>
        <p>${data[3].origin.name}</p>
        `;
    }
    const img4 = document.getElementById('img-4');
    const conteudo4 = document.getElementById('conteudo-4');
    if (img4 instanceof HTMLImageElement && conteudo4 instanceof HTMLElement) {
        img4.src = `${data[2].image}`;
        conteudo4.innerHTML = `
        <h1>${data[2].name}</h1>
        <h2>${data[2].status} - <span>${data[2].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data[2].location.name}</p>
        <h3>origin:</h3>
        <p>${data[2].origin.name}</p>
        `;
    }
    const img5 = document.getElementById('img-5');
    const conteudo5 = document.getElementById('conteudo-5');
    if (img5 instanceof HTMLImageElement && conteudo5 instanceof HTMLElement) {
        img5.src = `${data[4].image}`;
        conteudo5.innerHTML = `
        <h1>${data[4].name}</h1>
        <h2>${data[4].status} - <span>${data[4].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data[4].location.name}</p>
        <h3>origin:</h3>
        <p>${data[4].origin.name}</p>
        `;
    }
    const img6 = document.getElementById('img-6');
    const conteudo6 = document.getElementById('conteudo-6');
    if (img6 instanceof HTMLImageElement && conteudo6 instanceof HTMLElement) {
        img6.src = `${data[5].image}`;
        conteudo6.innerHTML = `
        <h1>${data[5].name}</h1>
        <h2>${data[5].status} - <span>${data[5].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data[5].location.name}</p>
        <h3>origin:</h3>
        <p>${data[5].origin.name}</p>
        `;
    }
}
const btn = document.getElementById('btn');
btn?.addEventListener('click', refresh);
function refresh(event) {
    event.preventDefault();
    let num1 = Math.floor(Math.random() * 826).toLocaleString();
    let num2 = Math.floor(Math.random() * 826).toLocaleString();
    let num3 = Math.floor(Math.random() * 826).toLocaleString();
    let num4 = Math.floor(Math.random() * 826).toLocaleString();
    let num5 = Math.floor(Math.random() * 826).toLocaleString();
    let num6 = Math.floor(Math.random() * 826).toLocaleString();
    fetchApi(num1, num2, num3, num4, num5, num6);
}

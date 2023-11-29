async function fetchApi() {
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
    const json = await response.json();
    mostrarPersonagens(json)
}
fetchApi();

interface personagem {
    info: {};
    results: resultado[];
}
interface resultado {
    id: number;
    image: string;
    name: string;
    species: string;
    status: string;
}

function mostrarPersonagens(data: personagem) {
    data.results.forEach((data) => {
        console.log(data);
    })
}

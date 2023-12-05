
async function fetchApi(data1: string, data2: string, data3: string, data4: string, data5: string, data6: string) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${data1}, ${data2}, ${data3}, ${data4}, ${data5}, ${data6}`);
    const json = await response.json();
    mostrarPersonagens(json)
}
fetchApi('1', '2', '3', '4', '5', '6');

interface resultado {
    id: number;
    image: string;
    name: string;
    species: string;
    status: "Alive" | "Dead" | "unknown";
    location: {
        name: string;
    };
    origin: {
        name: string;
    };
}

function mostrarPersonagens(data: resultado[]) {
    const img1 = document.getElementById('img-1');
    const conteudo1 = document.getElementById('conteudo-1');        
    if (img1 instanceof HTMLImageElement && conteudo1 instanceof HTMLElement) {
        let color;
        if (data[0].status === "Alive") {
            color = '#55CC44';
        } else if (data[0].status === "Dead") {
            color = '#D63D2E';
        } else {
            color = '#B7B7CA';
        }
        img1.setAttribute('src', data[0].image)
        conteudo1.innerHTML = `
            <h1>${data[0].name}</h1>
            <h2><span style="background: ${color}"></span>${data[0].status} - <span>${data[0].species}</span></h2>
            <h3>Last known location:</h3>
            <p>${data[0].location.name}</p>
            <h3>origin:</h3>
            <p>${data[0].origin.name}</p>
        `
    }

    const img2 = document.getElementById('img-2');
    const conteudo2 = document.getElementById('conteudo-2');
    if (img2 instanceof HTMLImageElement && conteudo2 instanceof HTMLElement) {
        let color;
        if (data[1].status === "Alive") {
            color = '#55CC44';
        } else if (data[1].status === "Dead") {
            color = '#D63D2E';
        } else {
            color = '#B7B7CA';
        }
        img2.src = `${data[1].image}`
        conteudo2.innerHTML = `
        <h1>${data[1].name}</h1>
        <h2><span style="background: ${color}"></span>${data[1].status} - <span>${data[1].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data[1].location.name}</p>
        <h3>origin:</h3>
        <p>${data[1].origin.name}</p>
        `
    }

    const img3 = document.getElementById('img-3');
    const conteudo3 = document.getElementById('conteudo-3');
    if (img3 instanceof HTMLImageElement && conteudo3 instanceof HTMLElement) {
        let color;
        if (data[2].status === "Alive") {
            color = '#55CC44';
        } else if (data[2].status === "Dead") {
            color = '#D63D2E';
        } else {
            color = '#B7B7CA';
        }
        img3.src = `${data[2].image}`
        conteudo3.innerHTML = `
        <h1>${data[2].name}</h1>
        <h2><span style="background: ${color}"></span>${data[2].status} - <span>${data[2].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data[2].location.name}</p>
        <h3>origin:</h3>
        <p>${data[2].origin.name}</p>
        `
    }

    const img4 = document.getElementById('img-4');
    const conteudo4 = document.getElementById('conteudo-4');
    if (img4 instanceof HTMLImageElement && conteudo4 instanceof HTMLElement) {
        let color;
        if (data[3].status === "Alive") {
            color = '#55CC44';
        } else if (data[3].status === "Dead") {
            color = '#D63D2E';
        } else {
            color = '#B7B7CA';
        }
        img4.src = `${data[3].image}`
        conteudo4.innerHTML = `
        <h1>${data[3].name}</h1>
        <h2><span style="background: ${color}"></span>${data[3].status} - <span>${data[3].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data[3].location.name}</p>
        <h3>origin:</h3>
        <p>${data[3].origin.name}</p>
        `
    }

    const img5 = document.getElementById('img-5');
    const conteudo5 = document.getElementById('conteudo-5');
    if (img5 instanceof HTMLImageElement && conteudo5 instanceof HTMLElement) {
        let color;
        if (data[4].status === "Alive") {
            color = '#55CC44';
        } else if (data[4].status === "Dead") {
            color = '#D63D2E';
        } else {
            color = '#B7B7CA';
        }
        img5.src = `${data[4].image}`
        conteudo5.innerHTML = `
        <h1>${data[4].name}</h1>
        <h2><span style="background: ${color}"></span>${data[4].status} - <span>${data[4].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data[4].location.name}</p>
        <h3>origin:</h3>
        <p>${data[4].origin.name}</p>
        `
    }

    const img6 = document.getElementById('img-6');
    const conteudo6 = document.getElementById('conteudo-6');
    if (img6 instanceof HTMLImageElement && conteudo6 instanceof HTMLElement) {
        let color;
        if (data[5].status === "Alive") {
            color = '#55CC44';
        } else if (data[5].status === "Dead") {
            color = '#D63D2E';
        } else {
            color = '#B7B7CA';
        }
        img6.src = `${data[5].image}`
        conteudo6.innerHTML = `
        <h1>${data[5].name}</h1>
        <h2><span style="background: ${color}"></span>${data[5].status} - <span>${data[5].species}</span></h2>
        <h3>Last known location:</h3>
        <p>${data[5].location.name}</p>
        <h3>origin:</h3>
        <p>${data[5].origin.name}</p>
        `
    }
}

const btn = document.getElementById('btn');

btn?.addEventListener('click', refresh);

function refresh(event: MouseEvent) {
    event.preventDefault();
    let num1 = Math.floor(Math.random() * 826).toLocaleString();
    let num2 = Math.floor(Math.random() * 826).toLocaleString();
    let num3 = Math.floor(Math.random() * 826).toLocaleString();
    let num4 = Math.floor(Math.random() * 826).toLocaleString();
    let num5 = Math.floor(Math.random() * 826).toLocaleString();
    let num6 = Math.floor(Math.random() * 826).toLocaleString();

    fetchApi(num1, num2, num3, num4, num5, num6);

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

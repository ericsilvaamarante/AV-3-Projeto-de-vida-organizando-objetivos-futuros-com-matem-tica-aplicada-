const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-12-10T00:00:20");
const tempoObjetivo2 = new Date("2028-12-20T00:00:30");
const tempoObjetivo3 = new Date("2025-11-03T00:00:40");
const tempoObjetivo4 = new Date("2026-05-25T00:00:50");
const tempoObjetivo5 = new Date("9999-12-30T00:00:50");


const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4, tempoObjetivo5];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
const logo = document.getElementById('dvd-logo');
let x = 50, y = 50;
let dx = 2, dy = 2; // Velocidade
let colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
let currentColor = 0;

function animate() {
    // Movimento
    x += dx;
    y += dy;
    
    // Detecta colisão com bordas
    if (x + logo.width >= window.innerWidth || x <= 0) {
        dx = -dx;
        changeColor();
    }
    if (y + logo.height >= window.innerHeight || y <= 0) {
        dy = -dy;
        changeColor();
    }
    
    // Aplica nova posição
    logo.style.left = x + 'px';
    logo.style.top = y + 'px';
    
    requestAnimationFrame(animate);
}

function changeColor() {
    logo.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
}

// Inicia animação
animate();

// Gerar um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Inicializar contadores de tentativas
let tentativas = 0;

// Função para comparar a entrada do usuário com o número aleatório
function adivinharNumero() {
    // Obter a entrada do usuário
    const palpite = parseInt(document.getElementById("palpite").value);

    // Incrementar o contador de tentativas
    tentativas++;

    // Obter o elemento de mensagem
    const mensagemElement = document.getElementById("mensagem");

    // Verificar se o palpite é correto
    if (palpite === numeroAleatorio) {
        mensagemElement.textContent = `Parabéns! Você acertou o número em ${tentativas} tentativas.`;
    } else if (palpite > numeroAleatorio) {
        mensagemElement.textContent = "Tente um número menor.";
    } else {
        mensagemElement.textContent = "Tente um número maior.";
    }
}
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Função para mostrar o próximo slide
function nextSlide() {
    slides[currentSlide].style.display = 'none'; // esconde o slide atual
    currentSlide = (currentSlide + 1) % slides.length; // avança para o próximo slide
    slides[currentSlide].style.display = 'block'; // exibe o próximo slide
}

// Função para mostrar o slide anterior
function previousSlide() {
    slides[currentSlide].style.display = 'none'; // esconde o slide atual
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // volta para o slide anterior
    slides[currentSlide].style.display = 'block'; // exibe o slide anterior
}

// Exibir o primeiro slide
slides[currentSlide].style.display = 'block';
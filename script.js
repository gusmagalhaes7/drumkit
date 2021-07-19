// Reconhece tudo que está sendo digitado no body
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase());
});
// Função para criar composição através do input
document.querySelector('.composer button').addEventListener('click', () => {
    let music = document.querySelector('#input').value;

    // Verifica se music é diferente de vazio e cria um array para armazenar os valores digitados
    if (music !== '') {
        let musicArray = music.split('');
        playComposition(musicArray);
    }
});

// Função para tocar os valores recebidos nas teclas. Com querySelector é possível pegar todos os elementos de um grupo específico
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
    //Efeito de click com css, seta a cor e depois de um tempo a tecla volta ao normal
    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300);
    }
}
//Toca a composição que foi inserida no input através do botão. Executa as batidas por partes com base no tempo setado
function playComposition(musicArray) {
    let wait = 0;

    for (let musicItem of musicArray) {
        setTimeout(() => {
            playSound(`key${musicItem}`);
        }, wait);

        wait += 250;
    }
}
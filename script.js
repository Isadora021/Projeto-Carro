// Definição da classe Carro
class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
        this.velocidade = 0; // Novo atributo
        this.ligado = false;
        this.carroImagem = document.getElementById("carroImagem"); // Salva uma referência à imagem
        this.somLigar = document.getElementById("somLigar"); // Salva uma referência ao som de ligar
        this.somAcelerar = document.getElementById("somAcelerar"); // Salva uma referência ao som de acelerar
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log("Carro ligado!");
            this.carroImagem.classList.remove("desligado"); // Remove a classe "desligado"
            this.somLigar.play(); // Reproduz o som de ligar
        } else {
            console.log("O carro já está ligado.");
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            this.velocidade = 0; // Zera a velocidade ao desligar
            console.log("Carro desligado!");
            this.atualizarVelocidadeNaTela(); // Atualiza a tela
            this.carroImagem.classList.add("desligado"); // Adiciona a classe "desligado"
        } else {
            console.log("O carro já está desligado.");
        }
    }

    acelerar() {
        if (this.ligado) {
            this.velocidade += 10; // Aumenta a velocidade em 10
            console.log("Acelerando! Velocidade: " + this.velocidade + " km/h");
            this.atualizarVelocidadeNaTela(); // Atualiza a tela
            this.animarCarro(); // Chama o método para animar o carro
            this.somAcelerar.play(); // Reproduz o som de acelerar
        } else {
            console.log("O carro precisa estar ligado para acelerar.");
        }
    }

    animarCarro() {
      this.carroImagem.classList.add("movendo"); // Adiciona a classe "movendo"
      setTimeout(() => { // Remove a classe "movendo" após a animação terminar
        this.carroImagem.classList.remove("movendo");
      }, 1000); // 1000 milissegundos = 1 segundo (duração da animação)
    }

    atualizarVelocidadeNaTela() {
        document.getElementById("velocidadeCarro").textContent = this.velocidade;
    }
}

// Criando um objeto Carro
const meuCarro = new Carro("Sedan", "Prata");

// Exibindo o modelo e a cor na tela
document.getElementById("modeloCarro").textContent = meuCarro.modelo;
document.getElementById("corCarro").textContent = meuCarro.cor;

// Inicialmente, o carro está desligado, então adicionamos a classe "desligado"
meuCarro.carroImagem.classList.add("desligado");

// Adicionando os eventos aos botões
document.getElementById("ligarBtn").addEventListener("click", function() {
    meuCarro.ligar();
});

document.getElementById("desligarBtn").addEventListener("click", function() {
    meuCarro.desligar();
});

document.getElementById("acelerarBtn").addEventListener("click", function() {
    meuCarro.acelerar();
});
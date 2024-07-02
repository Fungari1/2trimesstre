const caixaPrincipal = document.querySelect(".caixa-principal")
const caixaPerguntas = document.querySelect(".caixa-perguntas")
const caixaAlternativas = document.querySelect(".caixa-alternativas")
const caixaResultado = document.querySelect(".caixa-resultado")
const textoResultado = document.querySelect(".texto-resultado")

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
        {
            texto: "Alternativa 1",
            afirmacao: "afirmacao"
        },
        {
            texto: "Alternativa 2",
            afirmacao: "afirmacao"
        }
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
            texto: "Alternativa 1",
            afirmacao: "afirmacao"
        },
        {
            texto: "Alternativa 2",
            afirmacao: "afirmacao"
        }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
        {
            texto: "Alternativa 1",
            afirmacao: "afirmacao"
        },
        {
            texto: "Alternativa 2",
            afirmacao: "afirmacao"
        }
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
         {
            texto: "Alternativa 1",
            afirmacao: "afirmacao"
        },
        {
            texto: "Alternativa 2",
            afirmacao: "afirmacao"
        }
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            {
            texto: "Alternativa 1",
            afirmacao: "afirmacao"
        },
        {
            texto: "Alternativa 2",
            afirmacao: "afirmacao"
        }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAltrnativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

mostraPergunta();
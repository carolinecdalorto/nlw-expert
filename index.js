const perguntas = [
  {
    "pergunta": "Qual é o conceito central na filosofia de Derrida?",
    "respostas": [
      "Desconstrução",
      "Essência",
      "Totalidade"
    ],
    "correta": 0
  },
  {
    "pergunta": "Em seu trabalho 'Glas', Derrida discute a teoria de qual outro filósofo?",
    "respostas": [
      "Immanuel Kant",
      "Georg Friedrich Hegel",
      "Martin Heidegger"
    ],
    "correta": 1
  },
  {
    "pergunta": "Qual é o termo que Derrida usa para descrever a 'escrita' que está além da linguagem tradicional?",
    "respostas": [
      "Arque-escrita",
      "Trans-escrita",
      "Meta-escrita"
    ],
    "correta": 0
  },
  {
    "pergunta": "Qual é o nome da abordagem de Derrida à interpretação textual, que enfatiza múltiplas camadas de significado e ambiguidade?",
    "respostas": [
      "Interpretação múltipla",
      "Interpretação hermenêutica",
      "Interpretação deconstrutiva"
    ],
    "correta": 2
  },
  {
    "pergunta": "Quem foi o filósofo que debateu com Derrida sobre a 'metáfora viva'?",
    "respostas": [
      "Michel Foucault",
      "Jean-François Lyotard",
      "Paul Ricoeur"
    ],
    "correta": 2
  },
  {
    "pergunta": "Qual é o título do seminário de Derrida sobre a morte de Deus?",
    "respostas": [
      "A Ficção do Sagrado",
      "A Língua Inacessível",
      "O Fim da Teologia"
    ],
    "correta": 0
  },
  {
    "pergunta": "Qual é o termo que Derrida usa para descrever o ato de revelar as contradições dentro de uma filosofia ou texto?",
    "respostas": [
      "Desconstrução",
      "Reificação",
      "Desvendamento"
    ],
    "correta": 0
  },
  {
    "pergunta": "Qual é o conceito-chave que Derrida usa para criticar a ideia de uma linguagem transparente e objetiva?",
    "respostas": [
      "Logocentrismo",
      "Essencialismo",
      "Referencialismo"
    ],
    "correta": 0
  },
  {
    "pergunta": "Qual é o nome do método de análise textual desenvolvido por Derrida que se concentra na desconstrução dos pressupostos subjacentes?",
    "respostas": [
      "Metodologia deconstrutiva",
      "Teoria discursiva",
      "Análise semiótica"
    ],
    "correta": 0
  },
  {
    "pergunta": "O que Derrida criticou em sua famosa obra 'Positions'?",
    "respostas": [
      "A alienação social",
      "A metafísica da presença",
      "A ideia de autoria"
    ],
    "correta": 1
  }
]
    
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
    
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    // loop ou laço de repetição
    for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
      
      for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
          corretas.delete(item)
          if(estaCorreta) {
            corretas.add(item)
          }
  
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
        } 
    
        quizItem.querySelector('dl').appendChild(dt)
      }
    
      
      quizItem.querySelector('dl dt').remove()
      
      
      // coloca a pergunta na tela
      quiz.appendChild(quizItem)
    }
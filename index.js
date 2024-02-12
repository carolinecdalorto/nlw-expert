const perguntas = [
  {
    "pergunta": "Quem é considerado o pai da antropologia?",
    "respostas": [
      "Charles Darwin",
      "Franz Boas",
      "Edward Burnett Tylor"
    ],
    "correta": 2
  },
  {
    "pergunta": "Qual desses antropólogos é conhecido por desenvolver a teoria da cultura?",
    "respostas": [
      "Bronisław Malinowski",
      "Claude Lévi-Strauss",
      "Edward Burnett Tylor"
    ],
    "correta": 2
  },
  {
    "pergunta": "Qual desses antropólogos é famoso por seu trabalho com culturas nativas americanas?",
    "respostas": [
      "Margaret Mead",
      "Bronisław Malinowski",
      "Franz Boas"
    ],
    "correta": 2
  },
  {
    "pergunta": "Quem é conhecido por introduzir o conceito de etnocentrismo?",
    "respostas": [
      "Bronisław Malinowski",
      "Franz Boas",
      "Ruth Benedict"
    ],
    "correta": 0
  },
  {
    "pergunta": "Qual desses antropólogos é considerado o fundador da antropologia cultural britânica?",
    "respostas": [
      "Ruth Benedict",
      "Margaret Mead",
      "Bronisław Malinowski"
    ],
    "correta": 2
  },
  {
    "pergunta": "Qual foi o período em que a antropologia começou a ser reconhecida como disciplina acadêmica?",
    "respostas": [
      "Século XVIII",
      "Século XIX",
      "Século XX"
    ],
    "correta": 1
  },
  {
    "pergunta": "Qual desses antropólogos é conhecido por seu trabalho de campo com os Trobriandeses?",
    "respostas": [
      "Franz Boas",
      "Bronisław Malinowski",
      "Ruth Benedict"
    ],
    "correta": 1
  },
  {
    "pergunta": "Quem é famoso por introduzir o conceito de relativismo cultural?",
    "respostas": [
      "Franz Boas",
      "Bronisław Malinowski",
      "Ruth Benedict"
    ],
    "correta": 0
  },
  {
    "pergunta": "Qual desses antropólogos é conhecido por seu estudo da cultura do povo Nuer?",
    "respostas": [
      "Margaret Mead",
      "Edward Burnett Tylor",
      "Evans-Pritchard"
    ],
    "correta": 2
  },
  {
    "pergunta": "Qual desses antropólogos é conhecido por desenvolver a teoria estruturalista?",
    "respostas": [
      "Claude Lévi-Strauss",
      "Bronisław Malinowski",
      "Margaret Mead"
    ],
    "correta": 0
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
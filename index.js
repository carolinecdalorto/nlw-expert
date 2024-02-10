const perguntas = [
    {
      pergunta: "Qual é a função em JavaScript que permite declarar uma variável?",
      respostas: [
        "define",
        "var",
        "let"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// este é um comentário",
        "/* este é um comentário */",
        "-- este é um comentário"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método em JavaScript que converte uma string em minúsculas?",
      respostas: [
        "toLowerCase()",
        "lowerCase()",
        "convertLowerCase()"
      ],
      correta: 0
    },
    {
      pergunta: "Como se refere a uma função dentro de um objeto em JavaScript?",
      respostas: [
        "método",
        "função interna",
        "objeto de função"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas: [
        "function",
        "func",
        "declare"
      ],
      "correta": 0
    },
    {
      pergunta: "Qual é o resultado da expressão '5' + 2 em JavaScript?",
      respostas: [
        "7",
        "52a",
        "52"
      ],
      correta: 1
    },
    {
      pergunta: "Como você verifica o tipo de uma variável em JavaScript?",
      respostas: [
        "typeof",
        "type",
        "varType"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método push() faz em um array em JavaScript?",
      respostas: [
        "remove um elemento do final do array",
        "adiciona um elemento ao final do array",
        "adiciona um elemento ao início do array"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de negação lógica em JavaScript?",
      respostas: [
        "!",
        "not",
        "not()"
      ],
      correta: 0
    }
  ];
    
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
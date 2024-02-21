const perguntas = [
  {
    "pergunta": "Qual é o papel da Antropologia das corporações na análise da cultura organizacional?",
    "respostas": [
      "Apenas observar e descrever as práticas culturais das corporações.",
      "Identificar os valores e crenças subjacentes que influenciam as práticas corporativas.",
      "Desenvolver estratégias de marketing para promover a cultura corporativa."
    ],
    "correta": 1
  },
  {
    "pergunta": "Como a Antropologia das corporações contribui para a compreensão das relações de poder dentro das organizações?",
    "respostas": [
      "Analisando apenas as estruturas formais de autoridade.",
      "Investigando as interações sociais e os mecanismos informais de influência.",
      "Ignorando as dinâmicas de poder para focar apenas na eficiência operacional."
    ],
    "correta": 1
  },
  {
    "pergunta": "Por que a Antropologia das corporações é considerada uma abordagem holística para o estudo das empresas?",
    "respostas": [
      "Porque se concentra exclusivamente nas práticas de gestão.",
      "Porque analisa as empresas dentro de um contexto sociocultural mais amplo.",
      "Porque ignora as dimensões culturais e sociais das organizações."
    ],
    "correta": 1
  },
  {
    "pergunta": "Como a Antropologia das corporações pode ajudar as empresas a lidar com a diversidade cultural em ambientes de trabalho globalizados?",
    "respostas": [
      "Padronizando as práticas corporativas para minimizar as diferenças culturais.",
      "Desenvolvendo estratégias para promover a inclusão e a colaboração entre funcionários de diferentes origens culturais.",
      "Ignorando as diferenças culturais para evitar conflitos internos."
    ],
    "correta": 1
  },
  {
    "pergunta": "Quais são os principais desafios enfrentados pelos antropólogos das corporações ao conduzir pesquisas em ambientes empresariais?",
    "respostas": [
      "Focar apenas nos aspectos econômicos e financeiros das empresas.",
      "Acesso limitado às informações e resistência dos gestores corporativos à pesquisa antropológica.",
      "Desconsiderar as implicações éticas de suas descobertas."
    ],
    "correta": 1
  },
  {
    "pergunta": "Qual é o objetivo da aplicação da Antropologia das corporações em questões de sustentabilidade empresarial?",
    "respostas": [
      "Maximizar os lucros corporativos a curto prazo.",
      "Minimizar o envolvimento da empresa em questões ambientais e sociais.",
      "Promover práticas empresariais mais éticas e sustentáveis.",
    ],
    "correta": 2
  },
  {
    "pergunta": "Como a Antropologia das corporações pode ajudar as empresas a promover a inovação e a criatividade?",
    "respostas": [
      "Padronizando os processos de trabalho para minimizar o risco de erros.",
      "Fomentando a diversidade de perspectivas e incentivando a experimentação.",
      "Ignorando as contribuições individuais para manter a estabilidade organizacional."
    ],
    "correta": 1
  },
  {
    "pergunta": "Qual é a importância da reflexividade na prática da Antropologia das corporações?",
    "respostas": [
      "Não é importante, pois a reflexividade pode comprometer a objetividade da pesquisa.",
      "Permite que os pesquisadores reconheçam e avaliem seu próprio papel e influência no processo de pesquisa.",
      "Desencoraja os antropólogos de considerar seu próprio posicionamento cultural e social.",
    ],
    "correta": 1
  },
  {
    "pergunta": "Como a Antropologia das corporações pode contribuir para a gestão de mudanças organizacionais?",
    "respostas": [
      "Impor mudanças de cima para baixo para garantir conformidade com as diretrizes corporativas.",
      "Facilitar o diálogo e a negociação entre diferentes partes interessadas para promover a aceitação e a adaptação às mudanças.",
      "Ignorar as resistências internas para acelerar o processo de mudança.",
    ],
    "correta": 1
  },
  {

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
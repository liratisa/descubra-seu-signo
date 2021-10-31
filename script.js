let anoAtual = new Date().getFullYear();

//javascript conta os meses de 0 a 11 (0 - jan e 11 - dec)
let signos = [
  {
    nome: "Áries",
    dataInicio: new Date(anoAtual, 02, 21),
    dataFim: new Date(anoAtual, 03, 21),
    caracteristicas:
      "Áries é o primeiro signo astrológico do zodíaco. Seu símbolo é o carneiro, seu elemento é o fogo e seu planeta regente é Marte. As pessoas do signo de Áries são aquelas que nasceram entre 21 de março e 19 de abril. Os arianos costumam ser pessoas impulsivas, corajosas e de personalidade forte. Com espírito de liderança e aventureiro arianos podem ser uma agradável companhia.",
    img: "./img/aries.png",
  },
  {
    nome: "Touro",
    dataInicio: new Date(anoAtual, 03, 20),
    dataFim: new Date(anoAtual, 04, 20),
    caracteristicas:
      "O signo de touro é o segundo do Zodíaco. São nativos desse signo as pessoas que nasceram entre 20 de abril e 20 de maio. Os taurinos são regidos por Vênus e seu elemento é a terra. As pessoas do signo de Touro costumam ser pessoas muito amorosas, pacíficas e que gostam de conforto. Dificilmente você verá um taurino fazendo algo forçado, sua teimosia e determinação ao mesmo tempo que podem gerar problemas fazem dele uma pessoa muito segura do que quer.",
    img: "./img/taurus.png",
  },
  {
    nome: "Gêmeos",
    dataInicio: new Date(anoAtual, 04, 21),
    dataFim: new Date(anoAtual, 05, 21),
    caracteristicas:
      "O terceiro signo do zodíaco é regido por mercúrio e é do elemento Ar. São nativos do signo de Gêmeos todos aqueles que nasceram entre os dia 21 de Maio e 21 de Junho. Conhecidos por serem ótimos comunicadores, animados e donos de uma inteligência incrível, os geminianos costumam ser uma companhia agradável além de bons amigos. Contudo, sua busca constante pelo novo pode torná-los um pouco imprevisíveis e indecisos.",
    img: "./img/gemini.png",
  },
  {
    nome: "Câncer",
    dataInicio: new Date(anoAtual, 05, 22),
    dataFim: new Date(anoAtual, 06, 22),
    caracteristicas:
      "Câncer é o quarto signo do zodíaco. Seu símbolo é o caranguejo, seu elemento é a água e seu planeta regente é a Lua. São nativos desse signo aqueles que nasceram entre os dia 22 de Junho e 22 de Julho. Cancerianos costumam ter um forte apego à família e gostam de deixar todos a sua volta confortáveis. Apesar de serem pessoas afetuosas e terem uma imaginação muito fértil, os cancerianos costumam ser muito dramáticos e com dificuldade de abandonar a casa e a família em busca de novas experiências.",
    img: "./img/cancer.png",
  },
  {
    nome: "Leão",
    dataInicio: new Date(anoAtual, 06, 23),
    dataFim: new Date(anoAtual, 07, 22),
    caracteristicas:
      "O signo de Leão é o quinto signo do zodíaco. Regido pelo sol, é um signo de fogo. Os leoninos são todos que nasceram entre o dia 23 de julho e 22 de agosto. Leoninos são os mais vaidosos do zodíaco e costumam ser vistos apenas como pessoas metidas que gostam de chamar atenção. Mas eles também são detentores de um humor e coragem marcantes. Apesar de adorar os holofotes, os leoninos costumam fazer de seu companheiro o centro de sua atenção.",
    img: "./img/leo.png",
  },
  {
    nome: "Virgem",
    dataInicio: new Date(anoAtual, 07, 23),
    dataFim: new Date(anoAtual, 08, 22),
    caracteristicas:
      "O sexto signo do zodíaco é regido por mercúrio e é do elemento terra. São nativos do signo de virgem todos aqueles que nasceram entre 23 de agosto e 22 de setembro. Virginianos costumam ser pessoas organizadas, perfeccionistas e prestativas. Com uma grande capacidade de observação, as pessoas do signo de Virgem têm uma grande facilidade para organizar as coisas e tendem a querer arrumar tudo a sua volta de forma perfeita. A busca constante pela perfeição pode fazer com que sofra de ansiedade e seja muito crítico com os outros e consigo.",
    img: "./img/virgo.png",
  },
  {
    nome: "Libra",
    dataInicio: new Date(anoAtual, 08, 23),
    dataFim: new Date(anoAtual, 09, 22),
    caracteristicas:
      "O sétimo signo do zodíaco é um signo de ar e regido por Vênus. Libra é o signo daqueles que nasceram entre 23 de setembro e 22 de outubro. Librianos costumam ser pessoas extremamente racionais e que buscam o equilíbrio e harmonia. Talvez este seja o signo, de todo o zodíaco, com maior capacidade de ser empático e evitar conflitos. Os librianos costumam conseguir se colocar no lugar do outro com muita facilidade. Embora, às vezes, possam ter dificuldade em se impor quando é preciso.",
    img: "./img/libra.png",
  },
  {
    nome: "Escorpião",
    dataInicio: new Date(anoAtual, 09, 23),
    dataFim: new Date(anoAtual, 10, 21),
    caracteristicas:
      "Escorpião é o oitavo signo do zodíaco. Ele pertence ao elemento água e é regido por Marte e Plutão. São nativos deste signo todos aqueles que nasceram entre 23 de Outubro e 21 de Novembro. Pessoas do signo de Escorpião costumam ser pessoas perspicazes e de emoções fortes. Para uma pessoa do signo de escorpião a paixão é seu sobrenome. Assim como o animal que rege este signo, as pessoas de escorpião preferem matar a serem mortas; não espere que um escorpiano fique parado enquanto você o faz sofrer ou tira uma com a cara dele. Embora o escorpiano tenha fama de vingativo ele é uma pessoa muito generosa e que quando gosta de alguém é sempre muito intenso.",
    img: "./img/scorpio.png",
  },
  {
    nome: "Sagitário",
    dataInicio: new Date(anoAtual, 10, 22),
    dataFim: new Date(anoAtual, 11, 21),
    caracteristicas:
      "Sagitário é o nono signo do Zodíaco, e pertence ao elemento fogo. São nativos deste signo todos aqueles que nasceram entre 22 de Novembro e 21 de Dezembro. Regidos por Júpiter, os sagitarianos costumam ser pessoas muito desapegadas; adoram viajar – física e mentalmente –, aprender coisas novas e conhecer todo tipo de cultura. Os sagitarianos costumam ser pessoas atraentes mas difíceis de conquistar. São os reis e rainhas das paixões tórridas. Sagitarianos não gostam muito de serem questionados e às vezes podem ser um pouco debochados.",
    img: "./img/sagittarius.png",
  },
  {
    nome: "Capricórnio",
    dataInicio: new Date(anoAtual, 11, 22),
    dataFim: new Date((anoAtual + 1), 00, 19),
    caracteristicas:
      "O décimo signo do zodíaco é o signo de Capricórnio, o último signo de terra do zodíaco. Regido por Saturno, são capricornianos aqueles que nasceram entre 22 de dezembro e 19 de janeiro. Capricornianos costumam ter metas bem definidas, ser bem humorados e adorar um desafio. Assim como os outros signos de terra, o capricorniano costuma ter o pé no chão e ser racional. Por terem ambições e metas bem definidas para conquistar aquilo que desejam, os capricornianos passam a imagem de que farão o que for preciso pra conquistar seus objetivos. Contudo, as pessoas desse signo costumam ser pessoas honestas, pacíficas e pacientes.",
    img: "./img/capricorn.png",
  },
  {
    nome: "Aquário",
    dataInicio: new Date(anoAtual, 00, 20),
    dataFim: new Date(anoAtual, 01, 18),
    caracteristicas:
      "O décimo primeiro signo do zodíaco é também o último signo de ar. Regidos por Saturno e Urano, os aquarianos são aqueles que nasceram entre 20 de janeiro e 18 de fevereiro. Aquarianos amam liberdade e costumam ser pessoas abertas a novas ideias. Aquarianos têm muita facilidade para perceber o que pode dar certo no futuro, apresentando muitas vezes ideias e invenções revolucionárias. Embora as pessoas desse signo sejam simpáticas, costumam resolver os problemas de forma autoritária e gostam quando as pessoas concordam com elas.",
    img: "./img/aquarius.png",
  },
  {
    nome: "Peixes",
    dataInicio: new Date(anoAtual, 01, 19),
    dataFim: new Date(anoAtual, 02, 20),
    caracteristicas:
      "O décimo segundo e último signo do zodíaco é o de Peixes. São nativos deste signo todos aqueles que nasceram entre 19 de Fevereiro e 20 de Março. Regidos pelo último signo de água do zodíaco e pelos planetas Júpiter e Netuno, os piscianos costumam ser pessoas muito sensíveis e intuitivas. Piscianos são conhecidos por serem o mais romântico do zodíaco, mas também podem ser muito rancorosos. Embora os nativos de Peixes possam ser pessoas altruístas, carinhosas e criativas, às vezes eles se mostram como pessoas indecisas, dispersas e inconstantes.",
    img: "./img/pisces.png",
  },
];

// console.log(signos.forEach(item => console.log (item.dataInicio, item.dataFim)))

let botao = document.querySelector("#botao");

function mostrar() {
  document.querySelector(".resultado-area").style.display = "flex";
}

function clicar() {
  let dataInput = new Date(document.querySelector("#data-nascimento").value);
  let resultadoNome = document.querySelector("#resultado-nome");
  let resultadoCaracteristicas = document.querySelector(
    "#resultado-caracteristicas"
  );
  let resultadoImagem = document.querySelector("#resultado-imagem");

  let dia = dataInput.getDate() + 1; //ver pq ele pega o dia anterior
  let mes = dataInput.getMonth();
  let diaMes = new Date(anoAtual, mes, dia);

  console.log(diaMes);

  let match = signos.find((data) => {
    if(data.nome == "Capricórnio" && diaMes.getMonth() == 00 && diaMes.getDate() <= 19) {
      return data;
    }
    if (diaMes >= data.dataInicio && diaMes <= data.dataFim) {
      return data;
    }
  });


  resultadoImagem.innerHTML = `<img src="${match.img}">`;
  resultadoNome.innerHTML = `Seu signo é... <h3>${match.nome}</h3>`;
  resultadoCaracteristicas.innerHTML = `<p>${match.caracteristicas}</p>`;
  mostrar();
}

botao.addEventListener("click", (e) => {
  e.preventDefault();
  clicar();
});

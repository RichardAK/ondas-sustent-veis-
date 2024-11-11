// Arquivo com os dados das cidades
const cidades = {
    cidade1: {
      texto: "Itanhaém, localizada no litoral sul do Estado de São Paulo, destaca-se por suas 14 praias, que se estendem ao longo de 26 quilômetros, entre as quais se encontram a Praia de Itanhaém, a Praia do Tombo e a Praia dos Sonhos. A infraestrutura da cidade é amplamente direcionada ao turismo, oferecendo uma variedade de eventos nos finais de semana e feriados, os quais proporcionam diversas opções de lazer para os visitantes.Com uma área total de 601,711 km², Itanhaém integra a Região Metropolitana da Baixada Santista e limita-se com municípios como São Paulo, Juquitiba e Peruíbe. Segundo o censo de 2020, a população da cidade é de aproximadamente 103.102 habitantes.Fundada em 1532, Itanhaém é uma das cidades mais antigas do Brasil, e sua história é manifestada nas construções coloniais e no patrimônio cultural, atraindo aqueles que se interessam pela tradição local. Adicionalmente, a cidade abriga várias Unidades de Conservação, como o Parque Estadual da Serra do Mar, que desempenham um papel fundamental na preservação da fauna e flora nativas.",
      imagem: "Itanhaem.jpg"
    },
    cidade2: {
      texto: "Mongaguá, situada na Região Metropolitana da Baixada Santista, encontra-se a apenas 93 km da capital paulista. Com uma área total de 143,205 km², este município litorâneo paulista oferece uma gama diversificada de atrações, tanto para turistas quanto para residentes. De acordo com o IBGE de 2020, a cidade possui uma população de aproximadamente 57.648 habitantes e é amplamente reconhecida por suas praias e oportunidades de ecoturismo, notadamente no Poço das Antas e no Complexo Zona Rural.A Praia do Centro se destaca como uma das mais movimentadas, devido à sua proximidade com o centro comercial, a Prefeitura e a Praça de Eventos Dudu Samba. Em contrapartida, a Praia do Agenor de Campos é célebre por sua proximidade com atrações turísticas que compõem o Complexo Plataforma, um local bastante popular entre visitantes e moradores. A Plataforma de Pesca Amadora, com seu formato em T, proporciona uma vista privilegiada, enquanto a Feira de Artes Plataforma exibe o trabalho de artesãos locais.",
      imagem: "mongagua.jpg"
    },
    cidade3: {
      texto: "São Vicente é uma cidade que, segundo dados do IBGE de 2020, possui uma população aproximada de 368.300 habitantes. Localizada na Região Turística Costa da Mata Atlântica. No litoral, destaca-se a Ilha de São Vicente, denominada Goyahó pelos nativos, onde se encontram os centros urbanos de São Vicente e a vizinha Santos, proporcionando acesso à enseada e a suas diversas praias. Entre os principais atrativos turísticos da cidade, merecem destaque a Ilha Porchat, a famosa Biquinha, o Gonzaguinha, a Praia do Itararé, a Ponte Pênsil, o Morro da Asa Delta — que abriga o Clube do Voo Livre do Litoral Paulista — e o Teleférico.",
      imagem: "Saovicente.jpg"
    }
  
  };
  
  // Seleção da cidade
  const selectCidade = document.getElementById("cidade-select");
  
  // Div para exibir o texto e imagem
  const cidadeInfo = document.getElementById("cidade-info");
  const cidadeTitulo = document.getElementById("cidade-titulo");
  const cidadeTexto = document.getElementById("cidade-texto");
  const cidadeImagem = document.getElementById("cidade-imagem");
  
  // Função para exibir informações da cidade
  function exibirCidade(cidade) {
    cidadeTexto.textContent = cidades[cidade].texto;
    cidadeImagem.src = cidades[cidade].imagem;
    cidadeImagem.alt = cidade;
  }
  
  // Adicione evento de mudança ao select
  selectCidade.addEventListener("change", (e) => {
    const cidadeSelecionada = e.target.value;
    if (cidadeSelecionada !== "") {
      exibirCidade(cidadeSelecionada);
    }
  });
  
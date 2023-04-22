
// idades = [30, 35, 28]
// nomes = ["Ana", "Juliana", "Leonardo"]
// faculdade = ["false, true, true"]

// funcionarios = [nomes,idades,faculdade]

// function eMaiorQue10(value) {
//     return value >= 10;
//   }

// var filtrado = numeros.filter(eMaiorQue10);
// //filtrado [é 12, 130, 44]
// console.log(filtrado)

const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5,9.5]

        const notasGerais = [notas1, notas2, notas3]

    let media = 0

for (let i = 0; i < notasGerais.length; i++) {
      for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j] / notasGerais[i].length;
        }
}

media = media / notasGerais.length

console.log (media)

teste()

function teste () {
    console.log ( "retornou" )
    return 10
}

let TexteDeQuebraDeLinha = "Oi, tudo bem? Eu sou o Leonardo, esse texto é longo mesmo para podermos testar a quebra de linha"

array = []
array.push(1  )
console.log(array)

let PalavraSimples = ["oi", "ok"]

for (let i = 0; i < PalavraSimples.length; i++) {
    const element = PalavraSimples[i];  
    console.log(PalavraSimples[i])
}

// JS for review

// for ([inicialização]; [condição]; [expressão final])
//    declaração

// É possível habilitar o recurso de code snippets no VSC, que são diversos pedaços, estruturas de código frequentemente utilizados.
// Code snippets, em tradução livre, significa “pedaços de código”. O VSC pode, de forma automática ou configurada pelo usuário, reutilizar esses fragmentos com um autocomplete. O editor de código possui integração nativa para algumas linguagens (como JavaScript) e com outras você pode adicionar uma extensão. Dessa maneira, o code snippets se torna como uma poderosa ferramenta para produtividade.

// É possível trabalhar com a funcionalidade de code snippets com o atalho CTRL + espaço e buscar pelo fragmento de código desejado.
// A partir do atalho CTRL + espaço é possível fazer uma busca nos code snippets que retorna fragmentos de código embutidos no VSC e os desenvolvidos ao longo do código, como variáveis ou funções. Utilize a ferramenta com sabedoria!



// Preparing the Enviro

// O Visual Studio Code é uma ferramenta muito útil para escrita de códigos e aceita diferentes linguagens.
// Podemos utilizar a ferramenta de forma local ou mesmo via editor web do github. No entanto,
// para este curso vamos trabalhar de forma local e por isso é necessário que você realize a instalação do editor de código.
// Mas o que é o Visual Studio Code?

// Visual Studio Code

// Já imaginou ter que escrever todos os códigos em um bloco de texto? Certamente seria muito trabalhoso e haveria uma dificuldade muito grande
// para testar seu programa, não é mesmo?

// Pensando nisso, foram desenvolvidos diversos editores de código, que são ferramentas que funcionam especificamente para escrever com linguagens de programação.
//  E o Visual Studio Code é uma dessas ferramentas!

// O VSCode é gratuito e pensado para facilitar o cotidiano de trabalho ou estudo de pessoas desenvolvedoras,
//  pois além de conseguir salvar ou utilizar temas de cores diferentes para escrever os nossos códigos,
//   a ferramenta apresenta outras funcionalidades

// Vamos começar com sua instalação?

// Os links para baixar e instalar de acordo com o seu sistema operacional estão na

// https://code.visualstudio.com/download

// Basta você selecionar o seu sistema operacional, realizar o download e aceitar os termos de licença para concluir a instalação.

// O que é um editor de código?

// O VSCode, por ser uma ferramenta robusta, ainda causa muita confusão sobre sua definição e há quem diga que é uma IDE (Ambiente de Desenvolvimento Integrado). No entanto, de acordo com a definição da documentação oficial, o Visual Studio Code é um editor de código. Você pode aprofundar seus conhecimentos sobre IDEs no artigo ”O que é uma IDE”.

// https://www.alura.com.br/artigos/o-que-e-uma-ide

// Existem vários outros editores, como o Atom, o Sublime e o Notepad++. Você também pode utilizá-los para escrever seus códigos. No entanto, alguns recursos variam de editor para editor, ou seja, algumas ferramentas podem não estar disponíveis, funcionar de forma diferente, ou mesmo apresentar configurações específicas para suas funcionalidades.

// O interessante do VSCode é que por ser muito popular, conta com uma comunidade ativa e sempre traz diversas soluções para a ferramenta. Esse também é um dos pontos que facilitam a busca por extensões ou configurações já construídas por outras pessoas desenvolvedoras.

// Conheça também outros editores de código e aprofunde seus conhecimentos sobre o VSCode no artigo Sublime, Atom ou VSCode: qual melhor editor de código?

// https://www.alura.com.br/artigos/sublime-atom-vscode-qual-melhor-editor-de-codigo

// O terminal integrado

// O terminal integrado é uma ferramenta excelente para melhorar nossa produtividade. Muitos desenvolvedores preferem utilizar um terminal externo, mas é importante conhecer essa funcionalidade do VSCode. Aprofunde seus conhecimentos com o artigo Como utilizar o terminal integrado do Visual Studio Code.

// https://www.alura.com.br/artigos/como-utilizar-terminal-integrado-visual-studio-code

// Além de possibilitar o uso de vários terminais, é possível também trabalhar com um terminal Linux no seu Windows! Isso é possível graças à ferramenta WSL, que significa Windows Subsystem for Linux, que literalmente é um Subsistema do Windows para Linux.

// Para conhecer o potencial da ferramenta e realizar sua instalação, leia o artigo WSL: como executar programas e comandos Linux no Windows?

// https://www.alura.com.br/artigos/wsl-executar-programas-comandos-linux-no-windows

// Além disso, conheça mais sobre o WSL na documentação oficial da Microsoft O que é o Subsistema do Windows para Linux?

// https://learn.microsoft.com/pt-br/windows/wsl/about

// Por fim, aprofunde seus conhecimentos sobre terminais no Mac com o artigo Oh my zsh.

// https://www.alura.com.br/artigos/oh-my-zsh-melhorando-produtividade-terminal

// VSCode é para front ou Back end?

// O Visual Studio Code apresenta uma excelente integração para Front End, Back End, testes, criação de scripts para automação de processos, Banco de Dados e até mesmo virtualização.

// Dessa maneira, é possível trabalhar tanto no lado do cliente quanto para o servidor e, novamente, precisamos lembrar que a escolha da ferramenta depende de sua necessidade e também de sua preferência.

// Conheça algumas formas de integração do VSC com diferentes linguagens e ferramentas:

// Alura+ :

// Alura+ Utilizando o VSCode com o Anaconda;

// https://cursos.alura.com.br/extra/alura-mais/utilizando-o-vscode-com-o-anaconda-c1803

// Alura+ Como integrar o Flutter no VsCode;

// https://cursos.alura.com.br/extra/alura-mais/como-integrar-o-flutter-no-vscode-c20

// Alura+ MongoDB no Visual Studio Code;

// https://cursos.alura.com.br/extra/alura-mais/mongodb-no-visual-studio-code-c117

// Alura+ Debugando projetos NodeJS no VSCode.

// https://cursos.alura.com.br/extra/alura-mais/debugando-projetos-nodejs-no-vscode-c23

// Artigos:

// Artigo Desenvolvendo aplicações Java com o VSCode;

// https://www.alura.com.br/artigos/desenvolvendo-aplicacoes-java-vs-code

// Artigo Tailwind: Preparando o Visual Studio Code;

// https://www.alura.com.br/artigos/tailwind-preparando-visual-studio-code

// Artigo Debugando projetos NodeJS no VSCode;

// https://www.alura.com.br/artigos/debugando-projetos-nodejs-no-vscode

// Artigo Como automatizar um code styleguide em projetos -  Dicas de React #003;

// https://www.alura.com.br/artigos/como-automatizar-um-styleguide-em-projetos-dicas-de-react-003

// Artigo Como integrar o Flutter no VsCode;

// https://www.alura.com.br/artigos/como-integrar-rodar-o-flutter-no-vscode

// Para quem usa a ferramenta P5.js, P5 no Vscode.

// https://www.alura.com.br/artigos/p-5-no-vscode

// Por fim, leia a documentação!

// Afinal, quando trabalhamos com qualquer ferramenta, é indispensável buscar informações na documentação oficial. Com o editor de código isso não seria diferente, confira a documentação oficial do Visual Studio Code na Microsoft.

// https://code.visualstudio.com/learn

// No dia a dia de desenvolvimento trabalhamos com muitos códigos criados por nós ou por outros devs. Nesse sentido, a ferramenta do VSCode nos auxilia em diferentes aspectos para melhorar nossa produtividade e realizar entregas organizadas tanto para fins de estudos, criação de portfólio e no ambiente de trabalho.

// O que fizemos durante nesse projeto é a base para otimização de processos e para que você se preocupe apenas em desenvolver o seu código. Dessa maneira, reflita comigo por meio das perguntas:

// Qual a extensão mais adequada para a linguagem que trabalho?
// Como crio, salvo e rodo arquivos no meu VSCode?
// Meus arquivos estão organizados em minha estrutura de pastas?
// Como utilizo o terminal integrado?
// Como deixo meu código indentado?
// Agora, faça você mesmo a otimização do seu código a partir do que aprendi até aqui!

// Em caso de bugs, consulte sempre a documentação antes de procurar soluções em outros lugares. Respire, leia a documentação e faça testes no seu código para verificar se está no caminho certo.

// Ah, não esquece de usar o tradutor automático se precisar.

// Boa prática!

// Key Points  

// instalar o VSCode;
// Compreender o que é um editor de Código;
// Entender como criar Novos arquivos e Novas pastas;
// Aprender a utilizar atalhos;
// Aprender como indentar o seu código;
// Conhecer algumas funcionalidades para melhorar a visualização do código;
// Entender os erros apresentados pelo VSCode;
// Entender como utilizar os snippets.

// Extensões

// Sempre que vamos trabalhar com um editor de código, procuramos formas de melhorar a produtividade em nosso projeto. Em alguns momentos o editor fornece de forma nativa, ou seja já vem embutida na própria ferramenta, uma solução para determinado problema. Porém, em outras ocasiões é necessária a instalação de extensões.

// Mas o que são extensões do vscode?
// As extensões ajudam o VSCode a ficar mais alinhado com a sua necessidade de trabalho. Você pode adicionar novas funcionalidades, temas de cores e muito mais no Marketplace de Extensões.

// https://marketplace.visualstudio.com/vscode

// Dica: Atualização de extensões.

// Para garantir o bom funcionamento das extensões, sempre verifique se estão atualizadas. Caso estejam descontinuadas, verifique a compatibilidade com sua versão do VSCode.

// Extensões úteis:

// Live Share. Para codar em equipe de forma simultânea;

// CSS Peek. Para desenvolvedores Full Stack ou Front-end, a extensão pode auxiliar nas visualizações dos CSS aplicados nos elementos dos HTML. Você consegue visualizar quais as regras do CSS que estão sendo aplicadas ao passar o cursor sobre o id ou nome da classe, dentre outras funcionalidades;

// Prettier. Prettier é um formatador de código opinativo. Ele funciona aplicando um estilo consistente, analisa o código e retorna com suas próprias regras que levam em consideração o comprimento máximo da linha, quebra de linha, e alinha o código quando necessário;

// Thunder Client. A extensão Thunder Client é excelente para quem deseja trabalhar com testes de requisições http de uma forma mais leve e com design simples em sua API Rest;

// Code Time. Excelente ferramenta para produtividade, o Code Time gera um log com a quantidade de tempo que você passa no VSCode dentre outras informações;

// Markdown Preview Enhanced, pra quem gosta de ver como estão ficando os markdowns;

// Marp for VS Code, usada para fazer slide utilizando markdown;

// Excel Viewer, para visualizar arquivos csv e planilhas Excel;

// Bracket Pair Colorizer, ajuda a identificar aberturas e fechamentos de chaves e parênteses pelas cores.

// Além das já citadas, você pode conferir algumas das principais extensões no artigo Extensões VS Code: descubra quais são as mais usadas.

// https://www.alura.com.br/artigos/extensoes-vs-code-descubra-as-mais-usadas

// Leitura obrigatória para todos que optaram pelo VSC como seu editor de código, o artigo VisualStudio Code: instalação, teclas de atalho, plugins e integrações, que contém informações importantes e um apanhado geral de todas as funcionalidades da ferramenta.

// https://www.alura.com.br/artigos/visualstudio-code-instalacao-teclas-de-atalho-plugins-e-integracoes


// Ferramentas de acessibilidade

// Muitas pessoas desenvolvedoras utilizam recursos como leitores de tela, alto contraste e atalhos para programar com o Visual Studio Code, e o editor de código possui uma excelente integração com ferramentas voltadas à acessibilidade, tais como os leitores de tela. Para você conferir se o seu VSCode está configurado, selecione o atalho Alt + F1.

// Abaixo seguem algumas dicas de atalhos e funcionalidades:

// Para pessoas desenvolvedoras que apresentam condições como TDAH, o VSCode disponibiliza uma funcionalidade chamada modo zen (o atalho para ativar é ctrl + k + z), que reduz a quantidade de informações na tela e pode ser um aliado para manter o foco;

// Ao pressionar a tecla F6 você pode navegar pela barra lateral esquerda e inferior do VSC;

// Você pode ativar a funcionalidade Screencast através da paleta de comandos, assim é possível identificar qual tecla está sendo clicada e o cursor apresenta um destaque. Acesse a paleta com Ctrl + Shift + P e busque por Screencast;

// Uma funcionalidade excelente é a possibilidade de customização dos atalhos. Para conferir, basta seguir o caminho: acesse a paleta de comandos > no buscador escolha a funcionalidade que desejar > no ícone da engrenagem,que está posicionado no canto direito de cada feat buscada, pode configurar o atalho para o comando. Ou então pode utilizar a visualização de todos os atalhos, como demonstrado em vídeo, com o comando ctrl + K + ctrl + S;

// Confira mais dicas de acessibilidade na documentação oficial do VSCode.

// https://code.visualstudio.com/docs/editor/accessibility

// Durante esse projeto, entendemos como encontrar e instalar as extensões. Agora, exercite o que você aprendeu com sua linguagem de preferência e realize suas customizações. Para isso:

// Escolha um tema de cores que você goste;
// Instale extensões voltadas para a linguagem de sua preferência;
// Confira quais são as ações que você mais executa no VSCode, como criar um novo arquivo ou salvar modificações em um texto, e comece a trabalhar com atalhos.

// Utilizar as ferramenta de versionamento Git via VSCode;
// Integrar o Github via VSCode;
// Extensão ESlint;
// Trabalhar em conjunto com a extensão Live Share;
// Trabalhar com linguagens que não são suportadas nativamente pelo VSCode;
// Utilizar extensões que deixam seu VSCode mais acessível.


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

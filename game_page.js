player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
//localStorage-permite obter os dados armazenados localmente
//getItem("player1_name")- é o método usado para obter o valor armazenado localmente
//player1_name- a chave a ser passada para getItem()

player1_score = 0;//variável para armazenar o placar do jogador
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
//(player1_name + " : ")- armazenará o valor do nome de player para que o resultado seja o mesmo nome

document.getElementById("player1_score").innerHTML = player1_score; 
document.getElementById("player2_score").innerHTML = player2_score;
//Como definimos o valor da variável “player1_score” para 0, devemos atualizar o placar
//de player1 utilizando a id “player1_score”.

document.getElementById("player_question").innerHTML = "Turno de Perguntas - " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name;
//"Turno de Perguntas - " + player1_name - armazenará o nome de player1
//"Turno de Resposta - " + player2_name - armazenará o nome de player2


function send() {

    //obtem a palavra inserida na caixa de entrada usando a sua id e armazena em uma variável
    get_word = document.getElementById("word").value;

    //converte todas as entradas de palavras para letras minúsculas
    word = get_word.toLowerCase();

    //imprimir essa palavra no console para verificar se funciona
    console.log("palavra em letras minúsculas = " + word);

    charAt1 = word.charAt(1);
    //word- é a variável que armazena a palavra inserida pelo jogador.
    //charAt() é a função que utilizamos para obter uma letra específica em uma palavra.
    //Index_of_letter representa o número do índice da letra que gostaríamos de obter
    console.log(charAt1);

    //word.length/2-Divide o comprimento da palavra por 2, e a armazena em uma variável
    //math.floor- arredonda u número decimal para o número inteiro mais baixo mais próximo
    length_divide_2 = Math.floor(word.length/2);
    //
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    //Word.replace(“palavra/letra a ser substituída”,”palavra/letra que substituirá”)
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> P. " + remove_charAt3 + "</h4>";
    input_box = "<br>Resposta: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
//Essas variáveis armazenam quem está fazendo a pergunta e quem está respondendo
question_turn = "player1";
answer_turn = "player2";

function check()

{    //obtem a palavra inserida pelo jogador do turno de respostas através da id da caixa de entrada e armazena na variável
    get_answer = document.getElementById("input_check_box").value;
    //converte a palavra para letras minúsculas e armazena em nova variável
    answer = get_answer.toLowerCase();
    console.log("resposta em letras minúsculas - " + answer);


    //a variável word armazena a palavra da pergunta
    //a variável answer armazena a palavra da resposta
    if(answer == word)//se a resposta e a pergunta forem iguais, 
                      //o jogador que estiver respondendo marcará um ponto.
    {
        if (answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        //se a condição for verdadeira o jogador 1 marca o ponto, senão o jogador 2 quem marca
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    //trocaremos o turno da pergunta para player2 se player1 tiver perguntado no último turno,
    // caso contrário, devemos trocar o turno de pergunta para player1.
    if (question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML="Turno de perguntas - " + player2_name;

    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML= "Turno de perguntas - " + player1_name;

    }

    //troca do turno de resposta.
    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Turno de respostas - " + player2_name;

    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Turno de respostas - " + player1_name;

    }
     //Quando clicarmos no botão Verificar, a seção deve apagar todas as informações 
     //inseridas (a palavra da pergunta, a resposta na caixa de entrada e o botão verificar).
    document.getElementById("output").innerHTML = "";


}


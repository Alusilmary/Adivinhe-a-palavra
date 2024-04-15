
function addUser() //armazenará os nomes dos jogadores no armazenamento local e direciona pra outra página
{
  //Obtem os valores das caixas de entrada de player1 (jogador1) e player2(jogador2) e armazena-os em variáveis.
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;


    //Os valores das variáveis player1_name e player2_name serão as chaves respectivas do armazenamento local, obtidas com
    //a função setItem():
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    //redireciona os usuários para game_page.html
    window.location = "game_page.html";
}


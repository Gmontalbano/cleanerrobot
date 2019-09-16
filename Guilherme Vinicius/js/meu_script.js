function Enviar(){

    var nome = document.getElementById('nomeid');
    var email = document.getElementById('emailid');

    if(nome.value == "" || email.value == ""){
        alert("Preencha Todos os campos");
    }
    else{
    	alert("Cadastrado com sucesso");
    	nome.value = "";
    	email.value = "";
    }
}
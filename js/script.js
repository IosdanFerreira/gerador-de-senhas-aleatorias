let caracteres = document.querySelector(".tamanhoCaracteres");
let slider = document.querySelector(".slider");

let botao = document.querySelector(".button");

let containerPassword = document.querySelector(".passwordDiv");
let password = document.querySelector(".password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&-_+-/*.';

//Dinamizando número de caracteres e input range
caracteres.innerHTML = slider.value;

//Valor do input aparece automaticamente em "caracteres"
slider.oninput = function(){
    caracteres.innerHTML = this.value
}

//Função onclick
function gerador(){
    let pass = "";

    //Gerar senha
    for(let i = 0, n = charset.length; i < slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n)); 
    }

    //Remover classe hide e add senha na div
    containerPassword.classList.remove("hide")
    containerPassword.classList.add("passwordDiv")
    password.innerHTML = pass

    novaSenha = pass
}

//Copiar senha ao clicar na div
function copyPassword(){
    alert("Senha copiada");
    navigator.clipboard.writeText(novaSenha);
}
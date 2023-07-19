let contador = 0;
let input = document.getElementById("tarefa");
let btn = document.getElementById("btn");
let main = document.getElementById("lista");

function addTarefa() {
    //pegar valor digitado no input
    let valor = input.value;

    // se não for vazio, nulo, nem indefinido
    if ((valor !== "") && (valor !==null) && (valor !== undefined) ) {
        ++contador;
        let novoItem = `<div id=${contador} class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="fa-sharp fa-regular fa-circle"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valor}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="fa-solid fa-trash"></i></i> Deletar</button>
        </div>`;

        // adicionar novo item no main - tarefa
        main.innerHTML += novoItem;

        // zerar o campo input
        input.value = "";
        input.focus();
    } 
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
} 

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe == "item") {
        item.classList.add("clicado");
        var icone = document.getElementById("icone_" + id)
        icone.classList.remove("fa-circle");
        icone.classList.add("fa-circle-check");
        item.parentNode.appendChild(item);
    } else {
        item.classList.add("clicado");
        var icone = document.getElementById("icone_" + id)
        icone.classList.remove("fa-circle-check");
        icone.classList.add("fa-circle");
    }
}

input.addEventListener("keyup", function(event){
    // se teclar enter que é a tecla 13
    if(event.keyCode === 13) {
        event.preventDefault();
        btn.click();
    }
})

let botaoAdd = document.getElementById('add')

let inputTarefa = document.getElementById('tarefa-digitada')





let tarefas = document.getElementById('board')


botaoAdd.onclick = function () {
    let valorDigitado = inputTarefa.value
    let tarefaNova =`<div id="card1" class="col-lg-6">
    <strong> ${valorDigitado} </strong>
    <img src="./img/correct.png" alt="botap de check" title="botao de check">
    </div>`
    tarefas.innerHTML += tarefaNova

}




let botaoAdd = document.getElementById('add');

let inputTarefa = document.getElementById('tarefa-digitada');

let tarefas = document.getElementById('board');

let botaoCheck = document.getElementById('btCheck')

let listaTarefas = localStorage.getItem('Lista Tarefas') ? 
JSON.parse(localStorage.getItem('Lista Tarefas')) : []

const salvarLocalStorage = tarefas => {

    let tarefasEmJson = JSON.stringify(tarefas);
    localStorage.setItem('Lista Tarefas', tarefasEmJson);
    console.log('Lista de tarefas salva com sucesso!!!');

}

const mostrarNaTela = arrayTarefas => {
    arrayTarefas.forEach( textoTarefa => {
        let tarefaNova = `<div id="card1" class="col-lg-6">
        <strong> ${textoTarefa} </strong>
        <img id='btCheck' src="./img/correct.png" alt="botap de check" title="botao de check">
        </div>`

        tarefas.insertAdjacentHTML('beforeend', tarefaNova);
        let objtTarefaNova = tarefas.lastElementChild
        let btnCheckTarefaNova = objtTarefaNova.lastElementChild
        btnCheckTarefaNova.onclick = (event) => {
        event.target.parentNode.remove();
        listaTarefas = listaTarefas.filter(valor => valor != textoTarefa)

        salvarLocalStorage(listaTarefas)
        }
    })
}

mostrarNaTela(listaTarefas)

const criarTarefaComEnter = event => {
 
    if (event.keyCode == 13 || event.type == 'click') {

        let valorDigitado = inputTarefa.value;
        
        if(valorDigitado == ''){
            alert('Você deve digitar a tarefa!!!')
            return
        } 
        
        listaTarefas.push(valorDigitado);

        salvarLocalStorage(listaTarefas)

        let tarefaNova = `<div id="card1" class="col-lg-6">
        <strong> ${valorDigitado} </strong>
        <img id='btCheck' src="./img/correct.png" alt="botap de check" title="botao de check">
        </div>`

        tarefas.insertAdjacentHTML('beforeend', tarefaNova);
        
        inputTarefa.value = ''

        let objtTarefaNova = tarefas.lastElementChild
        let btnCheckTarefaNova = objtTarefaNova.lastElementChild
        btnCheckTarefaNova.onclick = (event) => {
            event.target.parentNode.remove()
            localStorage.removeItem()

            listaTarefas = listaTarefas.filter(valor => valor != valorDigitado)

            salvarLocalStorage(listaTarefas)

        } 
    }
} 


inputTarefa.addEventListener("keypress", criarTarefaComEnter);
botaoAdd.addEventListener('click', criarTarefaComEnter)









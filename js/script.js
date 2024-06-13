let contador = 0; // Contador de tarefas
let input = document.getElementById('txt');
let add = document.getElementById('add');
let main = document.getElementById('main');

// ADICIONAR TAREFA
function addTarefa() {
    // Pegando valor do input
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        contador++;
        // Armazenando o escopo HTML da tarefa
        let novoItem = `<div id="${contador}" class="item">
        <!-- Shift + Alt + Lowerkey replica a linha atual -->
        <div onclick="marcarTarefa(${contador}, 'img/check-circle-outline.svg')" class="itemIcone">
            <img src="img/circle-outline.svg" alt="Circle Outline" width="20px">
        </div>
        <div onclick="marcarTarefa(${contador}, 'img/check-circle-outline.svg')" class="itemNome">${valorInput}</div>
        <div class="itemBotao">
            <button onclick="deletarTarefa(${contador})" class="delete">Deletar <img src="img/delete.svg" alt="Delete" width="20px" style="position: relative; top: 5px;"></button>
        </div>
    </div>`;

        // Adiciona a nova tarefa no main
        main.innerHTML += novoItem;

        // Zerando os campos inputs e dando foco
        input.value = "";
        input.focus();

    }
}

function deletarTarefa(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id, novoCaminho) {
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('clicado');

        // Verifica se o novoCaminho foi passado e atualiza o src da imagem
        if (novoCaminho) {
            let imgElement = item.querySelector('img');
            if (imgElement) {
                imgElement.src = novoCaminho;
            }
        }

        item.parentNode.appendChild(item); // Leva o item para o final
    } else {
        item.classList.remove('clicado');

        if (novoCaminho) {
            let imgElement = item.querySelector('img');
            if (imgElement) {
                imgElement.src = "img/circle-outline.svg";
            }
        }
    }
}



// Adicionando tarefa com ENTER
// addEventListener indica que um funcao deve ser disparada sobre o elemento selecionado
// keyup indica a tecla ENTER
input.addEventListener("keyup", function (event) {
    // Se for o ENTER
    if (event.keyCode === 13) {
        event.preventDefault(); // Descarta comportamento padrao da tecla
        add.click(); // Adiciona o evento de clique
    }
})
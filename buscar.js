let boxBuscar = document.querySelector('.buscar-box');
let inputBuscar = document.querySelector('.input-buscar input'); // \tualizado para selecionar o input corretamente
let listaPartituras = document.getElementById('partitura-list').getElementsByTagName('li'); // atualizado para selecionar a lista de itens corretamente
let notFoundMessage = document.getElementById('not-found-message'); // seleciona o elemento da mensagem

// Função para pesquisar na lista
function search() {
    let input = inputBuscar.value.toLowerCase();
    let anyVisible = false; 

    for (let i = 0; i < listaPartituras.length; i++) {
        let item = listaPartituras[i];
        if (!item.innerText.toLowerCase().includes(input)) {
            item.style.display = 'none';
        } else {
            item.style.display = 'list-item';
            anyVisible = true; 
        }
    }


    if (anyVisible) {
        notFoundMessage.style.display = 'none';
    } else {
        notFoundMessage.style.display = 'block';
    }
}

inputBuscar.addEventListener('input', search);

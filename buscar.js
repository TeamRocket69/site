let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-box'); // Atualize para o seletor correto
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', () => {
    boxBuscar.classList.add('ativar');
});

btnFechar.addEventListener('click', () => {
    boxBuscar.classList.remove('ativar');
});

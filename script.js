console.log('js-dom');

// selezioniamo il nodo dom (in questo caso il button)
const buttonScript = document.querySelector('button');

// scriviamo la funzione usando il metodo Event Listeners
buttonScript.addEventListener('click', function(){

    // selezioniamo il noso dom (img) (con getElementById perché sfruttiamo l'id)
    const imgScript = document.getElementById('lamp')

    imgScript.src = './img/yellow_lamp.png'
    console.log('you clicked switch, now lamp is on')

})
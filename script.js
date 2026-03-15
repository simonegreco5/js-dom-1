console.log('js-dom');

// selezioniamo il nodo dom <button> (con querySelector)
const buttonScript = document.querySelector('button');

// selezioniamo il nodo dom <img> (con getElementById, sfruttando id del tag)
const imgScript = document.getElementById('lamp')

// scriviamo la funzione usando il metodo Event Listeners
// con questa funzione, quando clicchiamo il bottone
// la lampada deve accendersi (cambiando il link src dell'img)
buttonScript.addEventListener('click', function(){

    imgScript.src = './img/yellow_lamp.png'
    imgScript.alt = 'lamp_on'

    console.log('you clicked switch, now lamp is on')

   

})


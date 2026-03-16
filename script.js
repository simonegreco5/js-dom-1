console.log('js-dom');

// selezioniamo il nodo dom <button> (con querySelector)
const buttonScript = document.querySelector('button');

// selezioniamo il nodo dom <img> (con getElementById, sfruttando id del tag)
const imgScript = document.getElementById('lamp')

// scriviamo la funzione usando il metodo Event Listeners
// con questa funzione, quando clicchiamo il bottone
// la lampada deve accendersi (cambiando il link src dell'img)
buttonScript.addEventListener('click', function(){

    // imgScript.src = './img/yellow_lamp.png'
    // imgScript.alt = 'lamp_on'


   console.log(imgScript.src.includes('yellow'))
   
   if (imgScript.src.includes('yellow')){
        // lampada spenta

        imgScript.src = './img/white_lamp.png'
        console.log('you clicked switch, now lamp is off')
        buttonScript.innerHTML = 'ACCENDI'
        // buttonScript.classList.add('')

    } else { 
        // lampada accesa

        console.log(buttonScript.classList);

        imgScript.src = './img/yellow_lamp.png'
        console.log('you clicked switch, now lamp is on')
        buttonScript.innerHTML = 'SPEGNI'
        // buttonScript.classList.remove('')

    } 
   

})


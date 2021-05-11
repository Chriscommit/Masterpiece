// *************************************************************************
// **************************** Variables globales *************************
// *************************************************************************

// on déclare nos variables globales ici

let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext("2d")

// *************************************************************************
// ********************************* Fonctions *****************************
// *************************************************************************

// ici on aura deux fonctions : 

// Une pour la position de la souris
function getMouseLocation(e) {
    let positionMouse = []
    positionMouse.push(e.offsetX)
    positionMouse.push(e.offsetY)
    return positionMouse
}

//Une pour le dessin
function onClickCanvas(e) {
    let positions = getMouseLocation(e)
    let disk = new Disk(positions[0], positions[1])
    disk.createDisk(ctx)
}

// *************************************************************************
// ********************************* Code principal ************************
// *************************************************************************

// au chargement de la page

window.addEventListener("DOMContentLoaded", function() {

    // Sélection de l'élément canvas
    // On selectionne le contexte
    // Gestionnaire d'évenements lorsque l'on clic sur le canvas
    canvas.addEventListener('click', function(e) {
        onClickCanvas(e)
    })

})
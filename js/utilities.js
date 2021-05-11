/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

/*
 Dans ce fichier utilities vous allez créez deux fonctions : 
 
 getRandomInteger() qui prendra en parametre une valeur min , max*/
function getRandomInteger(min, max) {
    let random = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + min);
    return random;
}

/*getRandomColor() qui vous servira pour choisir des couleurs aleatoires.
   Il vous faudra 4 constantes ( rouge vert bleu ) ainsi que l'opacité*/

function getRandomColor() {
    let colorRed = getRandomInteger(0, 255)
    let colorGreen = getRandomInteger(0, 255)
    let colorBlue = getRandomInteger(0, 255)
    let opacity = getRandomInteger(1, 10) / 10
    console.log(opacity)
    return `rgba(${colorRed}, ${colorGreen}, ${colorBlue}, ${opacity})`

}
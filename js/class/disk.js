class Disk {

    constructor(positionX, positionY) {
        this.positionX = positionX
        this.positionY = positionY
        this.color = getRandomColor()
    }

    createDisk(ctx) {

        ctx.save()
        ctx.beginPath();
        ctx.fillStyle = this.color

        let x = this.positionX; // Coordonnée x
        let y = this.positionY; // Coordonnée y
        let rayon = getRandomInteger(5, 20) // Rayon de l'arc
        let angleInitial = 0; // Point de départ sur le cercle
        let angleFinal = 2 * Math.PI; // Point d'arrivée sur le cercle
        let horaire = false; // Horaire ou antihoraire

        ctx.arc(x, y, rayon, angleInitial, angleFinal, horaire)
        ctx.fill();
        ctx.restore()

    }
}
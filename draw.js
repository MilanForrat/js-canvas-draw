class Dessin{
    // constructor car on récupère le paramètre envoyé par app.js qui correspond au canvas HTML
    constructor(canvas){
        // suis-je entrain de dessiner -> non
        this.draw = false;
        this.prevX = 0;
        this.prevY = 0;

        this.canvas = document.querySelector(canvas);
        // je vérifie que je récupère bien le canvas HTML
        // console.log(this.canvas);
    }
}
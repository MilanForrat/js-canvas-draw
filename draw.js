class Dessin{
    // constructor car on récupère le paramètre envoyé par app.js qui correspond au canvas HTML
    constructor(canvas, canvasWidth, canvasHeight){
        // suis-je entrain de dessiner -> non
        this.draw = false;
        this.prevX = 0;
        this.prevY = 0;
        this.canvasWidth = 400;
        this.canvasHeight = 400;
        this.canvas = document.querySelector(canvas);
        // je vérifie que je récupère bien le canvas HTML
        // console.log(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;

        this.canvas.addEventListener('mousedown', (e) =>{
            this.draw = true;

            this.prevX = (e.clientX - this.canvas.offsetLeft) * canvasWidth / this.canvas.clientWidth;
            this.prevY = (e.clientY - this.canvas.offsetTop) * canvasHeight / this.canvas.clientHeight;
        })

        this.canvas.addEventListener('touchstart', (e) =>{
            this.draw = true;

            this.prevX = (e.clientX - this.canvas.offsetLeft) * canvasWidth / this.canvas.clientWidth;
            this.prevY = (e.clientY - this.canvas.offsetTop) * canvasHeight / this.canvas.clientHeight;
        })


        this.canvas.addEventListener('mousemove', (e) =>{
            if(this.draw){
                let currX = (e.clientX - this.canvas.offsetLeft) * canvasWidth / this.canvas.clientWidth;
                let currY = (e.clientY - this.canvas.offsetTop) * canvasHeight / this.canvas.clientHeight;

                this.dessine(this.prevX, this.prevY, currX, currY);

                this.prevX = currX;
                this.prevY = currY;
            }
        })

        this.canvas.addEventListener('touchmove', (e) =>{
            if(this.draw){
                let currX = (e.clientX - this.canvas.offsetLeft) * canvasWidth / this.canvas.clientWidth;
                let currY = (e.clientY - this.canvas.offsetTop) * canvasHeight / this.canvas.clientHeight;

                this.dessine(this.prevX, this.prevY, currX, currY);

                this.prevX = currX;
                this.prevY = currY;
            }
        })

        this.canvas.addEventListener('mouseup', () => {
            this.draw = false;
        })

        this.canvas.addEventListener('mouseout', () => {
            this.draw = false;
        })
    }

    dessine(depX, depY, destX, destY){
        this.ctx.beginPath();
        this.ctx.moveTo(depX, depY);
        this.ctx.lineTo(destX, destY);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    
    setColor(color){
        this.ctx.strokeStyle = color;
    }

    insertCouleur(couleur){
        let choixCouleur = document.getElementById('choix-outils');
        choixCouleur.innerHTML = "Pinceau de couleur : <div style='display: inline-block; margin-bottom: -3px; border: 2px solid black; width: 20px; height: 15px; background-color:"+couleur+"'></div>";
        this.canvas.style.cursor ="url('./pointer/paint.svg') 0 40, auto";
    }


    insertTaille(taille){
        let choixTaille = document.getElementById('choix-taille');
        choixTaille.innerHTML = "Taille sélectionnée : "+taille;
    }

    insertOutilGomme(outil){
        let choixOutil = document.getElementById('choix-outils');
        choixOutil.innerHTML = "Vous avez choisi l'outil : "+outil;
        this.canvas.style.cursor ="url('./pointer/eraser.svg') 0 20, auto";
    }

    biggerStroke(){
        this.ctx.lineWidth++;
    }

    smallerStroke(){
        this.ctx.lineWidth = (this.ctx.lineWidth > 1) ? this.ctx.lineWidth -1 : 1; 
    }

    erase(){
        if(confirm("Voulez vous vraiment effacer votre dessin ?")){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }


}
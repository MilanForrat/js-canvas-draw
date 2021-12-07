// j'attends le chargement des ressources puis j'éxécute ceci
window.onload = () => {
    // récupération des div avant de les parcourir
    document.querySelectorAll('#palette div').forEach(element => {
        // on parcourt les couleurs mises en HTML via les datasets et on les applique avec le DOM
        element.style.backgroundColor = element.dataset.color;
        element.addEventListener('click', () => {
            canvas.setColor(element.dataset.color);
            canvas.insertCouleur(element.dataset.color);
        })
        element.addEventListener("mouseover", ()=>{
            element.style.cursor ="pointer";
        })
    })
    // chargement du canvas avec comme paramètre le nom du canva HTML qui intégrera ce dessin
    let canvas = new Dessin('#feuille', 400, 400);

    document.querySelector('#plus').addEventListener("click", () =>{
        canvas.biggerStroke();
        canvas.insertTaille(canvas.ctx.lineWidth);
    })
    document.querySelector('#plus').addEventListener("mouseover", ()=>{
        document.querySelector('#plus').style.cursor ="pointer";
    })
    document.querySelector('#moins').addEventListener("click", () =>{
        canvas.smallerStroke();
        canvas.insertTaille(canvas.ctx.lineWidth);
    })
    document.querySelector('#moins').addEventListener("mouseover", ()=>{
        document.querySelector('#moins').style.cursor ="pointer";
    })
    document.querySelector('#gomme').addEventListener("click", () =>{
        canvas.setColor("white");
        canvas.insertOutilGomme("Gomme", canvas.ctx.lineWidth);
    })
    document.querySelector('#gomme').addEventListener("mouseover", ()=>{
        document.querySelector('#gomme').style.cursor ="pointer";
    })
    document.querySelector('#effacer').addEventListener("click", () =>{
        canvas.erase();
    })
    document.querySelector('#effacer').addEventListener("mouseover", ()=>{
        document.querySelector('#effacer').style.cursor ="pointer";
    })

}
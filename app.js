let sliderInput = document.getElementById("stroke-plus");
let output = document.getElementById("choix-taille");
sliderInput.oninput = function() {
    output.innerHTML = "Taille sélectionnée : "+this.value;;
}


// j'attends le chargement des ressources puis j'exécute ceci
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
    canvas.insertTaille(canvas.ctx.lineWidth);
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
    sliderInput.addEventListener("change", function() {
        console.log(sliderInput.value);
        canvas.ctx.lineWidth = sliderInput.value;
        canvas.insertTaille(canvas.ctx.lineWidth);
    }, false);

    document.querySelector('#save').style.cursor ="pointer";
    document.getElementById('save').addEventListener("click", function(){
        canvas.save();
    }, false);
}
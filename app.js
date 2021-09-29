// j'attends le chargement des ressources puis j'éxécute ceci
window.onload = () => {
    // récupération des div avant de les parcourir
    document.querySelectorAll('#palette div').forEach(element => {
        // on parcourt les couleurs mises en HTML via les datasets et on les applique avec le DOM
        element.style.backgroundColor = element.dataset.color;
    })

    // chargement du canvas avec comme paramètre le nom du canva HTML qui intégrera ce dessin
    let canvas = new Dessin('#feuille');
}
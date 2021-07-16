

function start(){
    console.log("1. Lister les clients");
    console.log("99. Sortir");
}


// récupération du module `readline`
var readline = require('readline');
// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var choixOption = function () {
    start();
    // récupération de la saisie utilisateur

    rl.question('choisissez un nombre : ', function (saisie) {
        // la variable `saisie` contient la saisie effectuée
        console.log(`Vous avez saisi : ${saisie}`);
        switch (saisie) {
            case "1": console.log("liste des clients");
                break;
            case "99": console.log("Au revoir");
                rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
                return;
        }
        choixOption();
    });


}



exports.lire = choixOption;


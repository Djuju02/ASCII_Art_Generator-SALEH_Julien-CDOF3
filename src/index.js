const readline = require('readline');
const AsciiArt = require('ascii-art');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateAsciiArt(text, style) {
    AsciiArt.font(text, style, function(err, rendered) {
        if (err) throw err;
        console.log(rendered);
    });
}

a = True;

while(a == True)
  {
    rl.question('Veuillez saisir le texte à convertir en Ascii art: ', function(text) {
        console.log("Choisissez un style : 1. Doom, 2. Rusted");
        rl.question('Entrez le numéro du style: ', function(number) {
            let style;
            switch (number) {
                case '1':
                    style = 'Doom';
                    break;
                case '2':
                    style = 'rusted';
                    break;
                default:
                    style = 'Doom';
                    break;
            }
            generateAsciiArt(text, style);
            rl.close();
        });
    });
    rl.question("Tapez <oui> pour continuer ou autre chose pour sortir.\n", function(c))
    if(c != "oui"){a = False)
  }

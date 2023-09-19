prompt = require('prompt-sync') ()

const deuses = ['Afrodite', 'Apolo','Ares' ,'Ártemis', 'Atena', 'Deméter', 'Dionísio', 'Eros','Hades',
'Hélios', 'Hermes' ,'Hera','Héstia','Horas ', 'Mnemósine ', 'Perséfone' , 'Poseidon ', 'Selene ', 'Têmis', 'Zeus']
 

        let tentativasRestantes = 5;

        function adivinharDeus() {
            const deuses = deuses[Math.floor(Math.random() * deuses.length)];
            let tentativas = 0;

            while (tentativas < tentativasRestantes) {
                const palpite = prompt(`Tentativa ${tentativas + 1}/${tentativasRestantes}: Digite o nome de um deus grego:`);

                if (!palpite) {
                    alert("Por favor, insira um nome de deus.");
                    continue;
                }

                if (palpite === deuses) {
                    alert(`Parabéns! Você adivinhou corretamente. O deus era ${deuses}.`);
                    break;
                } else {
                    tentativas++;
                    alert(`Tente novamente. ${tentativasRestantes - tentativas} tentativas restantes.`);
                }
            }

            if (tentativas === tentativasRestantes) {
                alert(`Suas tentativas acabaram. O deus correto era ${deuses}.`);
            }

            const continuarJogo = confirm("Deseja tentar adivinhar outro deus?");
            if (continuarJogo) {
                adivinharDeus();
            } else {
                alert("Obrigado por jogar!");
            }
        }

        console.log(adivinharDeus())
    
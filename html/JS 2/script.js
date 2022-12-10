function jokenpo(){
    let cont = 0
    let value = 1
    do{
        console.log('Escolha sua Jogada: \n')
        console.log('1 - Papel \n')
        console.log('2 - Pedra \n')
        console.log('3 - Tesoura \n')
        value = parseInt(prompt())
        console.log('O computador jogou Pedra!\n')
        if(value === 1){
            console.log('Você ganhou!\n')
            cont = cont+1
        }
        else if(value === 2){
            console.log('O jogo empatou!\n')
        }
        else if(value === 3){
            console.log('Você perdeu!\n')
        }

    }while(value != 3);
    console.log('A sua pontuação foi de ' + cont)
}


jokenpo();
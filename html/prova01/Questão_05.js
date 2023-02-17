Código não executa, apesar da lógica estar correta. Tem erros nos nomes dos métodos e das classes.
Nota: 1.0

class Venda {
    constructor(id,quantidade,preco){
        this.id = id;
		this.quantidade=quantidade;
		this.preco=preco; 
    }

    setid(id){
		this.id=id;
	}

	setquantidade(quantidade){
		this.quantidade=quantidade;
	}

	setpreco(preco){
		this.preco=preco
	}

	getid(){
		return this.id;
	}

	getquantidade(){
		return this.quantidade;
	}

	getpreco(){
		return this.preco;
	}

	getvalortotal(){
		return this.preco*this.quantidade;
	}

}

let produto1 = new venda (1,10,39.90);
let produto2 = new venda (2,5,52.80);

console.log(produto1.getValorTotal());
console.log(produto2.getValorTotal());





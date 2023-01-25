function criarBarra(h,l) {
    document.getElementById("bar").style.width = `${l}px`;
    document.getElementById("bar").style.height = `${h}px`;
    document.getElementById("bar").style.backgroundColor = `red`;
    document.getElementById("bar").style.margin = `100px 10px 200px 10px`
}



document.getElementById("botao").addEventListener("click", (e) => {
    h1 = document.getElementById("h1").value;
    h2 = document.getElementById("h2").value;
    h3 = document.getElementById("h3").value;
    h4 = document.getElementById("h4").value;
    h5 = document.getElementById("h5").value;
    larg = document.getElementById("larg").value;
    
    criarBarra(h1, larg);
    criarBarra(h2, larg);
    criarBarra(h3, larg);
    criarBarra(h4, larg);
    criarBarra(h5, larg);
});
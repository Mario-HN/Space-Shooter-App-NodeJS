function tabuada(){
    for(let i=1; i<=10; i++){
        document.write('<table border="1" class="box"><thead><tr> <th colspan=3> Produtos de '+i+'</th> </tr></thead>')
        for(let j=1; j<=10; j++){
            document.write('<tr><th colspan=2>'+i+'x'+j+'</th><th colspan=1>'+(i*j)+'</th></tr>')
        }
    }
    document.write('</table>')
}



tabuada();




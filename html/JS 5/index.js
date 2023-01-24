function Area(r){
    let area = 0;
    area = Math.PI * Math.pow(r,2);
    document.getElementById("area").value = area.toFixed(2);
}

function Circunferencia(r){
    let circ = 0;
    circ = 2 * Math.PI * r;
    document.getElementById("circ").value = circ.toFixed(2);
}

document.getElementById("botao").addEventListener("click", (e) => {
    radius = document.getElementById("raio").value;
    Area(radius);
    Circunferencia(radius);
});



// document.getElementById("botao").addEventListener("click", Area(radius));
// document.getElementById("botao").addEventListener("click", Circunferencia(radius));
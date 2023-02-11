function logs(tipo) {
    if(tipo === "simples"){
        return (req, res, next) => {
            console.log("mostrando logs simples");
            next();
        }
    }
    else if (tipo === "completo") {
        return (req, res, next) => {
            console.log("mostrando logs completos");
            next();
        }
    }
}

export default logs;
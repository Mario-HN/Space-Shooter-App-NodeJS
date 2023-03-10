const express = require("express");
const app = express();
const port = 4455;

app.get("/:op/:n1/:n2", (req, res) => {
    const op = req.params.op;
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    
    let result;

    switch(op){
        case "sum":
            result = n1+n2;
            break;
        
        case "sub":
            result = n1-n2;
            break;  

        case "multi":
            result = n1*n2;
            break; 
            
        case "div":
            result = n1/n2;
            break;
        
        default:
            result = "operação invalida";
    }
    
    res.send(`resultado: ${result}`)

});

app.listen(port, () =>{
    console.log(`O servidor está rodando em ${port}`);
});
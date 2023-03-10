import { createServer } from "http";
import isOdd from "is-odd";
import { upper , lower} from "./utils/strings.js";


const server = createServer(function name(req, res){
    res.write(isOdd(3) ? 'Eh impar' : 'Eh par');
    res.write(upper("Instituto de Computação"));
    res.end();
});

server.listen(3030);
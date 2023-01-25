import { createServer } from "http";
const fs = require('fs');

const server = createServer(function name(req, res){
    dir = fs.readdir('/Documentos/VSCODE/ProgWeb/ProgWeb/node');
    res.write(dir);
    res.end();
});

server.listen(3030);
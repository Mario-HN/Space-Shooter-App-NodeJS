const http = require('http');
const fs = require('fs');
let array = [];

const server = http.createServer(function name(req, res){
    dir = fs.readdir('./arq_node1', (err, files) => {
        if (err) throw err;
        for (let file of files) {
            array.push(file);
        }
    });

    for (let i=0; i<array.length; i++){
        res.write(array[i]+"\n");
    }

    res.end();
    
});

server.listen(3030);
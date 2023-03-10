// Uma função que retorna uma Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Dados obtidos');
        }, 1000);
    });
}

// Usando then para encadear Promises
fetchData()
    .then((data) => {
        console.log(data);
        return fetchData();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
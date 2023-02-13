// Uma função que retorna uma Promise
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Dados obtidos');
        }, 1000);
    });
}

// Usando async/await para simplificar o código
async function main() {
    try {
        const data1 = await fetchData();
        console.log(data1);
        const data2 = await fetchData();
        console.log(data2);
    } catch (error) {
        console.error(error);
    }
}

main();
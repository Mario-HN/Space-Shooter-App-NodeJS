const index = (req, res) => {
    const username = "fernanda"
    res.render("main/index", {
        username: username,
        isRyan: username==="ryan"
    });
};

const profs = (req, res) => {
    const professores = [
        {nome: "David Fernandes", sala: 1238},
        {nome: "Horácio Fernandes", sala: 1333},
        {nome: "Tayana COnte", sala: 1234},
        {nome: "Leandro Galvão", sala: 1111}
    ];
    res.render("main/profs", {
    professores,
    })
}

const about =  (req, res) => {
    res.send("Pagina about");
};

const ui = (req, res) => {
    res.render("main/ui");
}


export default { index, about, profs, ui }; 
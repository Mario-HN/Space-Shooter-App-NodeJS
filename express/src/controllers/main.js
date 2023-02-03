const index = (req,res) => {
    res.render("main/index", { layout: false });
};

const about =  (req,res) => {
    res.send("Pagina about");
};


export default { index, about };
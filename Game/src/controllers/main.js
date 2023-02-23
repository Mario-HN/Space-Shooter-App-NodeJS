const index = (req, res) => {
    res.render("main/index");
};

const game = (req, res) => {
    res.render("main/game");
};

const about =  (req, res) => {
    res.render("main/about");
};



export default { index, about, game }; 
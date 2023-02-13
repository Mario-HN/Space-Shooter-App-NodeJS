const models = require("../models");
const Curso = models.Curso;

const index = (req, res) => {
    res.render("curso/index");
};

const create = async (req, res) => {
    if (req.route.methods.get) {
        res.render("curso/create");
    } else {
        const curso = req.body;
        try {
            await Curso.create(curso);
            res.redirect("/curso");
        } catch (e) {
            console.log(e);
        }

    }
};


const read = async (req, res) => {

}


const update = async (req, res) => {

}


const remove = async (req, res) => {

}

export default { index, create, read, update, remove }



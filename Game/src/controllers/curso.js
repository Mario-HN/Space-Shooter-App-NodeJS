const models = require("../models");
const Curso = models.Curso;
const Area = models.Area;

const index = async (req, res) => {
    const cursos = await Curso.findAll();
    res.render("curso/index", {
        cursos: cursos.map((curso) => curso.toJSON()),
    });
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
            console.log(e.errors);
            res.render("curso/create", {curso, errors: e.errors});
        }

    }
};


const read = async (req, res) => {
    const { id } = req.params;
    try {
        const curso =  await Curso.findByPk(id, { include: Area});
        res.render("curso/read", {curso: curso.toJSON()})
    } catch (e) {
        console.log(e);
    }
    
}


const update = async (req, res) => {

}


const remove = async (req, res) => {
    const { id } = req.params;
    try {
        await Curso.destroy({where: {id: id}});
        res.send("Curso apagado com sucesso");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = { index, create, read, update, remove };



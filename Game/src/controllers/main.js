import { Curso, Usuario } from "../models/index";
import bcrypt from "bcryptjs";
import { useInflection } from "sequelize";

const index = (req, res) => {
    res.render("main/index");
};

const game = (req, res) => {
    res.render("main/game");
};

const about =  (req, res) => {
    res.render("main/about");
};

const signUp = async (req, res) => {
    const cursos = await Curso.findAll();
    if (req.route.methods.get) {
        res.render("main/signUp", {
            // csrf:req.csrfToken(),
            cursos: cursos.map(c => c.toJSON())
        });
    } else { 
        const usuario = req.body;
        try {
            bcrypt.genSalt(parseInt(process.env.BCRYPT_ROUNDS), (error, salt) =>{
                bcrypt.hash(usuario.senha, salt, async (error, hash) => {
                    await Usuario.create({
                        nome: usuario.nome,
                        email: usuario.email,
                        senha: hash,
                        cursoId: usuario.cursoId
                    });
                    req.session.uid = 0;
                    res.redirect("/");
                })
            });
        } catch (error) {
            console.log(error);
        }
    }
}

const login = async (req, res) => {
    if(req.route.methods.get){    
        res.render("main/login", {
            //csrf: req.csrfToken()
        })
    } else {
        const credentials = req.body;
        const user = await Usuario.findOne({where:{email:credentials.email}});
        if (user) {
            bcrypt.compare(credentials.senha, user.senha, (error, sucesso) =>{
                if(error) console.log(error);
                else if (sucesso) {
                    req.session.uid = user.id;
                    res.redirect("/");
                }
                else {
                    res.render("main/login", {
                        //csrf:req.csrfToken()
                    })
                }
            });
        }
    }
}

const logout = (req, res) => {
    req.session.destroy((error) => {
        if (error) console.log(error);
        else res.redirect("/");
    })
}


export default { index, about, game, signUp, login, logout}; 
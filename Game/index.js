import express from "express"
import router from "./src/router/router";
import { engine, ExpressHandlebars } from "express-handlebars";
import sass from "node-sass-middleware";
import cookieParser from "cookie-parser";
import csurf from "csurf";
import { v4 as uuidv4 } from "uuid";
import session from "express-session";


const morgan = require("morgan"); 
const app = express();
const PORT = 4400;

app.engine('handlebars', engine({
    helpers: require(`${__dirname}/src/views/helpers/helpers`),
    layoutsDir: `${__dirname}/src/views/layouts`,
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/src/views`);

app.use(sass({
    src: `${__dirname}/public/scss`,
    dest: `${__dirname}/public/css`,
    outputStyle: "compressed",
    prefix: "/css"
}));

app.use("/img", express.static(`${__dirname}/public/img`));
app.use("/css", express.static(`${__dirname}/public/css`));
app.use("/webfonts", express.static(`${__dirname}/node_modules/@fortawesome/fontawesome-free/webfonts`));
app.use("/js", [
   express.static(`${__dirname}/public/js`), 
   express.static(`${__dirname}/node_modules/bootstrap/dist/js/`), 
   express.static(`${__dirname}/node_modules/@popperjs/core/dist/umd/`), 

]);


app.use(cookieParser());
//app.use(csurf({cookie: true}));

// app.get("/cookie", (req ,res) => {
//     if(!('usuario' in req.cookies)) {
//         res.cookie('usuario', '1234', {maxAge: 100 * 60 * 60 * 24 * 365});
//         res.send("Usuario não identificado. Criando cookie agora!")
//     } else {
//         res.send(`Usuario identificado, ID ${req.cookies['usuario']}`);
//     }
// });

// app.get("/apagar-cookie", (req ,res) => {
//     res.clearCookie('usuario');
//     res.send("cookie apagado");
// });

app.use(session({
    genid: (req) => {
        return uuidv4()
    },
    secret: 'Hi9Cf#mK98',
    resave: false,
    saveUninitialized: true
}))

// app.get("/session", (req, res) => {
//     if(!('qtdItemsCarrinho' in req.session)) {
//         req.session.qtdItensCarrinho = 0;
//         res.send("Usuario sem carrinho, Inicializando...");
//     } else {
//         res.send("carrinho ja criado");
//     }
// })


app.use(express.urlencoded({extended: false}));
app.use(morgan("combined"));
app.use(router);

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}!`);
});
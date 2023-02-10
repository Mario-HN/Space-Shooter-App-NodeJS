import express from "express"
import router from "./src/router/router";
import { engine } from "express-handlebars";

const morgan = require("morgan"); 
const app = express()
const PORT = 4000;

app.engine('handlebars', engine({
    helpers: require(`${__dirname}/src/views/helpers/helpers`),
    layoutsDir: `${__dirname}/src/views/layouts`,
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/src/views`);

app.use(morgan("combined"));
app.use(router);

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}!`);
});
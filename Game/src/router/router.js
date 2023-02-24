import express from "express";
import mainController from "../controllers/main";
import areaController from "../controllers/area";
import cursoController from "../controllers/curso";
import authCheck from "../utils/authCheck.js";
const router = express.Router();

// Main controller
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/game", mainController.game);
router.get("/signUp", mainController.signUp);
router.post("/signUp", mainController.signUp);
router.get("/login", mainController.login);
router.post("/login", mainController.login);
router.get("/logout", mainController.logout);


// Area Controller
router.get("/areas", areaController.index);


// Curso Controller
router.get("/curso", authCheck, cursoController.index);

router.get("/curso/create", authCheck, cursoController.create);
router.post("/curso/create", authCheck, cursoController.create);

router.get("/curso/:id", authCheck, cursoController.read);

router.get("/curso/update/:id", authCheck, cursoController.update);
router.post("/curso/update/:id", authCheck, cursoController.update);

router.delete("/curso/:id", authCheck, cursoController.remove);



// ? controller


export default router;
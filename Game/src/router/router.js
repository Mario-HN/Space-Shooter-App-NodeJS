import express from "express";
import mainController from "../controllers/main";
import areaController from "../controllers/area";
import cursoController from "../controllers/curso";
const router = express.Router();

// Main controller
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/game", mainController.game);
router.get("/signUp", mainController.signUp);
router.post("/signUp", mainController.signUp);


// Area Controller
router.get("/areas", areaController.index);


// Curso Controller
router.get("/curso", cursoController.index);

router.get("/curso/create", cursoController.create);
router.post("/curso/create", cursoController.create);

router.get("/curso/:id", cursoController.read);

router.get("/curso/update/:id", cursoController.update);
router.post("/curso/update/:id", cursoController.update);

router.delete("/curso/:id", cursoController.remove);



// ? controller


export default router;
import express from "express";
import mainController from "../controllers/main";
import areaController from "../controllers/area";
const router = express.Router();

//Main controller
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/profs", mainController.profs);
router.get("/ui", mainController.ui);

// Area Controller

router.get("/areas", areaController.index);


//User controller



// ? controller


export default router;
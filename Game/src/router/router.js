import express from "express";
import mainController from "../controllers/main";
const router = express.Router();

//Main controller
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/profs", mainController.profs);
router.get("/ui", mainController.ui);


//User controller



// ? controller


export default router;
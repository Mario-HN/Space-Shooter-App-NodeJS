// Controlador Curso

const { router } = require("express");

router.get("/curso", cursoController.index);
router.get("/curso/create", cursoController.create);
router.post("/curso/create", cursoController.create);
router.get("/curso/:id", cursoController.read);
router.get("/curso/update/:id", cursoController.update);
router.post("/curso/update/:id", cursoController.update);
router.get("/curso/remove/:id", cursoController.read);

// Controlador Area

router.get("/Area", areaController.index);

module.exports = router;





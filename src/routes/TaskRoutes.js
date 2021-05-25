const express = require('express');
const router = express.Router();
//endentifica as rotas que estão chegando
const TaskController = require('../controller/TaskController');

router.post('/', TaskValidation, TaskController.create);
/**Buscar Todos*/
router.get('/filter/all/:macaddress', TaskController.all);

module.exports = router;
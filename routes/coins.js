
var express = require('express');
var router = express.Router();
var coinController = require("../controllers/coinController")
var jwtMiddleware = require('../middleware/jwt')

/* GET users listing. */

router.get('/',jwtMiddleware.authenticateToken, coinController.fetchAll)

router.post('/:id', jwtMiddleware.authenticateToken,coinController.addCoin)

router.get('/:id', jwtMiddleware.authenticateToken,coinController.fetchCoin)

router.put('/:id', jwtMiddleware.authenticateToken, coinController.updateCoin)

router.delete('/:id', jwtMiddleware.authenticateToken, coinController.deleteCoin)

router.post('/history/:id', jwtMiddleware.authenticateToken, coinController.fetchHistory)

module.exports = router;

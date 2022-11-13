const controllers = require('./controllers/index.js');
const router = require('express').Router();

router.get('/login/:id', controllers.userControllers.loginUser);
router.post('/signup/:id', controllers.userControllers.createUser);

module.exports = router;
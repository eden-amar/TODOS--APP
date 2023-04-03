const router = require('express').Router();
const controller = require('../controllers/authentication-controller');


router.post('/api/login', controller.login);
router.post('/api/register', controller.register);
router.get('/api/user-info');

module.exports = router;
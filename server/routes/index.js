const router = require('express').Router();
const todoRouter = require('./todos-router');
const authRouter = require('./authentication');

router.use(todoRouter);
router.use(authRouter)

module.exports = router;
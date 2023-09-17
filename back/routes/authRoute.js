const express = require('express');
const { registroUsuario, loginUser, logOut } = require('../controllers/authController');
const { isAuthenticatedUSer } = require('../middleware/auth');
const router = express.Router();

router.route('/usuario/registro').post(registroUsuario);
router.route('/login').get(loginUser);
router.route('/logout').get(isAuthenticatedUSer, logOut);


module.exports = router;
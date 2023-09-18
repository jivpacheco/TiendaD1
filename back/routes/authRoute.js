const express = require('express');
const { registroUsuario, loginUser, logOut, forgotPassword, resetPassword } = require('../controllers/authController');
const { isAuthenticatedUSer } = require('../middleware/auth');
const router = express.Router();

router.route('/usuario/registro').post(registroUsuario);
router.route('/login').get(loginUser);
router.route('/logout').get(isAuthenticatedUSer, logOut);
router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:token').post(resetPassword);


module.exports = router;
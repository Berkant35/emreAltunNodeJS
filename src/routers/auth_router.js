const router = require('express').Router();
const authController = require('../controllers/auth_controller');

router.get('/login', authController.showLoginForm);
router.post('/login', authController.login);

router.get('/register', authController.showRegisterForm);
router.post('/register', authController.register);


router.get('/forgot-password', authController.showForgotPasswordForm);
router.post('/forgot-password', authController.forgotPassword);

module.exports = router;
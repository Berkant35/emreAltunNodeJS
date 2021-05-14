const showLoginForm = (req, res, next) => {
    res.render('login', {
        layout: './layout/auth_layout.ejs'
    });
};
const login = (req, res, next) => {
    console.log(req.body);
    res.render('login', {
        layout: './layout/auth_layout.ejs'
    });
};
const showRegisterForm = (req, res, next) => {
    res.render('register', {
        layout: './layout/auth_layout.ejs'
    })
}
const register = (req, res, next) => {
    console.log(req.body);
    res.render('register', {
        layout: './layout/auth_layout.ejs'
    })
}

const showForgotPasswordForm = (req, res, next) => {
    res.render('forgot_password', {
        layout: './layout/auth_layout.ejs'
    })
}
const forgotPassword = (req, res, next) => {
    console.log(req.body);
    res.render('forgot_password', {
        layout: './layout/auth_layout.ejs'
    })
}
module.exports = {
    showLoginForm,
    showRegisterForm,
    showForgotPasswordForm,
    register,
    login,
    forgotPassword
};
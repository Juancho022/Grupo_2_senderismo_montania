const controller = {
    login(req, res) {
        res.render('login');
    },
    register(req, res) {
        res.render('register');
    },
    processLogin: function(req,res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

        } else {
            return res.render('login', {errors: errors.errors});
        }



    }
};

module.exports = controller;
module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if(req.isAuthenticated()) {
            return next();
        }
        req.flah('error_msg', 'Please log in to view this resource');
        res.redirect('/users/login');
    }
}
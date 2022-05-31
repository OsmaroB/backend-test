const auth = {};
auth.authcheck = (req, res, next) => {
    next();
};

module.exports = auth;

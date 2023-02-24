const authCheck = (req, res, next) => {
    if ('uid' in req.session) next();
    else res.redirect("/login");
}

export default authCheck;
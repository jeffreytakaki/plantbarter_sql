const isAuthenticated = (req,res,next) => {
    if(req.user) return next();

    return res.status(401).json({
        error: 'User not authenticated'
    })
}

module.exports = isAuthenticated;
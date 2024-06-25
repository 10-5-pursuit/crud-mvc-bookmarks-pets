const checkForNameKey = (req, res, next) => {
    if(req.body.hasOwnProperty('name')){
        next()
    } else {
        res.json({ error: "Bookmark must contain a name"})
    }
}


const checkForDotCom = (req, res, next) => {
    // how can we make sure that the URL ends in .com?
    if(req.body.url.slice(-4) === ".com"){
        next()
    } else {
        res.json({ error: "URL must end in '.com'" })
    }
}


module.exports = { checkForNameKey, checkForDotCom }
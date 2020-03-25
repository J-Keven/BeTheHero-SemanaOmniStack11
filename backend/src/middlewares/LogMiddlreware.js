module.exports = (req, res, next) => {
    console.time('Request')
    console.log(`Method: ${req.method}  Route: ${req.url}`)
    
    next()
    console.timeEnd('Request')
}
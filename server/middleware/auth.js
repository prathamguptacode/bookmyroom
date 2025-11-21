async function middleware(req,res,next) {
    console.log('say hiiiiii!!!')
    next()
}
module.exports = middleware
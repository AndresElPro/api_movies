module.exports = app => {
    app.get('/', (req, res) => {
        res.json({
            response : 'API Works :D'
        })
    })
}
// Va a exportar una función y va a necesitar el parametro de app

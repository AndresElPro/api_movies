import mongojs from 'mongojs';

const db = mongojs('DatabaseMovies', [
    'movies'
]);
// Traemos el paquete ya instalado mongojs y hacemos la comunicación desde express
// a mongodb, y coleccion de movies

module.exports = app => {
    app.get('/movies', (req, res) => {
        db.movies.find((err, movies) => {
            res.json({
                movies
            });
        });
    });
    // A pesar de que no haya creado la bd y la coleccion, si se la pido la va a crear al ser noSQL
    // dentro de ese find vamos a recibir un callback en caso de que hubiese un error y ahora 
    // vamos a devolver las movies, el arreglo de ellas

    app.post('/movies', (req, res) => {
        let newMovie = req.body;
        
        db.movies.insert(newMovie, (err, movie) =>{
            res.json({
                movie
            })
        });
        // Lo recibira de forma de callback con posible error y la respuesta
        // movie que es lo mismo que movie:movie
        // Ahora esta agregando lo que se manda
    });
    // Los usuarios mandaran datos a travéz de JSON pero nuestro servidor no entiende esto,
    // por lo tanto utilizamos un package(body-parser) que hace entender al servidor
    // que vamos a recibir JSON (middlewares.js)

    app.put('/movies/:id', (req, res) => {
        let updatedMovie = req.body;
        db.movies.update(
        {_id: mongojs.ObjectID(req.params.id)}, // mongojs tiene un método que transforma los STRINGS en párametros, transforma el string que recibimos de la ruta al ID
        updatedMovie,
        {},
        (err, response) => {
            res.json({
                response
            })
        }
    )
    });
    // A diferencia de POST con esto vamos a actualizar un dato
    // y recibimos una id por que queremos actualizar un dato en especifico
    // lo que vamos a actualiar sera (req.params.id = http://localhost:3000/movies/839328742)
    
    app.delete('/movies/:id', (req, res) => {
        db.movies.remove({
            _id: mongojs.ObjectID(req.params.id)
        }, (err, response) => {
            res.json(
                {response}
            )
        });
    });
};

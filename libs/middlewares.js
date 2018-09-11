import bodyParser from 'body-parser';

module.exports = app => {
    app.set('json spaces', 4);
    // Formateamos JSON, sus espacios
    app.set('port', process.env.PORT || 3000)
    // Que escuche o bien en el puerto que me da el propio servidor o sino el puerto 3000

    app.use(bodyParser.json());
    // Configuración del modulo para que acepte json
    
    app.use(bodyParser.urlencoded({extended: false}));
    // urlencoded interpreta lo que mandan a travéz de la url
    // ahora gracias a las 2 lineas de arriba mi API REST va a poder entender JSON
    // a travéz de la ruta POST
}
// Carpeta libs de configuraciones
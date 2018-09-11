import express from 'express';
import consign from 'consign';
// Nos permitira estructurar nuestro codigo
const app = express();
// Para que funcione utilizaremos babel, un script en package.json
// babel-node que es parte del paquete aún así no entiende la linea de arriba
// por lo tanto creamos el archivo .babelrc y saber que es lo que tiene
// que transpilar babel

consign()
    .include('libs/middlewares.js')
    .then('routes')
    .include('libs/boots.js')
    .into(app);
// Inicializamos consign luego incluye las configuraciones que están en...
// Luego las rutas, luego el archivo que se encargara de arrancar la app
// Y finalmente a todas estás rutas le pasamos la app
// Lo importa todo y finalmente inicializa la app
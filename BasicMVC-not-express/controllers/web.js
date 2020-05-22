const archivo = require("./files");
const movies = require("../models/movies");
module.exports = {
    home: (req,res) => {
        res.writeHead(200, {'Content-Type': 'application/json; charset= utf-8'});
        let data = JSON.stringify(
            {
                Título: "​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.",
                total_peliculas: archivo.convertir("movies").length,
                listado_peliculas: movies.ordenar(archivo.convertir("movies")),
                nuestra_rutas:[
                    "http://localhost:3000/",
                    "http://localhost:3000/en-cartelera",
                    "http://localhost:3000/mas-votadas",
                    "http://localhost:3000/sucursales",
                    "http://localhost:3000/contacto",
                    "http://localhost:3000/preguntas-frecuentes",
                    
                ]
            }
        )
        res.write(data);
        res.end();
    },
    cartelera: (req,res) => {
        res.writeHead(200, {'Content-Type': 'application/json; charset= utf-8'});
        let m = archivo.convertir("movies");
        let cartelera = m.map( movie => 
            [
                { 
                    Título: movie.title, 
                    Sinopsis: movie.overview
                }
            ]
        )
        let data = JSON.stringify(
            {
                Título: "​En Cartelera",
                total_peliculas: movies.length,
                listado_peliculas: movies.cartelera(cartelera),
                nuestra_rutas:[
                    "http://localhost:3000/",
                    "http://localhost:3000/en-cartelera",
                    "http://localhost:3000/mas-votadas",
                    "http://localhost:3000/sucursales",
                    "http://localhost:3000/contacto",
                    "http://localhost:3000/preguntas-frecuentes",
                    
                ]
            }
        );
        res.write(data);
        res.end();
    },
    votadas: (req,res) => {
        res.writeHead(200, {'Content-Type': 'application/json; charset= utf-8'});
        
        let m = archivo.convertir("movies");
        
        let data = JSON.stringify(
            {
                Título: "​En Cartelera",
                total_peliculas: movies.votados(m,7).length,
                ranting_promedio: movies.ranting(m),
                listado_peliculas: movies.votados(m,7),
                nuestra_rutas:[
                    "http://localhost:3000/",
                    "http://localhost:3000/en-cartelera",
                    "http://localhost:3000/mas-votadas",
                    "http://localhost:3000/sucursales",
                    "http://localhost:3000/contacto",
                    "http://localhost:3000/preguntas-frecuentes",
                    
                ]
            }
        );
        res.write(data);
        res.end();
    },
    sucursales: (req,res) => {
        res.writeHead(200, {'Content-Type': 'application/json; charset= utf-8'});

        let theaters = archivo.convertir("theaters");

        let info = theaters.map(theater => 
            [
                { 
                    Nombre: theater.name , 
                    Dirección: theater.address , 
                    Descripción: theater.description
                }
            ]
        );

        let data = JSON.stringify(
            {
                Título: "​En Cartelera",
                total_peliculas: theaters.length,
                listado_peliculas: info,
                nuestra_rutas:[
                    "http://localhost:3000/",
                    "http://localhost:3000/en-cartelera",
                    "http://localhost:3000/mas-votadas",
                    "http://localhost:3000/sucursales",
                    "http://localhost:3000/contacto",
                    "http://localhost:3000/preguntas-frecuentes",
                    
                ]
            }
        );

        res.write(data);
        res.end();
    }
}
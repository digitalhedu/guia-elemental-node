const archivo = require("./modules/archivo");
const data = require("./data");


archivo.escribir("movies",data.movies)
archivo.escribir("faqs",data.faqs)
archivo.escribir("theaters",data.theaters)

let movies = archivo.convertir("movies");
let faqs = archivo.convertir("faqs");
let theaters = archivo.convertir("theaters");

console.log("----------------- Mis Peliculas ------------------");

movies.forEach(movie => {
    console.log();
    console.log(`Titulo: ${movie.title} - Votación: ${movie.vote_average} `)
    console.log("_________________________________________________________");
});
console.log();

console.log("_________________________________________________________");

console.log();

console.log("-------------- Pregunstas Frecuentes ---------------");

faqs.forEach(asq => {
    console.log();
    console.log(`Pregunta: ${asq.faq_title} => `);
    console.log(`       Respuesta: ${asq.faq_answer} `);
    console.log("_________________________________________________________");
});

console.log();

console.log("_________________________________________________________");

console.log();

console.log("---------------- Mis Salas de Cines -----------------");

theaters.forEach(theater => {
    console.log();
    console.log(`Teatro: ${theater.name} - Cant. Salas: ${theater.total_rooms}  `);
    console.log(`--------- Dirección: ${theater.address} --------- `);
    console.log(`Descripción => ${theater.description}`);
    console.log("_________________________________________________________");
});

console.log();

console.log("_________________________________________________________");
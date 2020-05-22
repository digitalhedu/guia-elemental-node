let web = require("../controllers/web");
let router = {
    routes: [
        {
            url:"/",
            method: "GET",
            action: web.home

        },
        {
            url:"/en-cartelera",
            method: "GET",
            action: web.cartelera

        },
        {
            url:"/mas-votadas",
            method: "GET",
            action: web.votadas

        },
        {
            url:"/sucursales",
            method: "GET",
            action: web.sucursales

        },
        {
            url:"/contacto",
            method: "GET",
            action: web.contacto

        },
        {
            url:"/preguntas-frecuentes",
            method: "GET",
            action: web.faqs

        }
    ],
    get: function (url,method) {
        let route = this.routes.find(route => route.url == url);
        return route != null && route.method == method ? route.action : null;
    },
}

module.exports = router
module.exports = {
    ordenar: function (data) {
        return data.sort( (a, b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0);
    },
    cartelera: function (data) {
        return data.sort((a, b) => a[0].Título > b[0].Título ? 1 : a[0].Título < b[0].Título ? -1 : 0)
    },
    votados: function (data,value) {
        return data.filter(movie => movie.vote_average >= value)
    },
    ranting: function (data) {
        let sumatoria = 0;
        data.map(movie => movie.vote_average ).forEach( p =>  sumatoria = sumatoria + p);
        return Math.round(sumatoria/data.length)
    }
}
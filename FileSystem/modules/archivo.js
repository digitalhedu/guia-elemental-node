const fs = require("fs");
const path = require("path");
const archivo= {
    leer : function(file){
        let folder = path.join(__dirname,"../data/",file+".json");
        return fs.readFileSync(folder,"utf-8")
    },
    escribir: function (file,data) {
        let folder = path.join(__dirname,"../data/",file+".json");
        let info = JSON.stringify(data,null, 4)
        return fs.writeFileSync(folder,info);
    },
    convertir: function (file) {
       return JSON.parse(this.leer(file))
    },
    
}

module.exports = archivo
const path = require('path');
const PaginasController = {

    showIndex:(req, res)=>{
        return res.render('index.ejs');
    },

    showCarrinho:(req, res)=>{
        return res.sendFile(path.resolve("views/carrinho.html"));
    },

    showPerfil:(req, res)=>{
        return res.sendFile(path.resolve("views/perfil.html"));
    },

    showCadastro:(req, res)=>{
        return res.sendFile(path.resolve("views/cadrastro.html"));
    },

    showPizza: (req,res)=>{
        let id = req.params.idDaPizza;
        return res.send('Oi, queria te mostrar a pizza' + id);
    }

}

module.exports = PaginasController;
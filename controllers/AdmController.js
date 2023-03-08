const PizzasServices = require("../services/PizzasServices");

const AdmsController = {
    listarPizzas:(req,res)=>{
        //carregar pizzas
        const pizzas = PizzasServices.carregarPizzas();
        //renderizar a view
        res.render('lista-de-pizza.ejs',{pizzas})
    },
    criarPizza:(req,res)=>{
        res.render('form-add-pizza.ejs');
    },
    gravarPizzas: (req,res) => {
        let pizza = {
            nome: req.body.nome,
            ingredientes: req.body.ingredientes.split(',').map(e => e.trim()),
            preco: Number(req.body.preco),
            img: `/img/${novoNome}`,
            destaque: false,
            score:0
        }
        res.send(req.body);
    }
}

module.exports = AdmsController;
// importar o express
const express = require('express');
const multer = require('multer');

const AdmsController = require('./controllers/AdmController');
const PaginasController = require('./controllers/PaginasController');
const PizzasController = require('./controllers/PizzasController');
const registraRequisicao = require('./middlewares/registraRequisicao');

const fabricaDeMiddeleware = multer({dest:'public/img'});

// criar o roteador
const router = express.Router();

// definir as rotas para o roteador 
router.get('/', PaginasController.showIndex);
router.get('/carrinho',PaginasController.showCarrinho);
router.get('/perfil', PaginasController.showPerfil);
router.get('/cadastro', PaginasController.showCadastro);
router.get('/pizzas/:idDaPizza', PaginasController.showPizza);

router.get('/adm/pizzas',AdmsController.listarPizzas);
router.get('/adm/pizzas/create',(req, res)=>{});
router.get('/adm/pizzas/edit', (req, res)=>{});
router.post('/adm/pizzas/store',fabricaDeMiddeleware.single('img'),AdmsController.gravarPizzas);
router.post('/adm/pizzas/update',(req,res)=>{});
router.get('/adm/pizzas/<%= p.id %>/delete',(req,res)=>{});

// exportar o roteador
module.exports = router;
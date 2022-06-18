const express=require('express');

const router=express.Router();

router.use(express.json());

const Contato = require('../models/sosmulher/contato');

//------------------------------------------------------

router.get('/', async(req,res)=> {
    res.send(`GET ALL`);
});

router.get('/:id',async(req,res)=> {
    res.send(`GET ID: ${req.params.id}`);
});

router.post('/', async(req, res)=>{// salvar
	let contato=await Contato.build(req.body); //create/build
	contato=await contato.save()
	res.send(contato);
});

router.put('/:id',async(req,res)=>{ //atualizar
	let contato=await contato.findByPk(req.params.id);
	contato=await post.save(contato);
	res.send(contato);	
});

router.delete('/:id',async(req,res)=>{
	let contato=await Contato.findByPk(req.params.id);
	contato.destroy();
	res.status(204).send();
});

//--------------------------------------------------------

router.get('/:nome',async(req,res)=> {
    res.send(`GET nome: ${req.params.nome}`);
});

router.put('/:nome',async(req,res)=> { //atualizar
    res.send(`PUT nome: ${req.body}`);
});

router.post('/nome:',async(req,res)=> { //salvar
    res.send(`POST nome: ${req.body}`);
});

router.delete('/:nome',async(req,res)=> { //delete
    res.send(`DELETE nome: ${req.params.nome}`);
});

//---------------------------------------------------------

router.get('/:telefone',async(req,res)=> {
    res.send(`GET telefone: ${req.params.telefone}`);
});

router.put('/:telefone',async(req,res)=> { //atualizar
    res.send(`PUT telefone: ${req.body}`);
});

router.post('/telefone:',async(req,res)=> { //salvar
    res.send(`POST telefone: ${req.body}`);
});

router.delete('/:telefone',async(req,res)=> { //delete
    res.send(`DELETE telefone: ${req.params.telefone}`);
});

//--------------------------------------------------------------

router.get('/:email',async(req,res)=> {
    res.send(`GET email: ${req.params.email}`);
});

router.put('/:email',async(req,res)=> { //atualizar
    res.send(`PUT email: ${req.body}`);
});

router.post('/email:',async(req,res)=> { //salvar
    res.send(`POST email: ${req.body}`);
});

router.delete('/:email',async(req,res)=> { //delete
    res.send(`DELETE email: ${req.params.email}`);
});
 
//---------------------------------------------------------

router.get('/:imagem_path',async(req,res)=> {
    res.send(`GET imagem_path: ${req.params.imagem_path}`);
});

router.put('/:imagem_path',async(req,res)=> { //atualizar
    res.send(`PUT imagem_path: ${req.body}`);
});

router.post('/imagem_path:',async(req,res)=> { //salvar
    res.send(`POST imagem_path: ${req.body}`);
});

router.delete('/:imagem_path',async(req,res)=> { //delete
    res.send(`DELETE imagem_path: ${req.params.imagem_path}`);
});

//--------------------------------------------------------

router.get('/:tipo',async(req,res)=> {
    res.send(`GET imagem_path: ${req.params.tipo}`);
});

router.put('/:tipo',async(req,res)=> { //atualizar
    res.send(`PUT tipo: ${req.body}`);
});

router.post('/tipo:',async(req,res)=> { //salvar
    res.send(`POST tipo: ${req.body}`);
});

router.delete('/:tipo',async(req,res)=> { //delete
    res.send(`DELETE tipo: ${req.params.tipo}`);
});

module.exports=router;
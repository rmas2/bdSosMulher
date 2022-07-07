const express=require('express');

const router=express.Router();

router.use(express.json());

const Telefone = require('../models/sosmulher/telefone');

router.get('/',async(req,res)=> {
	let telefone=await telefone.findAll();	
	res.send(telefone);
	
//	res.send(`GET ALL`);
});


router.get('/:id',(req,res)=> {
//    let telefone=await telefone(req.params.id);
	res.send(`GET ID: ${req.params.id}`);
	
	
//	res.send(`GET ID: ${req.params.id}`);
});

router.put('/:id',async(req,res)=> { //atualizar
    let telefone=await telefone.findByPk(req.params.id);
	telefone=await post.save(telefone);
	res.send(telefone);
	
//	res.send(`PUT id: ${req.body}`);
});

router.post('/:',async(req,res)=> { //salvar
    let telefone=await telefone.build(req.body); //creat/build
	telefone=await telefone.save();
	res.send(telefone);
	
//	res.send(`POST: ${req.body}`);
});

router.delete('/:id', async(req,res)=> { //delete
		let telefone=await telefone.findByPk(req.params.id);
		telefone.destroy();
		res.status(204).send();
	
//	res.send(`DELETE: ${req.params.id}`);
});

//-----------------------------------------------
/*

router.get('/:nome',(req,res)=> {
    res.send(`GET nome: ${req.params.nome}`);
});

router.put('/:nome',(req,res)=> { //atualizar
    res.send(`PUT nome: ${req.body}`);
});

router.post('/:nome',(req,res)=> { //salvar
    res.send(`POST nome: ${req.body}`);
});

router.delete('/:nome',(req,res)=> { //delete
    res.send(`DELETE nome: ${req.params.nome}`);
});

//--------------------------------------------------

router.get('/:telefone',(req,res)=> {
    res.send(`GET telefone: ${req.params.telefone}`);
});

router.put('/:telefone',(req,res)=> { //atualizar
    res.send(`PUT telefone: ${req.body}`);
});

router.post('/:telefone',(req,res)=> { //salvar
    res.send(`POST telefone: ${req.body}`);
});

router.delete('/:telefone',(req,res)=> { //delete
    res.send(`DELETE telefone: ${req.params.telefone}`);
});

//--------------------------------------------------------


router.get('/:descricao',(req,res)=> {
    res.send(`GET descricao: ${req.params.descricao}`);
});

router.put('/:descricao',(req,res)=> { //atualizar
    res.send(`PUT descricao: ${req.body}`);
});

router.post('/:descricao',(req,res)=> { //salvar
    res.send(`POST descricao: ${req.body}`);
});

router.delete('/:descricao',(req,res)=> { //delete
    res.send(`DELETE descricao: ${req.params.descricao}`);
});
*/



module.exports=router;

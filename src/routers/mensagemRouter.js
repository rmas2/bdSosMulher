const express=require('express');

const router=express.Router();

router.use(express.json());

const Mensagem = require('../models/sosmulher/mensagem');


router.get('/',async(req,res)=> {
    let mensagem=await mensagem.findAll();
	res.send(`mensagem`);

//	res.send(`GET ALL`);
});

/*
router.get('/',(req,res)=> {
    res.send(`GET ALL`);
});
*/

router.get('/:id',async(req,res)=> {
    let mensagem=await mensagem(req.params.id);
	res.send(`GET ID: ${req.params.id}`);
});

router.put('/:id',async(req,res)=> { //atualizar
    let mensagem=await mensagem.findByPk(req.params.id);
	mensagem=await post.save(mensagem);
	res.send(mensagem);
	
//	res.send(`PUT id: ${req.body}`);
});

router.post('/:',async(req,res)=> { //salvar
    let mensagem=await mensagem.build(req.body);//create/build 
	mensagem=await mensagem.save();
	res.send(mensagem);
	
//	res.send(`POST: ${req.body}`);
});

router.delete('/:id',async(req,res)=> { //delete
    let mensagem=await mensagem.findByPk(req.params.id);
	mensagem.destroy();
	res.status(204).send();
	
//	res.send(`DELETE: ${req.params.id}`);
});


/*
//-------------------------------------------------------

router.get('/:conteudo',(req,res)=> {
    res.send(`GET conteudo: ${req.params.conteudo}`);
});

router.put('/:conteudo',(req,res)=> { //atualizar
    res.send(`PUT conteudo: ${req.body}`);
});

router.post('/:conteudo',(req,res)=> { //salvar
    res.send(`POST conteudo: ${req.body}`);
});

router.delete('/:conteudo',(req,res)=> { //delete
    res.send(`DELETE conteudo: ${req.params.conteudo}`);
});

//----------------------------------------------------------


router.get('/:status',(req,res)=> {
    res.send(`GET status: ${req.params.status}`);
});

router.put('/:status',(req,res)=> { //atualizar
    res.send(`PUT status: ${req.body}`);
});

router.post('/:status',(req,res)=> { //salvar
    res.send(`POST status: ${req.body}`);
});

router.delete('/:status',(req,res)=> { //delete
    res.send(`DELETE status: ${req.params.status}`);
});

*/


module.exports=router;
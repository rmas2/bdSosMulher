const express=require('express');

const router=express.Router();

router.use(express.json());

const Mensagem = require('../models/sosmulher/mensagem');


router.get('/',(req,res)=> {
    res.send(`GET ALL`);
});

router.get('/',(req,res)=> {
    res.send(`GET ALL`);
});


router.get('/:id',(req,res)=> {
    res.send(`GET ID: ${req.params.id}`);
});

router.put('/:id',(req,res)=> { //atualizar
    res.send(`PUT id: ${req.body}`);
});

router.post('/:',(req,res)=> { //salvar
    res.send(`POST: ${req.body}`);
});

router.delete('/:id',(req,res)=> { //delete
    res.send(`DELETE: ${req.params.id}`);
});

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

module.exports=router;
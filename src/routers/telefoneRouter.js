const express=require('express');

const router=express.Router();

router.use(express.json());

const Telefone = require('../models/sosmulher/telefone');

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

//-----------------------------------------------

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

module.exports=router;
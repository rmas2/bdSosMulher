const express=require('express');

const router=express.Router();

router.use(express.json());

const Smartphone = require('../models/sosmulher/smartphone');


router.get('/',(req,res)=> {
    res.send(`GET ALL`);
});

router.get('/:id',(req,res)=> {
    res.send(`GET ID: ${req.params.id}`);
});

router.get('/:telefone',(req,res)=> {
    res.send(`GET telefone: ${req.params.telefone}`);
});

router.put('/:telefone',(req,res)=> { //atualizar
    res.send(`PUT telefone: ${req.body}`);
});

router.post('/',(req,res)=> { //salvar
    res.send(`POST: ${req.body}`);
});

router.delete('/:id',(req,res)=> { //delete
    res.send(`DELETE: ${req.params.id}`);
});

//-----------------------------------

router.get('/:email',(req,res)=> {
    res.send(`GET email: ${req.params.email}`);
});

router.put('/:email',(req,res)=> { //atualizar
    res.send(`PUT email: ${req.body}`);
});

router.post('/:email',(req,res)=> { //salvar
    res.send(`POST email: ${req.body}`);
});

router.delete('/:email',(req,res)=> { //delete
    res.send(`DELETE: ${req.params.email}`);
});

//-----------------------------------------------

router.get('/:smartphone',(req,res)=> {
    res.send(`GET smartphone: ${req.params.smartphone}`);
});

router.put('/:smartphone',(req,res)=> { //atualizar
    res.send(`PUT smartphone: ${req.body}`);
});

router.post('/smartphone',(req,res)=> { //salvar
    res.send(`POST smartphone: ${req.body}`);
});

router.delete('/:smartphone',(req,res)=> { //delete
    res.send(`DELETE: ${req.params.smartphone}`);
});

//----------------------------------------------------




module.exports=router;
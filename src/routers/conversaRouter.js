const express=require('express');

const router=express.Router();

router.use(express.json());

const Conversa = require('../models/sosmulher/conversa');

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

module.exports=router;
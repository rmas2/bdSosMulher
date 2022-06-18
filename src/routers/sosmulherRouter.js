const express=require('express');

const router=express.Router();

router.use(express.json());

const Contato = require('../models/sosmulher/contato');
const Smartphone = require('../models/sosmulher/smartphone');
const Telefone = require('../models/sosmulher/telefone');
const Conversa = require('../models/sosmulher/conversa');
const Mensagem = require('../models/sosmulher/mensagem');

router.get('/',(req,res)=> {
    res.send(`GET ALL`);
});

router.get('/:id',(req,res)=> {
    res.send(`GET ID: ${req.params.id}`);
});

router.get('/matricula/:matricula',(req,res)=> {
    res.send(`GET Matricula: ${req.params.matricula}`);
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
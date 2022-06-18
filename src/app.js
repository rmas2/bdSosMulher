//console.log('HELLO');

const express = require('express');
const env = require('dotenv/config'); 


const database = require('./db');
const app=express();
app.use(express.json());


const sosRouter=require('./routers/sosmulherRouter');
const smartphoneRouter = require('./routers/smartphoneRouter');
const contatoRouter = require('./routers/contatoRouter');
const conversaRouter = require('./routers/conversaRouter');
const mensagemRouter = require('./routers/mensagemRouter');
const telefoneRouter = require('./routers/telefoneRouter');

app.use('/sosmulher',sosRouter);
app.use('/smartphone', smartphoneRouter);
app.use('/contato', contatoRouter);
app.use('/conversa', conversaRouter);
app.use('/mensagem', mensagemRouter);
app.use('/telefone', telefoneRouter);


app.listen(3000, async ()=>{
    const resultDb = await database.sync({force:true});
    console.log('server started');
})








/*app.get('/teste',(req, res)=> {
    res.send('Bom dia!');
}) */
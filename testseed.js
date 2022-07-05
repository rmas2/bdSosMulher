module.exports={
    up:(telefone, Sequelize)=> telefone.bulkInsert('TelefoneUtil',
    [
        {
            nome:'Cental de Atendimento a Mulher',
            telefone:'180',
            descricao:'Em casos de violencia conta à mulher disque 180.',
        },
        {
            nome:'Policia Militar',
            telefone:'190',
            descricao:'Em situação de perigo imediato disque 190.',
        },
        {
            nome:'Disque Direitos Humanos',
            telefone:'100',
            descricao:'Em casos de Abusos conta à mulher,crianças e adolescentes disque 100-Central de direitos humanos.',
        }


    ],{}),
    
    down:(telefone)=> telefone.bulkDelete(TelefoneUtil,null,{}),
};

//referencia para esse seed ta no link: https://medium.com/@stroklabs/migrations-e-seeders-no-sequelizejs-67ba3571ed0e
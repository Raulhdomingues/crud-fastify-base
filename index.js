const dotenv = require('dotenv').config();
const productsRoutes = require('./routes/products');

//importando o fastify
const Fastify = require('fastify');

//executando o fastify
const fastify = Fastify({logger: false })

// "importando" o plugin que foi instalado do banco de dados, no caso mysql
fastify.register(require('@fastify/mysql'), {
                        //root:root   seria usuario:senha
    connectionString: 'mysql://root:root@localhost:3306/sys'
})

//importando as rotas de outro arquivo
require('./routes/routes')(fastify);

//subindo o servidor
fastify.listen({ port: 3000 }, function (error, address) {
    if(error) {
        console.log(error)
        process.exit(1)
    }
    console.log('Servidor rodando', address)
})
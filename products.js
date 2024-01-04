exports.productsRoutes = (fastify) => {


    //criando uma rota get
fastify.get('/products', (req, reply) => {
    fastify.mysql.query(
        "SELECT id, name, price FROM products",
        function onResult(error, result) {
            reply.send(error || result)
        }
    )
})

//criando rota Post
fastify.post('/products', (req, reply) => {
    fastify.mysql.query(
        `INSERT INTO products (id, name, price) VALUES ('${request.body.id}', ${request.body.name}, '${request.body.price}')`,
        function onResult(error, result) {
            reply.send(error || result)
        }
    )
})

//criando rota get pegando apenas um item pelo id
fastify.get('/products/:id', (req, reply) => {
    fastify.mysql.query(
        `SELECT id, name, price FROM products WHERE products.id = ${Number(req.params.id)}`,
        function onResult(error, result) {
            reply.send(error || result)
        }
    )
})

//criando uma rota put (atualizar)
fastify.put('/produts/:id', (req, reply) => {
    fastify.mysql.query(
        `UPDATE products SET name = '${req.body.name}', price = '${req.body.price}'
        WHERE products.id = ${Number(req.params.id)}`,
        function onResult(error, result) {
            reply.send(error || result) 
        }
    )
})

fastify.delete('/products/:id', (req, reply) => {
    fastify.mysql.query(
        `DELETE FROM products WHERE products.id = ${Number(req.params.id)}`,
        function onResult(error, result) {
            reply.send(error || result)
        }
    )
})
}
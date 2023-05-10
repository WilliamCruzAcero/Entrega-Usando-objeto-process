const fs = require('fs');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const { buildSchema } = require("graphql")

const { conectDB } = require('./src/conectDB/conectDB');
const {getUsers, saveProduct} = require('./src/graphql/resolvers')


class ServerGraphql {

    constructor(port) {
        this.app = express();
        this.port = port;
        this.graphql = '/graphql'
    }

    async start() {

        await conectDB();
        const schemaFile = fs.readFileSync('./src/graphql/schema/schema.graphql', {encoding: 'utf-8'});        
        
        const schema = buildSchema(schemaFile);

        const root = {
            getUsers,
            saveProduct
          }

        this.app.use(this.graphql, graphqlHTTP({
            schema,
            rootValue: root,
            graphiql: true
        }));

        this.app.listen(this.port, () => {
            console.log(`Servidor ejecutandose en el puerto ${this.port}`);
        })
    }
}

module.exports = ServerGraphql;


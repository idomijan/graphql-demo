const express = require ('express');
const graphqlHTTP = require ('express-graphql'); // One ednpoint to rule them all
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, ()=> {
    console.log('Listening on port 4000');
})


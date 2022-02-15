import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-lambda';

import { RecipeResolver } from './recipe.resolver';
import { buildSchema } from 'type-graphql';
import { connect } from './connectors/mongo';

const schema = await buildSchema({
    resolvers: [RecipeResolver]
})

const apolloServer = new ApolloServer({
    schema,
    context: async ({ event, context, express }) => {
        const newContext = {
            headers: event.headers,
            functionName: event.functionName,
            event,
            context,
            expressRequest: express.req,
        }

        if(express.req.method === 'POST') {
            await connect()
        }

        return newContext
    }
})

exports.handler = apolloServer.createHandler();
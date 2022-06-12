import { graphqlHTTP } from 'express-graphql';
import schema from '../schema/schema';

export const graphQLHTTPAsFunction =  graphqlHTTP({
	schema,
	graphiql: true
})

// process.env.NODE_ENV === 'development'
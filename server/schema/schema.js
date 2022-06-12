import {  GraphQLSchema } from 'graphql';
import { RootQuery } from './queries'; 
import { Mutation } from './mutations';


module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
})
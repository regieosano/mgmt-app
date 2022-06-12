import { GraphQLObjectType, GraphQLNonNull } from 'graphql';
import { ProjectType, ClientType } from './types';

// Mutations
export const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: { 
		addClient: {
			type: ClientType,

		}
	}
})
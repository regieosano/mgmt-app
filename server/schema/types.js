import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

// Project Type
export const ProjectType = new GraphQLObjectType({
	name: 'Project',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		status: { type: GraphQLString },
		client: { 
			type: ClientType,
			resolve(parent, args) {
				return Client.findById(parent.clientId)
			}
		}
	}),
});


// Client Type
export const ClientType = new GraphQLObjectType({
	name: 'Client',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
	})
});
// Mongoose Models
import Project from '../models/Project';
import Client from '../models/Client';

import { GraphQLObjectType, GraphQLID, GraphQLList } from 'graphql';
import { ProjectType, ClientType } from './types';

export const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		projects: { 
			type: new GraphQLList(ProjectType),
			resolve(parent, args) { 
				return Project.find();
			}
		},
		project: { 
			type: ProjectType,
			args: {id: {type: GraphQLID}},
			resolve(parent, args) { 
				return Project.findById(args.id)
			}
		},
		clients: { 
			type: new GraphQLList(ClientType),
			resolve(parent, args) { 
				return Client.find();
			}
		}, 
		client: { 
			type: ClientType,
			args: {id: {type: GraphQLID}},
			resolve(parent, args) { 
				return Client.findById(args.id);
			}
		}
	}
});


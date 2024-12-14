import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import fs from 'fs';
import path from 'path';
import resolvers from './resolvers/index';

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');

const server = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(server);


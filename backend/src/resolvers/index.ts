import userResolvers from './user';
import gameResolvers from './game';
import responseResolvers from './response';

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...gameResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...gameResolvers.Mutation,
    ...responseResolvers.Mutation,
  },
  User: userResolvers.User,
  Game: gameResolvers.Game,
  Response: responseResolvers.Response,
};

export default resolvers;

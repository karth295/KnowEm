import prisma from './prismaClient';

const userResolvers = {
  Query: {
    users: () => prisma.user.findMany(),
    user: (_: unknown, { id }: {id: string}) => prisma.user.findUnique({ where: { id } }),
  },
  Mutation: {
    createUser: (_: unknown, { username }: {username: string}) => prisma.user.create({
      data: { username },
    }),
  },
  User: {
    userGames: (parent: { id: string; }) => prisma.userGame.findMany({ where: { userId: parent.id } }),
    responses: (parent: { id: string; }) => prisma.response.findMany({ where: { userId: parent.id } }),
    responseTargets: (parent: { id: string; }) => prisma.response.findMany({ where: { targetUserId: parent.id } }),
  },
};

export default userResolvers;
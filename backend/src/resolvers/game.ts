import { GameStatus, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const gameResolvers = {
  Query: {
    games: () => prisma.game.findMany(),
    game: (_: unknown, { id }: {id: string}) => prisma.game.findUnique({ where: { id } }),
  },
  Mutation: {
    createGame: (_: unknown, { status }: { status: string }) => prisma.game.create({
      data: { status: (status as GameStatus) },
    }),
  },
  Game: {
    gameQuestions: (parent: {id: string}) => prisma.gameQuestion.findMany({ where: { gameId: parent.id } }),
    userGames: (parent: {id: string}) => prisma.userGame.findMany({ where: { gameId: parent.id } }),
  },
};

export default gameResolvers;

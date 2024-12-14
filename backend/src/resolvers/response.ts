import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const responseResolvers = {
  Mutation: {
    createResponse: (_: unknown, { gameQuestionId, userId, targetUserId, answer }: {gameQuestionId: string, userId: string, targetUserId: string, answer: string}) => prisma.response.create({
      data: {
        gameQuestionId,
        userId,
        targetUserId,
        answer,
      },
    }),
  },
  Response: {
    gameQuestion: (parent: { gameQuestionId: string; }) => prisma.gameQuestion.findUnique({ where: { id: parent.gameQuestionId } }),
    user: (parent: { userId: string; }) => prisma.user.findUnique({ where: { id: parent.userId } }),
    targetUser: (parent: { targetUserId: string; }) => prisma.user.findUnique({ where: { id: parent.targetUserId } }),
  },
};

export default responseResolvers;
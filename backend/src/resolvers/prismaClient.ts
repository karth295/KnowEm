import { PrismaClient } from '@prisma/client';

// Instantiate PrismaClient once
const prisma = new PrismaClient();

// Export the instance to use throughout the app
export default prisma;

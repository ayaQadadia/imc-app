import { PrismaClient } from '@prisma/client'


let prisma = PrismaClient | undefined
const prismaS = prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") prisma = prismaS;

export default prisma;

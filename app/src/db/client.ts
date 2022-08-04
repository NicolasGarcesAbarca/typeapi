import { PrismaClient } from '@prisma/client'

//prisma client have to be global 
//so it won't be instantiated everytime of next hot-reload
declare global {
  var prisma: PrismaClient | undefined
}

//keep only one instance!
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
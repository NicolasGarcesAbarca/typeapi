import { User } from '@prisma/client'
import { prisma } from '../db/client'

export const getAllDiaries = async (): Promise<User[]|undefined> => {
  // prisma generates the types automatically using scheme
  const diaries = await prisma?.user?.findMany()
  return diaries
}

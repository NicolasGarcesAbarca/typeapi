import { prisma } from '../db/client'

export const getAllDiaries = async () => {
    const diaries = await prisma.user.findMany()
    return diaries
}
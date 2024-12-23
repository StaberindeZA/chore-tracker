'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"

export async function addAddhocChore(userId: string, choreId: string, formData: FormData) {
  const date = formData.get('date')?.toString()
  const dateAdded =  date ? new Date(date) : new Date()

  await prisma.adhocChoreCounter.create({ data: { userId, choreId, dateAdded }})

  revalidatePath('/');
}

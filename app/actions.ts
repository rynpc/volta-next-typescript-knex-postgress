'use strict';
'use server';

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  await db('users').insert({ name, email });
  
  // This tells Next.js to refresh the UI data
  revalidatePath('/'); 
}

export async function getUsers() {
  return await db('users').select('*').orderBy('id', 'desc');
}

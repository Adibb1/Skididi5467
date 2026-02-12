'use server'

import { cookies } from "next/headers";

export async function getCookie(name: string) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(name);
  return cookie?.value;
}

export async function setCookie(name: string, value: string) {
  const cookieStore = await cookies();
  const cookie = cookieStore.set(name, value);
}

export async function deleteCookie(name: string) {
  const cookieStore = await cookies();
  const cookie = cookieStore.delete(name);
}

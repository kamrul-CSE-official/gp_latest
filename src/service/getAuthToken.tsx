import { cookies } from "next/headers";

async function getAuthToken(key: string): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(key)?.value || null;
  return token;
}

export default getAuthToken;

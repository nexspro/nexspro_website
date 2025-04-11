export async function getUsers() {
  const res = await fetch (`${process.env.NEXT_PUBLIC_API_URL}/users`);
  if (!res.ok) throw new Error("Erreur API")
  return res.json();
}

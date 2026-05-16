export async function POST(request: Request) {
  const { username, password } = await request.json();

  const isValid =
    process.env.USERNAME_HASH === username &&
    process.env.PASSWORD_HASH === password;

  if (!isValid) return new Response("Unauthorized", { status: 401 });

  // TODO: Implement rest of LOGIN
}

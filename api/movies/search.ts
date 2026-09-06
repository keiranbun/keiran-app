import { createClient } from "@libsql/client";

const ALLOWED_ORIGIN =
  process.env.NODE_ENV === "production" ? "https://keiran.app" : "*";

const client = createClient({
  url: process.env.DATABASE_TURSO_DATABASE_URL ?? "",
  authToken: process.env.DATABASE_TURSO_AUTH_TOKEN,
});

/**
 * GET: Fetches a list of movies that match the search from the database
 */
export const GET = async (request: Request): Promise<Response> => {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("movie") ?? "";
  const limit = Number(searchParams.get("limit") ?? 25);
  const offset = Number(searchParams.get("offset") ?? 0);

  const result = await client.execute({
    sql: "SELECT * FROM movies WHERE movie_title LIKE ? ORDER BY movie_title LIMIT ? OFFSET ?",
    args: [`%${search}%`, limit, offset],
  });

  const countResult = await client.execute({
    sql: "SELECT COUNT(*) FROM movies WHERE movie_title LIKE ?",
    args: [`%${search}%`],
  });

  const count = countResult.rows[0][0];

  return new Response(
    JSON.stringify({
      body: {
        ...result.toJSON(),
        count,
      },
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      },
    },
  );
};

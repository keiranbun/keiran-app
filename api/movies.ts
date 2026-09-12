/// <reference types="node" />
import { createClient } from "@libsql/client";

const ALLOWED_ORIGIN =
  process.env.NODE_ENV === "production" ? "https://keiran.app" : "*";

const client = createClient({
  url: process.env.DATABASE_TURSO_DATABASE_URL ?? "",
  authToken: process.env.DATABASE_TURSO_AUTH_TOKEN,
});

/**
 * GET: Fetches a list of movies from the database
 */
export const GET = async (request: Request): Promise<Response> => {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") ?? 25);
  const offset = Number(searchParams.get("offset") ?? 0);

  const result = await client.execute({
    sql: "SELECT * FROM movies ORDER BY movie_title LIMIT ? OFFSET ?",
    args: [limit, offset],
  });

  return new Response(JSON.stringify({ body: result }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    },
  });
};

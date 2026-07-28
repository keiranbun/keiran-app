import { createClient } from "@libsql/client";

const ALLOWED_ORIGIN =
  process.env.NODE_ENV === "production" ? "https://keiran.app" : "*";

const client = createClient({
  url: process.env.DATABASE_TURSO_DATABASE_URL ?? "",
  authToken: process.env.DATABASE_TURSO_AUTH_TOKEN,
});

/**
 * GET: The count of the number of movies in the DB
 */
export const GET = async () => {
  const result = await client.execute({
    sql: "SELECT COUNT (*) FROM movies",
  });

  const count = result.rows[0][0];

  return new Response(JSON.stringify({ body: count }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    },
  });
};

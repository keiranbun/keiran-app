export async function sha256(value: string): Promise<string> {
  const valueUTF8 = new TextEncoder().encode(value); // encode into UTF-8
  const hashBuffer = await crypto.subtle.digest("SHA-256", valueUTF8); // hash the value
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array

  // convert bytes to hex string
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

import type {
  LambdaFunctionURLEvent,
  LambdaFunctionURLResult,
} from "aws-lambda";

export async function handler(
  event: LambdaFunctionURLEvent,
): Promise<LambdaFunctionURLResult> {
  const userAgent = event.headers["user-agent"] || "Unknown User-Agent";
  const time = new Date().toISOString();
  const ipAddress = event.requestContext.http.sourceIp || "Unknown IP";
  const method = event.requestContext.http.method;
  const path = event.requestContext.http.path;

  console.log(`[INFO] Received ${method} ${path} request:`);
  console.log(`- Time: ${time}`);
  console.log(`- IP Address: ${ipAddress}`);
  console.log(`- User Agent: ${userAgent}`);

  if (event.requestContext.http.method !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  if (path === "/config") {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        colorMap: {
          en: "#4B8B9C", // Teal
          uk: "#6A5B45", // Brownish Gray
          es: "#8C715A", // Warm Taupe
          fr: "#A1A29E", // Cool Gray
          de: "#3A5A40", // Forest Green
          it: "#857B69", // Mushroom Beige
          ja: "#5F6A6A", // Charcoal Gray
          zh: "#C49B71", // Camel Tan
          hi: "#4C516D", // Deep Slate
          ar: "#726D5D", // Earthy Olive
        },
      }),
    };
  } else if (path === "/random") {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: Math.floor(Math.random() * 100) + 1,
      }),
    };
  }
  return { statusCode: 404, body: "Not Found" };
}

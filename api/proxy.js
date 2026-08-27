export default async function handler(req, res) {
  const target = "https://kog-api-gateway.vercel.app/api/wishlist/account" + req.url;

  const headers = {};
  headers["origin"] = "https://kingofgames02.github.io";
  headers["content-type"] = req.headers["content-type"] || "application/json";
  if (req.headers["authorization"]) headers["authorization"] = req.headers["authorization"];
  if (req.headers["server-url"]) headers["server-url"] = req.headers["server-url"];

  try {
    const fetchOpts = { method: req.method, headers };

    if (req.method !== "GET" && req.method !== "HEAD") {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      fetchOpts.body = Buffer.concat(chunks);
    }

    const apiRes = await fetch(target, fetchOpts);
    const data = await apiRes.arrayBuffer();

    res.status(apiRes.status);
    res.setHeader("content-type", apiRes.headers.get("content-type") || "application/json");
    res.setHeader("access-control-allow-origin", "*");
    res.end(Buffer.from(data));
  } catch (e) {
    res.status(502).json({ error: e.message, target });
  }
}

export const config = { api: { bodyParser: false } };

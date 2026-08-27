export default async function handler(req, res) {
  const slug = req.query.path || [];
  const target = "https://kog-api-gateway.vercel.app/api/wishlist/account/" + slug.join("/");

  const headers = {};
  headers["origin"] = "https://kingofgames02.github.io";
  if (req.headers["content-type"]) headers["content-type"] = req.headers["content-type"];
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
    res.status(502).json({ error: e.message });
  }
}

export const config = { api: { bodyParser: false } };

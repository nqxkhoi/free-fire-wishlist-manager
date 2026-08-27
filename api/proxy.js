export default async function handler(req, res) {
  const target = "https://kog-api-gateway.vercel.app/api/wishlist/account" + req.url;

  const headers = { ...req.headers };
  headers["origin"] = "https://kingofgames02.github.io";
  delete headers["host"];
  delete headers["x-forwarded-for"];
  delete headers["x-forwarded-host"];
  delete headers["x-real-ip"];

  try {
    const fetchOpts = {
      method: req.method,
      headers,
    };

    if (req.method !== "GET" && req.method !== "HEAD") {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      fetchOpts.body = Buffer.concat(chunks);
    }

    const apiRes = await fetch(target, fetchOpts);
    const data = await apiRes.arrayBuffer();

    res.status(apiRes.status);
    apiRes.headers.forEach((v, k) => {
      if (k !== "content-encoding" && k !== "transfer-encoding") res.setHeader(k, v);
    });
    res.setHeader("access-control-allow-origin", "*");
    res.end(Buffer.from(data));
  } catch (e) {
    res.status(502).json({ error: "Proxy failed: " + e.message });
  }
}

export const config = { api: { bodyParser: false } };

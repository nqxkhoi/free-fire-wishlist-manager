const API = "https://kog-api-gateway.vercel.app/api/wishlist/account";

async function proxy(req, res, subPath) {
  const target = API + "/" + subPath;
  const h = { origin: "https://kingofgames02.github.io" };
  if (req.headers["content-type"]) h["content-type"] = req.headers["content-type"];
  if (req.headers["authorization"]) h["authorization"] = req.headers["authorization"];
  if (req.headers["server-url"]) h["server-url"] = req.headers["server-url"];
  const opts = { method: req.method, headers: h };
  if (req.method !== "GET" && req.method !== "HEAD") {
    const c = []; for await (const x of req) c.push(x);
    opts.body = Buffer.concat(c);
  }
  const r = await fetch(target, opts);
  const d = await r.arrayBuffer();
  res.status(r.status);
  res.setHeader("content-type", r.headers.get("content-type") || "application/json");
  res.setHeader("access-control-allow-origin", "*");
  res.end(Buffer.from(d));
}

export default (req, res) => proxy(req, res, "wishlist/update");
export const config = { api: { bodyParser: false } };

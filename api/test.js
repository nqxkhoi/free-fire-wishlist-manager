export default async function handler(req, res) {
  try {
    const r = await fetch("https://kog-api-gateway.vercel.app/", {
      headers: { "origin": "https://kingofgames02.github.io" }
    });
    const data = await r.json();
    res.json({ proxy: "ok", api: data });
  } catch (e) {
    res.json({ proxy: "fail", error: e.message });
  }
}

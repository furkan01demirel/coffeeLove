import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json({ limit: "1mb" }));

const allowList = [
  "http://localhost:5173", // Vite dev
  process.env.FRONTEND_ORIGIN, // Netlify domain'i buraya env olarak koyacağız
].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      // origin yoksa (postman vs) izin ver
      if (!origin) return cb(null, true);
      if (allowList.includes(origin)) return cb(null, true);
      return cb(new Error("CORS blocked: " + origin));
    },
    methods: ["GET", "POST"],
  }),
);

app.get("/health", (req, res) => res.json({ ok: true }));

app.post("/api/generate-icon", async (req, res) => {
  try {
    const { coffeeType, beanType, machineType, brewType, userPrompt } =
      req.body || {};
    if (!coffeeType || !beanType || !machineType || !brewType) {
      return res.status(400).json({ error: "Eksik seçim var." });
    }
    const extra = (userPrompt || "").trim();
    const basePrompt = `
      Cinematic coffee photography, cozy coffee shop style.
      Coffee type: ${coffeeType}.
      Bean type: ${beanType}.
      Machine: ${machineType}.
      Brewing method: ${brewType}.
      realistic, high quality, detailed.
      No text, no watermark.
      `.trim();

    const _userPrompt = `
      ${extra} style.
      Coffee type: ${coffeeType}.
      Bean type: ${beanType}.
      Machine: ${machineType}.
      Brewing method: ${brewType}.
      realistic, high quality, detailed.
      No text, no watermark.
      `.trim();
    const prompt = extra ? _userPrompt : basePrompt;

    const pngBuffer = await generateWithHuggingFace(prompt);

    const dataUrl = `data:image/png;base64,${pngBuffer.toString("base64")}`;
    return res.json({ dataUrl });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Image generation failed." });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`API running on :${PORT}`));

async function generateWithHuggingFace(prompt) {
  const HF_TOKEN = process.env.HF_TOKEN;
  if (!HF_TOKEN) throw new Error("HF_TOKEN env yok.");

  const MODEL =
    process.env.HF_MODEL || "stabilityai/stable-diffusion-xl-base-1.0";
  const url = `https://router.huggingface.co/hf-inference/models/${MODEL}`;

  const r = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "image/png",
    },
    body: JSON.stringify({
      inputs: prompt,
      parameters: {
        width: 768,
        height: 768,
        num_inference_steps: 25,
        guidance_scale: 7,
      },
      options: { wait_for_model: true },
    }),
  });

  if (!r.ok) throw new Error(`HF ${r.status}: ${await r.text()}`);

  const arr = await r.arrayBuffer();
  return Buffer.from(arr);
}

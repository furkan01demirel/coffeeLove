import { useMemo, useState } from "react";
import "../styles/App.css";

const OPTIONS = {
  coffeeType: ["Latte", "Espresso", "Americano", "Cappuccino", "Mocha"],
  beanType: ["Arabica", "Robusta", "Blend"],
  machineType: ["AeroPress", "Espresso Machine", "French Press", "Moka Pot", "Cezve"],
  brewType: ["Pour-over", "Immersion", "Pressure", "Turkish", "Cold Brew"],
};

export default function Builder() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    coffeeType: "",
    beanType: "",
    machineType: "",
    brewType: "",
    userPrompt:"",
  });

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [err, setErr] = useState("");

  const steps = useMemo(
    () => [
      { key: "coffeeType", title: "Kahve türünü seç", icon:"🥤" },
      { key: "beanType", title: "Çekirdek türünü seç" , icon:"🫘"},
      { key: "machineType", title: "Makine türünü seç", icon:"⚙️"},
      { key: "brewType", title: "Demleme türünü seç", icon:"🫖"},
    ],
    []
  );

  const current = steps[step];
  const isLast = step === steps.length - 1;

  function pick(value) {
    setForm((p) => ({ ...p, [current.key]: value }));
    setErr("");
  }

  function canNext() {
    return form[current.key]?.length > 0;
  }

  async function generate() {
    setLoading(true);
    setErr("");
    setImageUrl("");

    try {
      const res = await fetch("/api/generate-icon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const data = await res.json();
      setImageUrl(data.dataUrl || "");
    } catch (e) {
      setErr(e.message || "Hata oluştu");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="builder-page">
      <div className="builder-container">

        <h2 className="builder-title">☕ Resim Oluşturucu</h2>

        <div className="builder-grid">
        
          <div className="builder-card">
            <div className="builder-header">
              <strong>{current.icon}{current.title}</strong>
              <span>Adım {step + 1} / {steps.length}</span>
            </div>

            <div className="options">
              {OPTIONS[current.key].map((x) => (
                <button
                  key={x}
                  className={`pill ${form[current.key] === x ? "active" : ""}`}
                  onClick={() => pick(x)}
                >
                  {x}
                </button>
              ))}
            </div>

            <div className="actions">
              <button
                className="btn"
                disabled={step === 0 || loading}
                onClick={() => setStep((s) => s - 1)}
              >
                Geri
              </button>

              {!isLast ? (
                <button
                  className="btn primary"
                  disabled={!canNext()}
                  onClick={() => setStep((s) => s + 1)}
                >
                  İleri
                </button>
              ) : (
                <button
                  className="btn primary"
                  disabled={loading}
                  onClick={generate}
                >
                  {loading ? "Oluşturuluyor..." : "Görsel oluştur"}
                </button>
              )}
            </div>

            <div className="selection-box">
              <strong>Seçimler</strong>
              <ul>
                <li> 🥤 Kahve: {form.coffeeType || "-"}</li>
                <li> 🫘 Çekirdek: {form.beanType || "-"}</li>
                <li> ⚙️ Makine: {form.machineType || "-"}</li>
                <li> 🫖 Demleme: {form.brewType || "-"}</li>
              </ul>
            </div>

            {err && <p className="error">{err}</p>}
            
            <div className="prompt-box">
              <label className="prompt-label">Resim oluşturucu için yorumuzunu ekleyebilirsiniz (opsiyonel)</label>
              <input
              className="prompt-input"
              placeholder="Örn: hafif ışıklı, mavi temalı, minimal..."
              value={form.userPrompt}
              onChange={(e)=>setForm((p)=>({...p,userPrompt:e.target.value}))}
              maxLength={140}/>
            </div>
            <div className="prompt-hint">{form.userPrompt.length}/140</div>
          </div>

        
          <div className="builder-card preview-card">
            <h4>Önizleme</h4>

            {imageUrl ? (
                <div className="preview-content">
                    <img src={imageUrl} alt="coffee" className="preview-img" />

                    <a
                    href={imageUrl}
                    download="coffee-image.png"
                    className="download"
                    >
                    İndir
                    </a>
                </div>
                ) : (
                <p className="placeholder">
                    Henüz görsel yok. Seçimleri tamamla.
                </p>
                )}
          </div>

        </div>
      </div>
    </div>
  );
}
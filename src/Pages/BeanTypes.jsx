const BEANS = [
  {
    name: "Arabica",
    desc: "Daha aromatik, daha yumuşak. Genelde daha yüksek kalite segmentinde.",
    notes: ["Aromatik", "Yumuşak içim", "Daha az kafein"],
    vibe: "🌿",
  },
  {
    name: "Robusta",
    desc: "Daha sert, daha yoğun. Kafein oranı genelde daha yüksek.",
    notes: ["Yoğun", "Daha yüksek kafein", "Krema (espresso) iyi"],
    vibe: "⚡",
  },
  {
    name: "Liberica",
    desc: "Nadiren bulunur. Meyvemsi/odunsu notalarla farklı bir profil.",
    notes: ["Nadir", "Farklı aroma", "Deneysel"],
    vibe: "🌲",
  },
  {
    name: "Excelsa",
    desc: "Tartışmalı sınıflandırma ama genelde ekşi/meyvemsi notalarıyla bilinir.",
    notes: ["Meyvemsi", "Ekşimsi", "Karışımlarda iyi"],
    vibe: "🍇",
  },
  {
  name: "Bourbon",
  desc: "Arabica kökenli, daha tatlı ve meyvemsi notalara sahip kaliteli bir çekirdek varyetesidir.",
  notes: ["Meyvemsi", "Tatlı profil", "Yüksek kalite"],
  vibe: "🍒",
  },
  {
  name: "Typica",
  desc: "Arabica’nın en eski ve klasik varyetelerinden biridir. Dengeli, temiz ve tatlı aromalarıyla bilinir.",
  notes: ["Klasik Arabica", "Dengeli tat", "Tatlı aromalar"],
  vibe: "🌱",
  }
];

export default function BeanTypes() {
  return(
    <div>
      <section className="benefitsHero">
        <img
          className="benefitsHero__img"
          src="src/assets/beantypes.avif"
          alt="Kahve fincanı ve çekirdekler"
        />
        <div className="benefitsHero__overlay">
          <div className="benefitsHero__title">Kahve Çekirdeği Türleri</div>
          <div className="benefitsHero__sub">Çekirdek tipi tadı, kokuyu ve kafein hissini ciddi etkiler.</div>
        </div>
      </section>

      <div className="grid">
        {BEANS.map((b) =>(
          <article key={b.name} className="itemcard">
            <div className="itemcard__top">
              <span className="badge">{b.vibe}</span>
            </div>
            <h2>{b.name}</h2>
            <p className="muted">{b.desc}</p>

            <ul className="bullests">
              {b.notes.map((n)=>(
                <li key={n}>{n}</li>
              ))}
            </ul>
          </article>

        ))}
      </div>
    </div>
    
  )
}
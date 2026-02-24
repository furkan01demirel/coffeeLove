const COFFE_TYPES = [
  {
    name: "Espresso",
    desc: "Kısa, yoğun ve aromatik. Birçok içeceğin temeli.",
    method: "İnce öğütülmüş kahve espresso makinesinde yüksek basınçla 25-30 saniye içinde hazırlanır.",
    tags: ["Yoğun", "Kısa"],
    level: "Yüksek"
  },

  {
    name: "Americano",
    desc: "Espresso + sıcak su. Daha hafif içim.",
    method: "Önce espresso hazırlanır, ardından üzerine sıcak su eklenerek daha hafif bir içim elde edilir.",
    tags: ["Hafif", "Uzun"],
    level: "Orta"
  },

  {
    name: "Latte",
    desc: "Espresso + süt. Yumuşak ve kremamsı.",
    method: "Espresso üzerine buharla ısıtılmış süt eklenir ve ince bir süt köpüğüyle servis edilir.",
    tags: ["Sütlü", "Yumuşak"],
    level: "Orta"
  },

  {
    name: "Cappuccino",
    desc: "Espresso + süt + köpük. Dengeli ve klasik.",
    method: "Espressoya eşit oranlarda sıcak süt ve yoğun süt köpüğü eklenerek hazırlanır.",
    tags: ["Köpüklü", "Dengeli"],
    level: "Orta"
  },

  {
    name: "Mocha",
    desc: "Latte + çikolata. Tatlı sevenlere.",
    method: "Espressoya çikolata sosu veya kakao eklenir, ardından süt ve süt köpüğü ile tamamlanır.",
    tags: ["Tatlı", "Sütlü"],
    level: "Orta"
  },

  {
    name: "Flat White",
    desc: "Latte’ye benzer ama daha yoğun kahve hissi.",
    method: "Çift shot espresso üzerine ince mikro köpüklü süt eklenerek hazırlanır.",
    tags: ["Sütlü", "Yoğun"],
    level: "Orta-Yüksek"
  },

  {
    name: "Macchiato",
    desc: "Espresso üzerine az süt köpüğü. Net kahve tadı.",
    method: "Hazırlanan espresso üzerine çok az süt köpüğü eklenerek servis edilir.",
    tags: ["Kısa", "Yoğun"],
    level: "Yüksek"
  },

  {
    name: "Cold Brew",
    desc: "Soğuk demleme. Daha yumuşak asidite.",
    method: "Kalın öğütülmüş kahve soğuk suda 12-18 saat bekletilir, ardından filtrelenerek içilir.",
    tags: ["Soğuk", "Yumuşak"],
    level: "Orta"
  },

  {
    name: "Türk Kahvesi",
    desc: "Çok ince öğütülmüş kahveyle cezvede pişirilir. Köpüklü, yoğun ve geleneksel bir içim sunar.",
    method: "Cezveye su, kahve ve isteğe bağlı şeker eklenir; kısık ateşte köpük oluşana kadar pişirilir.",
    tags: ["Geleneksel", "Yoğun", "Cezve"],
    level: "Yüksek"
  }
];
export default function CoffeeTypes() {
  return (
    <div>
      <section className="benefitsHero">
        <img
          className="benefitsHero__img"
          src="src/assets/coffeeTypes.avif"
          alt="Kahve fincanı ve çekirdekler"
        />
        <div className="benefitsHero__overlay">
          <div className="benefitsHero__title">Kahve Türleri</div>
        </div>
      </section>
      <div className="grid">
        {
          COFFE_TYPES.map((c)=>(
            <article key={c.name} className="itemcard">
              <div className="itemcard__top">
                <span className="badge">☕ {c.level}</span>
              </div>
              <h2>{c.name}</h2>
              <p className="method">{c.method}</p>
              <p className="muted">{c.desc}</p>

              <div className="tags">
                {c.tags.map((t)=>(
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          ))
        }
      </div>
    </div>
  );
}
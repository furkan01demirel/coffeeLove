import brewing2 from "../assets/brewing2.avif";

export default function Brewing() {
  return (
    <div>
      <div className="pagehead">
        <h1>Kahve Demleme Yöntemleri</h1>
        <p>
          Aynı çekirdek, farklı demleme yöntemiyle bambaşka bir aroma verebilir. İşte en popüler yöntemler.
        </p>
      </div>

      <div className="brewHero">
        <img className="brewHero__img" src={brewing2} alt="Kahve demleme yöntemi" />
        <div className="brewHero__overlay">
          <div className="brewHero__title">Demleme bir ritüel</div>
          <div className="brewHero__sub">Aroma, öğütüm, su ve zaman: hepsi önemli.</div>
        </div>
      </div>

      <section className="brewBlocks">
        <article className="brewBlock">
          <h2>☕ Espresso Makinesi</h2>
          <p>
            Basınçla kısa sürede yoğun bir kahve elde edilir. Latte, cappuccino gibi sütlü içeceklerin de
            temelidir.
          </p>
          <div className="brewMeta">
            <span className="tag">Öğütüm: İnce</span>
            <span className="tag">Süre: 25–30 sn</span>
            <span className="tag">Tat: Yoğun</span>
          </div>
        </article>

        <article className="brewBlock">
          <h2>💧 V60 (Pour Over)</h2>
          <p>
            Su kontrollü şekilde dökülür; temiz ve aromatik bir fincan verir. Öğütüm ve döküş tekniği
            sonucu ciddi etkiler.
          </p>
          <div className="brewMeta">
            <span className="tag">Öğütüm: Orta</span>
            <span className="tag">Süre: 2:30–3:30</span>
            <span className="tag">Tat: Temiz</span>
          </div>
        </article>

        <article className="brewBlock">
          <h2>🫖 French Press</h2>
          <p>
            Demleme sonrası filtre bastırılır. Gövdeli ve daha “yağlı” bir içim verir; pratik bir yöntemdir.
          </p>
          <div className="brewMeta">
            <span className="tag">Öğütüm: Kalın</span>
            <span className="tag">Süre: 4 dk</span>
            <span className="tag">Tat: Gövdeli</span>
          </div>
        </article>

        <article className="brewBlock">
          <h2>🧊 Cold Brew</h2>
          <p>
            Soğuk suda uzun süre bekletilerek hazırlanır. Daha yumuşak asidite ve serin bir içim sunar.
          </p>
          <div className="brewMeta">
            <span className="tag">Öğütüm: Kalın</span>
            <span className="tag">Süre: 12–18 saat</span>
            <span className="tag">Tat: Yumuşak</span>
          </div>
        </article>

        <article className="brewBlock">
          <h2>🧪 AeroPress</h2>
          <p>
            Basınç + filtre ile hızlı ve temiz bir kahve verir. Deney yapmayı sevenler için harika.
          </p>
          <div className="brewMeta">
            <span className="tag">Öğütüm: Orta–İnce</span>
            <span className="tag">Süre: 1–2 dk</span>
            <span className="tag">Tat: Dengeli</span>
          </div>
        </article>

        <article className="brewBlock">
          <h2>🔥 Türk Kahvesi (Cezve)</h2>
          <p>
            Çok ince öğütümle cezvede pişirilir. Köpük, pişirme ve sabır işi: geleneksel bir ritüel.
          </p>
          <div className="brewMeta">
            <span className="tag">Öğütüm: Çok ince</span>
            <span className="tag">Süre: 2–4 dk</span>
            <span className="tag">Tat: Yoğun</span>
          </div>
        </article>

        <article className="brewBlock brewNote">
          <h2>Not</h2>
          <p className="muted">
            “En iyi yöntem” yok; damak zevki var. Öğütüm kalınlığı, su sıcaklığı (genelde 90–96°C) ve
            demleme süresi sonucu en çok etkileyen şeyler.
          </p>
        </article>
      </section>
    </div>
  );
}
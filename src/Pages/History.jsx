export default function History() {
  return (
    <div>
      <div className="pagehead">
        <h1>Kahvenin Tarihçesi</h1>
        <p>
          Kahvenin yolculuğu Etiyopya’dan başlayıp tüm dünyaya yayılan uzun bir hikâye.
        </p>
      </div>

      <div className="benefitsHero">
        <img
          src="src/assets/history.avif"
          alt="Kahve tarihçesi görseli"
          className="benefitsHero__img"
        />
        <div className="benefitsHero__overlay">
          <h2  className="benefitsHero__title">Kahvenin Dünya Yolculuğu </h2>
          <p className="benefitsHero__sub">Yüzyıllardır süren bir aroma hikayesi</p>
        </div>
      </div>

      <section className="historyBlocks">

        <article className="historyBlock">
          <h2>☕ 9. Yüzyıl — Etiyopya</h2>
          <p>
            Rivayete göre kahve, Etiyopya’da bir çobanın keçilerinin kahve çekirdeklerini
            yedikten sonra daha enerjik olduğunu fark etmesiyle keşfedildi.
          </p>
        </article>

        <article className="historyBlock">
          <h2>🌍 15. Yüzyıl — Yemen ve Arap Dünyası</h2>
          <p>
            Kahve ilk kez Yemen’de yetiştirilmeye başlandı. Sufi dervişler gece ibadetlerinde
            uyanık kalmak için kahve tüketiyordu.
          </p>
        </article>

        <article className="historyBlock">
          <h2>🏛️ 16. Yüzyıl — Osmanlı Dönemi</h2>
          <p>
            Kahve İstanbul’a geldi ve kahvehaneler sosyal yaşamın merkezi oldu.
            Türk kahvesi kültürü bu dönemde gelişti.
          </p>
        </article>

        <article className="historyBlock">
          <h2>☕ 17. Yüzyıl — Avrupa’ya Yayılış</h2>
          <p>
            Kahve Avrupa’ya ulaştıktan sonra kahvehaneler entelektüellerin buluşma noktası haline geldi.
          </p>
        </article>

        <article className="historyBlock">
          <h2>🌎 Günümüz</h2>
          <p>
            Bugün kahve dünya çapında en çok tüketilen içeceklerden biri. Espresso bazlı içeceklerden
            specialty coffee akımına kadar birçok farklı kültür oluştu.
          </p>
        </article>

      </section>
    </div>
  );
}
export default function Benefits() {
  return (
    <div>
      <div className="pagehead">
        <h1>Kahvenin Faydaları</h1>
        <p>
          Kahve benim için sadece içecek değil; odak, ritüel ve keyif.
        </p>
      </div>

      <div className="benefitsHero">
        <img
          className="benefitsHero__img"
          src="src/assets/benefits1.avif"
          alt="Kahve fincanı ve çekirdekler"
        />
        <div className="benefitsHero__overlay">
          <div className="benefitsHero__title">Günün en iyi molası</div>
          <div className="benefitsHero__sub">Dengeli tüketimle daha keyifli bir rutin.</div>
        </div>
      </div>

      <section className="blocks">
        <article className="block">
          <h2>1) 🧠 Odak ve Zindelik</h2>
          <p>
            Kafein, birçok kişide kısa süreli odaklanmayı ve uyanıklığı artırır. Özellikle sabah rutininin
            parçası olduğunda “başlangıç sinyali” gibi çalışır.
          </p>
        </article>

        <article className="block">
          <h2>2) ⚡ Performans ve Enerji Hissi</h2>
          <p>
            Antrenman öncesi kahve tercih eden çok kişi var. Bazılarında algılanan eforu azaltıp enerji
            hissini yükseltebilir.
          </p>
        </article>

        <article className="block">
          <h2>3) 🌿 Antioksidanlar</h2>
          <p>
            Kahve, beslenmede antioksidan kaynağı olarak da anılır. Elbette tek başına “mucize” değil ama
            dengeli beslenmeye eşlik edebilir.
          </p>
        </article>

        <article className="block">
          <h2>4) 🙂 Sosyal ve Ruh Hali</h2>
          <p>
            Kahve çoğu zaman sohbeti başlatır: bir arkadaş buluşması, iş arasında kısa mola, “bir kahve
            içelim mi?” anı… Bu ritüel bile iyi hissettirebilir.
          </p>
        </article>

        <article className="block">
          <h2> ⚠️ Not</h2>
          <p className="muted">
            Herkesin kafein toleransı farklıdır. Fazlası çarpıntı/uykusuzluk yapabilir. Bu sayfa “kısa ve
            keyif amaçlı” bir özet: tıbbi öneri değildir.
          </p>
        </article>
      </section>
    </div>
  );
}

export default function CoffeeEquipment() {
  return (
    <div>
      <div className="pagehead">
        <h1>Kahve Ekipmanları</h1>
        <p>
          İyi bir kahve deneyimi sadece çekirdekle değil, doğru ekipmanla başlar.
        </p>
      </div>

     
      <div className="equipmentHero">
        <img
          src="src/assets/equipment.avif"
          alt="Kahve ekipmanları"
          className="equipmentHero__img"
        />
        <div className="equipmentHero__overlay">
          <h2>Doğru ekipman, daha iyi kahve</h2>
          <p>Demleme deneyimini değiştiren araçlar</p>
        </div>
      </div>

     
      <section className="equipmentGrid">

        <article className="equipmentCard">
          <h2>☕ V60 Dripper</h2>
          <p>
            Pour-over demleme için kullanılır. Temiz ve aromatik kahve verir.
          </p>
        </article>

        <article className="equipmentCard">
          <h2>🫖 French Press</h2>
          <p>
            Basit ve hızlı kullanım. Gövdeli kahve isteyenler için ideal.
          </p>
        </article>

        <article className="equipmentCard">
          <h2>⚙️ Kahve Değirmeni</h2>
          <p>
            Taze öğütüm aroma için kritik. Öğütüm kalınlığı demlemeyi direkt etkiler.
          </p>
        </article>

        <article className="equipmentCard">
          <h2>🔥 Espresso Makinesi</h2>
          <p>
            Basınçlı demleme ile yoğun espresso üretir. Latte ve cappuccino’nun temeli.
          </p>
        </article>

      </section>
    </div>
  )
}

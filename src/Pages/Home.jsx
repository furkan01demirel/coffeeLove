import CardLink from "../components/CardLink.jsx";
import benefits from "../assets/benefits.avif";
export default function Home() {
  return (
    <>
      <section className="benefitsHero">
        <img
          className="benefitsHero__img"
          src={benefits}
          alt="Kahve fincanı ve çekirdekler"
        />
        <div className="benefitsHero__overlay">
          <div className="benefitsHero__title">Kahve için / Kahve, için</div>
          <div className="benefitsHero__sub">Keyifli anlar için bi cup kahve</div>
        </div>
      </section>

      <section className="cards" aria-label="Kahve kartları">
        <CardLink
          to="/coffee-types"
          pill="Kahve"
          title="Kahve Türleri"
          desc="Espresso, Latte, Americano… kısa kısa özetlerle."
          icon="🥤"
        />
        <CardLink
          to="/bean-types"
          pill="Çekirdek"
          title="Çekirdek Türleri"
          desc="Arabica, Robusta ve temel farkları."
          icon="🫘"
        />
        <CardLink
          to="/brewing"
          pill="Demleme"
          title="Demleme Türleri"
          desc="Espresso Makinesi, V60, French Press..."
          icon="🫖"
        />
         <CardLink
          to="/equipment"
          pill="Ekipman"
          title="Ekipman Türleri"
          desc="V60, French Press, değirmen ve temel ekipmanlar."
          icon="⚙️"
        />
      </section>
    </>
  );
}
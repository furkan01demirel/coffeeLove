import CardLink from "../components/CardLink.jsx";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Kahve İçin - Kahve,İçin</h1>
        <p>
          buraya daha güzel bir sayfa açıklaması yazmak lazım
          Aşağıdaki kartlardan kahve türlerine veya çekirdek türlerine gidebilirsin.
        </p>
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
          title="Kahve Çekirdek Türleri"
          desc="Arabica, Robusta ve temel farkları."
          icon="🫘"
        />
      </section>
    </>
  );
}
import "./Start.css";
import top from "../../assets/top.png";

function Start() {
  return (
    <section data-id="start" className="start">
      <img data-id="logo" className="logo start__logo" src={top} alt="logo" />
      <article className="start__title--container">
        <h1 data-id="start__title" className="start__title">
          Du har inga meddelanden att visa.
        </h1>
      </article>
    </section>
  );
}
export default Start;

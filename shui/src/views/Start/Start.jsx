import "./Start.css";
import top from "../../assets/top.svg";
import pen from "../../assets/pen.svg";
import footer from "../../assets/footer.svg";
function Start() {
  return (
    <section data-id="start" className="start">
      <article className="start__container">
        <img data-id="logo" className="logo start__logo" src={top} alt="logo" />
        <article className="start__title--container">
          <h1 data-id="start__title" className="start__title">
            Du har inga meddelanden att visa.
          </h1>
        </article>
        <footer data-id="footer" className="start__footer">
          <img src={pen} alt="" className="footer footer__pen" />
          <img src={footer} alt="" className="footer__background" />
        </footer>
      </article>
    </section>
  );
}
export default Start;

import "./Flow.css";
import pen from "../../assets/pen.png";
import top from "../../assets/top.png";

function Flow() {
  return (
    <section data-id="flow" className="flow">
      <article className="flow__container">
        <img src={top} alt="" className="logo flow__logo" />
      </article>
      <footer className="flow__footer">
        <img data-id="flow__pen" src={pen} className="flow__pen" />
      </footer>
    </section>
  );
}

export default Flow;

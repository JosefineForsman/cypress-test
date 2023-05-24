import "./Flow.css";
import { useLocation } from "react-router-dom";
import pen from "../../assets/pen.png";
import top from "../../assets/top.png";

function Flow({ newMessage }) {
  const navigationState = useLocation();
  return (
    <section data-id="flow" className="flow">
      <img src={top} alt="" className="logo flow__logo" />
      <article>
        <aside data-id="flow__container" className="flow__container">
          <input
            data-it="flow__date"
            className="flow__date"
            type="text"
            placeholder="MM/DD//YY"
          />
          <p data-id="flow__text" className="flow__text">
            {" "}
            {navigationState.state.newMessage.text}
          </p>
          <p data-id="flow__username" className="flow__username">
            <b>-{navigationState.state.newMessage.username}</b>
          </p>
        </aside>
      </article>
      <footer className="flow__footer">
        <img data-id="flow__pen" src={pen} className="flow__pen" />
      </footer>
    </section>
  );
}

export default Flow;

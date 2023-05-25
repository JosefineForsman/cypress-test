import "./Landing.css";
import footer from "../../assets/footer.svg";
import top from "../../assets/top.svg";

import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/start");
  }

  return (
    <section>
      <article data-id="landing" className="landing">
        <img data-id="logo" className="logo landing__logo" src={top} alt="" />
        <article className="landing__btn--container">
          <button
            data-id="landing__btn"
            className="landing__btn"
            onClick={handleClick}
          >
            Skriv en kommentar
          </button>
        </article>
        <img src={footer} alt="" />
      </article>
    </section>
  );
}

export default Landing;

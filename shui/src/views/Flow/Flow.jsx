import "./Flow.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import pen from "../../assets/pen.png";
import top from "../../assets/top.png";
import vector from "../../assets/vector.svg";

function Flow() {
  const date = new Date();
  const currentDate = date.toLocaleDateString();
  const currentTime = date.toLocaleTimeString();
  // const time = date.toLocalTimeString();
  const navigate = useNavigate();
  const messages = useSelector((state) => {
    return state.messages;
  });
  console.log(messages);

  const eachMessageComponent = messages.map((message, index) => {
    return (
      <aside key={index} data-id="flow__container" className="flow__container">
        <p data-id="flow__date" className="flow__date">
          {currentDate}&nbsp;&nbsp;&nbsp;{currentTime}
        </p>
        <p data-id="flow__text" className="flow__text">
          {message.text}
        </p>
        <p data-id="flow__username" className="flow__username">
          <b>-{message.username}</b>
        </p>
        <figure>
          <img src={vector} alt="" className="flow__vector" />
        </figure>
      </aside>
    );
  });

  function navigateToNewMessage() {
    navigate("/message");
  }
  return (
    <section data-id="flow" className="flow">
      <img src={top} alt="" className="logo flow__logo" />
      <article className="flow__container--text">
        {eachMessageComponent}
      </article>
      <footer className="flow__footer">
        <img
          data-id="flow__pen"
          src={pen}
          className="flow__pen"
          onClick={navigateToNewMessage}
        />
      </footer>
    </section>
  );
}

export default Flow;

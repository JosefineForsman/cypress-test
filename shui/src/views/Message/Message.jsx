import "./Message.css";
import top from "../../assets/top.svg";
// import footer from "../../assets/footer.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMessage } from "../../action/action";
import vector from "../../assets/vector.svg";

function Message() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [username, setUsername] = useState();

  function handleClick() {
    const newMessage = {
      text: text,
      username: username,
    };
    dispatch(addMessage(newMessage));
    navigate("/flow");
  }

  return (
    <section>
      <article data-id="message" className="message">
        <img data-id="logo" className="logo message__logo" onClick={ () => navigate('/')} src={top} alt="" />
        <input
          data-id="message__text"
          className="message__text"
          placeholder="  Skriv din text här..."
          onChange={(e) => setText(e.target.value)}
        />
        <figure className="message__figure">
          <img src={vector} alt="" className="message__vector" />
        </figure>
        <input
          data-id="message__input"
          className="message__input"
          type="text"
          placeholder=" Användarnamn"
          onChange={(e) => setUsername(e.target.value)}
        />
        <article className="message__btn--container">
          <button
            data-id="message__btn"
            className="message__btn"
            onClick={handleClick}
          >
            Publicera
          </button>
        </article>
        {/* <img src={footer} alt="" /> */}
      </article>
    </section>
  );
}

export default Message;

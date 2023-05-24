import "./Message.css";
import top from '../../assets/top.png';
import footer from '../../assets/footer.svg';

function Message() {
  return (
    <section >
    <article data-id='message' className="message">
     <img data-id='logo' className="logo message__logo" src= { top } alt="" />
      <textarea data-id='message__text' className="message__text" cols="45" rows="20" placeholder="Vi är grymma!"></textarea>
    <input data-id='message__input' className="message__input" type="text" placeholder=" Användarnamn" />
      <article className="message__btn--container">
        <button data-id='message__btn' className="message__btn">Publicera</button>
      </article>
      <img src= { footer } alt="" />
   </article>
</section>
  );
}
export default Message;

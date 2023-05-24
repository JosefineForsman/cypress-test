import "./Landing.css";
import footer from '../../assets/footer.svg'
import top from '../../assets/top.png'


function Landing() {
  return (
    <section >
        <article data-id='landing' className="landing">
         <img data-id='logo' className="logo landing__logo" src= { top } alt="" />
          <article className="landing__btn--container">
            <button data-id='landing__btn' className="landing__btn">Skriv en kommentar</button>
          </article>
          <img src= { footer } alt="" />
       </article>
    </section>
  );
}

export default Landing;

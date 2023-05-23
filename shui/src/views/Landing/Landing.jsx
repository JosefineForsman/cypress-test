import "./Landing.css";
import footer from '../../assets/footer.svg'


function Landing() {
  return (
    <section >
      {/* <img data-id='logo' className="logo landing__logo" src= { } alt="" /> */}
        <article data-id='landing' className="landing">
          <figure className="landing__logo"></figure>
          <article className="landing__btn--container">
            <button data-id='landing__btn' className="landing__btn">Skriv en kommentar</button>
          </article>
          <img src= { footer } alt="" />
       </article>
      
   
    </section>
  );
}

export default Landing;

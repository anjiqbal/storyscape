import NavBar from "../navBar/navBar";
import weDaBest from "./djk.png";
import './aboutUs.css'
export default function aboutUs() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="wedabest">
      <h1>We gonna win more. We gonna live more. We the best.</h1>
      <img src={weDaBest} />
      </div>
    </>
  );
}

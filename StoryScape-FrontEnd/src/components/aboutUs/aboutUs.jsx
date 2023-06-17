import NavBar from "../navBar/navBar";
import weDaBest from "./djk.png";

export default function aboutUs() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>We gonna win more. We gonna live more. We the best.</h1>
      <img src={weDaBest} />
    </>
  );
}

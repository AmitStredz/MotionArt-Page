import Fluid from "./components/fluid";
import Header from "./components/header";
import Body1 from "./components/body1";
import Body2 from "./components/body2";
import Body3 from "./components/body3";
import Body4 from "./components/body4";
import Body5 from "./components/body5";
import Body6 from "./components/body6";
import Body7 from "./components/body7";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="transition-all ">
      <div className="relative">
        <Fluid></Fluid>
      </div>
      <div className="relative mx-6 2xl:mx-36">
        <Header></Header>
        <Body1></Body1>
        <Body2></Body2>
        <Body3></Body3>
        <Body4></Body4>
        <Body5></Body5>
        <Body6></Body6>
        <Body7></Body7>
      </div>
      <div className="relative">
        <Footer></Footer>
      </div>
    </div>
  );
}

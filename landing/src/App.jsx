import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Landingpage from "./component/Landingpage";
import Price from "./component/Price";
import Footer from "./component/footer";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="container mx-auto overflow-x-hidden">
        <Landingpage />
        <div className="lg:pt-[150px] pt-3">
          <Price />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

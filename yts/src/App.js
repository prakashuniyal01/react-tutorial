import React from "react";
import { Header } from "./components/Header";
import {Descover} from "./components/Descover";
import Featur from "./components/Featur";
import Services from "./components/Services";
import Achivements from "./components/Achivements"
function App() {
  return (
    <>
    <Header/>
    <Descover/>
    <Featur/>
    <Services/>
    <Achivements/>
    </>
  );
}

export default App;

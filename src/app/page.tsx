// import Image from "next/image"
//importando componente title utilizando crtl + .

import { Quadrado } from "./components/quadrado";
import { Titulo } from "./components/titulo";


export default function Home() {
  return (
    <div>
      {/* <h1>Mateus Fernando</h1> */}
      <Titulo text="Olá" name="Mateus"/>
      <Quadrado/>
    </div>
  );
}



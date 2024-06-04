import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/componets/Header/header";
import Inicio from "@/componets/Inicio/Inicio";
import Info from "@/componets/Infos/Info";
import Ongs from "@/componets/Ongs/Ongs";
import Rodape from "@/componets/Rodape/Rodape";
import Oceanos from "@/componets/Oceanos/oceanos";

export default function Home() {
  return (
    <>
      <Header />
      <Inicio />
      <Info />
      <Oceanos />
      <Ongs />
      <Rodape />
    </>
  );
}

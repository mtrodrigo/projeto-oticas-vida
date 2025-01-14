import Head from "next/head";
import Topo from "@/componentes/Topo";
import Capa from "@/componentes/Capa";
import Produtos from "@/componentes/Produtos";
import Sobre from "@/componentes/Sobre";
import Contato from "@/Contato";
import Rodape from "@/componentes/Rodape";

export default function Home() {
  return (
    <>
      <Head>
        <title>Otica Vida</title>
        <meta name="description" content="Ótica com a melhor qualidade e preços da região" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topo/>
      <Capa/>
      <Produtos/>
      <Sobre />
      <Contato />
      <Rodape />
    </>
  );
}

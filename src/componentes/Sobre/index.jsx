import Image from "next/image"
import Loja from "@/../public/loja.png"
import Atendimento from "@/../public/atendimento.png"
import style from "@/styles/Sobre.module.css"

export default function Sobre(){
    return(
        <main id="sobre" className={style.sobre}>
            <section className={style.sobre_container}>    
                <div className={style.sobre_texto}>
                    <h3>QUEM SOMOS NÓS?</h3>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                </div>
                <div className={style.img_tx}>
                    <div className={style.img_box}>
                        <Image className={style.img} src={Loja} alt="Loja" />
                    </div>
                    <div className={style.tx_box}>
                        <h2>NOSSAS FILIAIS</h2>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                </div>
                <div className={style.img_tx}>
                    <div className={style.tx_box}>
                        <h2>ATENDIMENTO FLEXÍVEL</h2>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <div className={style.img_box}>
                        <Image className={style.img} src={Atendimento} alt="Atendimento" />
                    </div>
                </div>
            </section>
        </main>
    )
}
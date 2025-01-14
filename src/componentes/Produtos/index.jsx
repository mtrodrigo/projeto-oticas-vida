import Image from "next/image"
import Oculos_grau from "@/../public/oculos01.png"
import Oculos_transition from "@/../public/oculos02.png"
import Oculos_sol from "@/../public/oculos03.png"
import Oculos_infantil from "@/../public/oculos04.png"
import style from "@/styles/Produtos.module.css"

export default function Produtos(){
    return(
        <main id="produtos" className={style.produtos}>
            <section className={style.produtos_container}>
                <div className={style.produtos_texto}>
                    <h2>Nossos produtos</h2>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                </div>
                <div className={style.img_container}>
                    <div className={style.img_group}>
                        <figure>
                            <h3>Óculos de Grau</h3>
                            <Image className={style.img} src={Oculos_grau}/>
                            <figcaption>R$ 500,00</figcaption>
                        </figure>
                        <figure>
                            <h3>Óculos de Transition</h3>
                            <Image className={style.img} src={Oculos_transition}/>
                            <figcaption>R$ 750,00</figcaption>
                        </figure>
                    </div>
                    <div className={style.img_group}>
                        <figure>
                            <h3>Óculos de Sol</h3>
                            <Image className={style.img} src={Oculos_sol}/>
                            <figcaption>R$ 750,00</figcaption>
                        </figure>
                        <figure>
                            <h3>Óculos de Infantil</h3>
                            <Image className={style.img} src={Oculos_infantil}/>
                            <figcaption>R$ 500,00</figcaption>
                        </figure>
                    </div>
                </div>
                <div className={style.produtos_lista}>
                    <h3>Todos os nossos produtos incluem:</h3>
                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
import Image from "next/image"
import Local from "@/../public/local.png"
import Tel from "@/../public/telefone.png"
import Email from "@/../public/email.png"
import Facebook from "@/../public/fb.png"
import Instagram from "@/../public/ig.png"
import Twitter from "@/../public/tt.png"
import style from "@/styles/Contato.module.css"

export default function Contato(){
    return(
        <main id="contato" className={style.contato}>
            <section className={style.contato_container}>
                <div className={style.contato_texto}>
                    <h2>Fale conosco</h2>
                    <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                </div>
                <div className={style.contato_box}>
                    <div className={style.box}>
                        <h3>Nossos Contatos</h3>
                        <div className={style.box_img_span}>
                            <Image className={style.img} src={Local} alt="Local" />
                            <span>Nova Iguaçu, RJ</span>
                        </div>
                        <div className={style.box_img_span}>
                            <Image className={style.img} src={Tel} alt="Telefone" />
                            <span>(21)99999-9999</span>
                        </div>
                        <div className={style.box_img_span}>
                            <Image className={style.img} src={Email} alt="Email" />
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>
                    <div className={style.box}>
                        <h3>Nossas Redes Sociais</h3>
                        <div className={style.box_img_span}>
                            <Image className={style.img} src={Facebook} alt="Facebook" />
                            <span>/OticaVida</span>
                        </div>
                        <div className={style.box_img_span}>
                            <Image className={style.img} src={Instagram} alt="Instagram" />
                            <span>@oticavidarj</span>
                        </div>
                        <div className={style.box_img_span}>
                            <Image className={style.img} src={Twitter} alt="Twitter" />
                            <span>@oticavidarj</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
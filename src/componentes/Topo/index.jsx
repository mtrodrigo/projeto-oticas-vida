import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/logo.png"
import style from "../../styles/Topo.module.css"

export default function Topo(){
    return(
        <header className={style.header}>
            <section className={style.topo_container}>    
                <figure className={style.logo_container}>
                    <Image className={style.logo} src={Logo} alt="Logo"/>
                </figure>
                <nav className={style.links_container}>
                    <Link className={style.links} href="#produtos">PRODUTOS</Link>
                    <Link className={style.links} href="#sobre">SOBRE</Link>
                    <Link className={style.links} href="#contato">CONTATO</Link>
                </nav>
            </section>
        </header>
    )
}
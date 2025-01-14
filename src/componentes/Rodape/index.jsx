import Link from "next/link"
import style from "@/styles/Rodape.module.css"

export default function Rodape() {
    return(
        <footer className={style.rodape}>
            <p>© 2025 Óticas Vida. - Todos os direitos reservados - Criado por <strong><Link className={style.link} target="_blank" href={"https://www.linkedin.com/in/rodrigo-marques-tavares-9482b4226/"} >Rodrigo Marques Tavares</Link></strong></p>
        </footer>
    )
}
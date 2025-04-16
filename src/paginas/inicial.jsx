import { Cabecalho } from "../componentes/cabecalho"
import { BarraNavegacao } from "../componentes/barraNagegacao"
import { Outlet } from "react-router-dom"
import { Footer } from "../componentes/Footer"

//estrutura basica do React
export function Inicial(){
    return(
        <>
            <Cabecalho/>
            <BarraNavegacao/>
            <Outlet/>
            <Footer/>

        </>
    )
}
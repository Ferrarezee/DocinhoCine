import { Routes, Route } from "react-router-dom";
import { Inicial } from "../paginas/inicial";
import { Lista } from "../componentes/lista";
import { Perfil } from "../paginas/Perfil";
import { Serie } from "../paginas/Series";

export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Inicial/>}>
                <Route index element={<Lista/>}/>
                <Route path="perfil" element={<Perfil/>}/>
                <Route path="serie" element={<Serie/>}/>
            </Route>
        </Routes>
    )
}
import estilos from './Series.module.css';
import { Listafavoritos } from '../componentes/Listafavoritos';

export function Serie(){
    return(
        <div className={estilos.container}>
            <h2>Favoritos</h2>
            <Listafavoritos/>
        </div>
    )
}
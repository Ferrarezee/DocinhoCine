import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

//Estrutura do componente
export function BarraNavegacao(){
    //Eu só posso retornar 1 componente
    return(
        <nav className={estilos.container}>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='serie'><li>Filmes</li></Link>
                <Link to='perfil'><li>Perfil</li></Link>
            </ul>
        </nav>
    )
}
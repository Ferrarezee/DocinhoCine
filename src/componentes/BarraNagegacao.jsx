import estilos from './BarraNavegacao.module.css';

//Estrutura do componente
export function BarraNavegacao(){
    //Eu só posso retornar 1 componente
    return(
        <nav className={estilos.container}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Perfil</li>
            </ul>
        </nav>
    )
}
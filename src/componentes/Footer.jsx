import estilos from './Footer.module.css'

//Estrutura do componente
export function Footer(){
    //Eu só posso retornar 1 componente
    return(
        <nav className={estilos.container}>
            <p>&copy; Deborah Ferrareze. Todos os direitos reservados.</p>
        </nav>
    )
}
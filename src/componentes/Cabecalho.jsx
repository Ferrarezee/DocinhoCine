import estilos from './Cabecalho.module.css';

// estrutura react para componentes
export function Cabecalho(){
    return(
        // Para cada return eu so posso renderizar um unico componente
        <header className={estilos.container}>
            <div className='logo'>
                <a href='gatinho.png'>
                    <img src='gatinho.png' alt='logo'></img>
                </a>
            </div>
        </header>
    )
}
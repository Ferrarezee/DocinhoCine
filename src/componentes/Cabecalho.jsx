import estilo from './Cabecalho.module.css';

// estrutura react para componentes
export function Cabecalho(){
    return(
        // Para cada return eu so posso renderizar um unico componente
        <header className={estilo.container}>
            <h2>Hello Word</h2>
        </header>
    )
}
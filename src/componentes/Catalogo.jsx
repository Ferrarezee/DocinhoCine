import estilos from './Catalogo.module.css';

export function Catalogo({movie, onOpenModal}){
    return(
        <div className={estilos.container} onClick={() => onOpenModal(movie)}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <p>{movie.overview}</p>
        </div>
    )
}
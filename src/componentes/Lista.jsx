import axios from "axios";
import React, {useState, useEffect} from "react";
import { Catalogo } from "./catalogo";
import { Modal } from "./Modal";
import estilos from './Lista.module.css';

const API_URL = 'https://api.themoviedb.org/3';
const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';

export function Lista(){
    const [movies, setMovies] = useState([]);
    const [SelectedMovie, setSeletedMovie] = useState(null)

    useEffect(()=>{
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
        .then(response=>{
            console.log(response.data.results);
            setMovies(response.data.results);
        })
        .catch(error =>{
            console.log("Erro:", error)
        });
    },[])

    const handleOpenModal = (movie)=>{
        setSeletedMovie(movie);
    }

    const handleCloseModal = ()=>{
        setSeletedMovie(null)
    }

    return(
        <div className={estilos.container}>
            <figure>
                {movies.map(movie=>(
                    <Catalogo key={movie.id}
                        movie={movie}
                        onOpenModal = {handleOpenModal}
                    />
                ))}
            </figure>
            {SelectedMovie && (<Modal movie={SelectedMovie} onClose={handleCloseModal}/>)}
        </div>
    )
}
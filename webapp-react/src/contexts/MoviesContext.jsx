import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MoviesContext = createContext();

export function MoviesProvider ({children}){
    
    const [movies, setMovies] = useState([])
    
    function fetchFilms(){
        return fetch('http://localhost:3070/api/movies/')
        .then(res => res.json())
        .then(data => {
             setMovies(data)
        })
    }

    useEffect(() => {fetchFilms()}, []);


    return <MoviesContext.Provider value={{movies}}>
        {children}
    </MoviesContext.Provider>
    
}

export function useMovies(){
    const context = useContext(MoviesContext);
    return context
}

// Lascio commentata questa sezione in caso di imprevisti/monito

// const MovieAndRevContext = createContext();

// export function MovieAndRevProvider ({children}){
    
//     const [movie, setMovie] = useState([])
//     const params = useParams()
//     console.log(params);
//     const { id } = params
//     console.log(id);

//     function fetchFilm(){
//         return fetch(`http://localhost:3070/api/movies/${id}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data); setMovie(data)
//         })
//     }

//     useEffect(() => {fetchFilm()}, []);


//     return <MovieAndRevContext.Provider value={{movie}}>
//         {children}
//     </MovieAndRevContext.Provider>
    
// }

// export function useMovie(){
//     const context = useContext(MovieAndRevContext);
//     return context
// }
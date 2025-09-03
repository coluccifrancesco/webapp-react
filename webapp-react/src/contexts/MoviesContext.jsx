import { createContext, useContext, useState, useEffect } from "react";

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
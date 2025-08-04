import { useMovies } from '../contexts/MoviesContext'

export default function HomeAndFilmList (){
    
    const { movies } = useMovies();

    return <main>
        <section className='container'>
            <div className='row g-3'>

                {movies.map(film => {
                    return <div className='col-12 col-md-6 col-lg-4' key={film.id}>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>{film.title}</h5>
                                <p className='card-text'>{film.director}</p>
                                <p className='card-text'>{film.genre}</p>
                                <p className='card-text'>{film.release_year}</p>
                                <p className='card-text'>{film.abstract}</p>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </section>
    </main>
}
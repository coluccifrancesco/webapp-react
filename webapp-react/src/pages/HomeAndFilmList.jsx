import { useMovies } from '../contexts/MoviesContext'
import FilmCard from '../components/FilmCard';

export default function HomeAndFilmList (){
    
    const { movies } = useMovies();

    return <main className='py-5 bg-dark'>
        <section className='container'>
            <div className='row g-3'>

                {movies.map(film => {
                    return <div className='col-12 col-md-6 col-lg-4 my-4' key={film.id}>
                        <FilmCard 
                        id={film.id}
                        image={film.image}
                        title={film.title}
                        director={film.director}
                        genre={film.genre}
                        year={film.release_year}
                        abstract={film.abstract} />
                    </div>
                })}

            </div>
        </section>
    </main>
}
import { useMovies } from '../contexts/MoviesContext'
import FilmCard from '../components/FilmCard';

export default function HomeAndFilmList() {

    const { movies } = useMovies();
    if(movies){
        console.log(movies);
    }

    return <main className='main-home'>

        {movies ? <section className='container'>
            <div className='row g-3'>

                {movies.map(film => {
                    return <div className='col-12 col-md-6 col-xl-4 my-4' key={film.id}>
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
        </section> :
            
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>}

    </main>
}
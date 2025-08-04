import { useMovies } from '../contexts/MoviesContext'
import { useParams } from 'react-router-dom';

export default function HomeAndFilmList (){
    
    const { movies } = useMovies();
    const { id } = useParams();

    const movie = movies[id - 1];

    return (movie ? <main>
            <div className='d-flex justify-content-center align-items-center overflow-hidden bg-black position-absolute z-0'>
                <img src={`${import.meta.env.VITE_server_url}${movie.image}`} alt={movie.title} className='detail-bg-img h-100' />
            </div>

            <section className='position-relative pt-5'>
                <div className='container'>
                    
                    <div className="row pt-5 mx-auto">
                        <img src={`${import.meta.env.VITE_server_url}${movie.image}`} alt={movie.title} className='col-5 col-sm-6 mx-auto' />
                        
                        <div className="col-12 col-sm-6 text-white px-5 px-sm-1 mt-5 mt-sm-0 d-flex flex-column justify-content-center align-items-center d-sm-block">
                            <h1 className='fw-bold'>{movie.title}</h1>
                            <h5 className='ms-1'>{movie.director}</h5>

                            <div className='d-flex justify-content-start justify-content-sm-between align-items-center my-4'>
                                <p className='ms-1 me-5 me-sm-0'>Genre: {movie.genre}</p>
                                <p className='fw-semibold'>{movie.release_year}</p>
                            </div>

                            <div className='d-none d-sm-block'>
                                <p className='mb-1'>Descritpion:</p>
                                <p>{movie.abstract}</p>
                            </div>
                            
                            <div className="d-sm-none col-12 col-sm-6 text-center">
                                <p>{movie.abstract}</p>
                            </div>
                        </div>

                    </div>
                
                </div>
            </section>
    </main> : <h1>Loading</h1>)
}
import { useMovies } from '../contexts/MoviesContext'
import { useParams } from 'react-router-dom';
import FilminDetail from '../components/FilmInDetail';

export default function HomeAndFilmList() {

    const { movies } = useMovies();
    const { id } = useParams();

    const movie = movies[id - 1];

    return (movie ? <main className='main-detail'>
        <section className='position-relative'>

            <div className='position-absolute h-100 w-100'>
                <img
                    src={`${import.meta.env.VITE_server_url}${movie.image}`}
                    alt={movie.title}
                    className='detail-bg-img'
                />
            </div>

            <FilminDetail />

            {/* Sezione commenti */}
            <section className=''>

            </section>
        </section>
    </main> : 
    
    <div className='d-flex justify-content-center align-items-center mt-5'>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>)
}
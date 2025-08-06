import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FilmInDetail from '../components/FilmInDetail';
import ReviewCard from '../components/ReviewCard';

export default function HomeAndFilmList() {

    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const reviews = movie.reviews;

    if (id) {
        console.log(id);
    }

    function fetchFilm() {
        return fetch(`http://localhost:3070/api/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
            })
    }

    useEffect(() => { fetchFilm() }, []);

    if (movie.length != 0) {
        console.log(movie);
    }


    return (movie && reviews ? <main className='main-detail'>
        <section className='position-relative'>

            <div className='position-absolute h-100 w-100 overflow-hidden'>
                <img
                    src={`${import.meta.env.VITE_server_url}${movie.image}`}
                    alt={movie.title}
                    className='detail-bg-img'
                />
            </div>

            <FilmInDetail
                id={movie.id}
                image={movie.image}
                title={movie.title}
                director={movie.director}
                genre={movie.genre}
                release_year={movie.release_year}
                abstract={movie.abstract}
            />


        </section>

        {/* Sezione commenti */}
        <section className='reviews-container'>
            <h2>Our community's reviews:</h2>

            <div className='row g-2'>
                {reviews.map(rev => {
                    return <ReviewCard rev={rev} key={rev.id} />
                })}
            </div>
        </section>

        
        {/* Form per lasciare una recensione DA REFATTORIZZARE */}
        <section className='form-review'>
            <h2>Share your opinion on the film!</h2>

            <form className='container'>
                <div className="mb-3">
                    <label htmlFor="name-input" className="form-label">Name</label>
                    <input type="email" className="form-control" id="name-input" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-review" className="form-label">Your review</label>
                    <input type="text" className="form-control" id="input-review" />
                </div>
                <div className="mb-3">
                    
                    <label className="form-label" htmlFor="vote-input">Your vote</label>
                    
                    <div className='d-flex justify-content-between align-items-center'>

                        <div>
                            <input type="number" className="vote-input form-control" id="vote-input" min="1" max="5" />
                        </div>
                    
                        <button type="submit" className="submit-btn">Submit</button>
                    
                    </div>
                </div>
            </form>
        </section>

    </main>

        :

        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>)
}
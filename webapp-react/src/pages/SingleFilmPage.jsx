import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FilmInDetail from '../components/FilmInDetail';
import ReviewCard from '../components/ReviewCard';

export default function HomeAndFilmList() {

    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const reviews = movie.reviews;

    // Form
    const [ formData, setFormData ] = useState({
        userName: '',
        userReview: '',
        userVote: ''
    });

    function handleFormData(e){

        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData(prevData => ({
            ...prevData, [fieldName]: fieldValue
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log('Review Sent!', formData);
        
        fetch(`http://localhost:3070/api/movies/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.userName,
                text: formData.userReview,
                vote: formData.userVote
            })
        })

        .then(()=>fetchFilm())
    }


    if (id) {
        console.log('Film id: ' + id);
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

            <form 
                className='container'
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label htmlFor="input-name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="userName"  
                        id="input-name"  
                        value={formData.userName} 
                        onChange={handleFormData}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-review" className="form-label">Your review</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="userReview" 
                        id="input-review" 
                        value={formData.userReview} 
                        onChange={handleFormData}
                    />
                </div>
                <div className="mb-3">
                    
                    <label className="form-label" htmlFor="input-vote">Your vote</label>
                    
                    <div className='d-flex justify-content-between align-items-center'>

                        <div>
                            <input 
                                type="number" 
                                className="vote-input form-control" 
                                name="userVote" 
                                id="input-vote" 
                                min="1" max="5" 
                                value={formData.userVote}
                                onChange={handleFormData} 
                            />
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
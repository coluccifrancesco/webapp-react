import { Link } from 'react-router-dom'

export default function FilmCard({id, image, title, director, genre, year, abstract}) {

    return <div className='card m-2 h-100 border border-4 rounded-4 border-white'>
        
        <img src={`${import.meta.env.VITE_server_url}${image}`} alt={title} className='card-img-top rounded-bottom rounded-4' />
        
        <div className='card-body p-3'>
            <h2 className='card-title fs-1 m-0 c-title'>{title}</h2>
            <p className='card-text fs-5 m-0'>{director}</p>
            
            <div className="my-3 d-flex justify-content-between align-items-center">
                <p className='card-text m-0'>{genre}</p>
                <p className='card-text m-0'>{year}</p>
            </div>

            <Link to={`/movies/${id}`} className='text-decoration-none'>
                <div className="mt-4 d-flex justify-content-start align-items-center">   
                    <button className="details-btn">Details</button>
                </div>
            </Link>
        </div>
    </div>
}
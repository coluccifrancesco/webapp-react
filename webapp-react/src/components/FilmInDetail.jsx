export default function FilmInDetail({id, image, title, director, genre, release_year, abstract}) {

    
    return ( id ? <section className='position-relative py-5'>
        <div className='container'>

            <div className="row py-5 mx-auto">
                <img
                    src={`${import.meta.env.VITE_server_url}${image}`}
                    alt={title}
                    className='col-5 col-sm-6 mx-auto'
                />

                <div className="col-12 col-sm-6 text-white px-5 px-sm-1 mt-5 mt-sm-0 mb-5 mb-sm-0 d-flex flex-column justify-content-center align-items-center d-sm-block">
                    <h1 className='fw-bold'>{title}</h1>
                    <h5 className='ms-1'>{director}</h5>

                    <div className='d-flex justify-content-start justify-content-sm-between align-items-center my-3 my-sm-4'>
                        <p className='ms-1 me-5 me-sm-0'>Genre: {genre}</p>
                        <p className='fw-semibold'>{release_year}</p>
                    </div>

                    <div className='d-none d-sm-block'>
                        <p className='mb-1'>Descritpion:</p>
                        <p>{abstract}</p>
                    </div>

                    <div className="d-sm-none col-12 col-sm-6 text-center">
                        <p>{abstract}</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
    
    :
    
    <div className="d-flex justify-content-center align-items-center my-5">
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>)
}
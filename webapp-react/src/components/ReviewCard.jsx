export default function ReviewCard({rev}) {
    return <div className='col-12' key={rev.id}>
        <div className="rev-card d-flex justify-content-between align-items-center">
            <div>
                <div>
                    <h5 className="rev-title">{rev.name}</h5>
                </div>
                <div className="card-body">
                    <p className="card-title">Review: <span>'{rev.text}'</span></p>
                    <p className='mb-0'>Vote : <span>{rev.vote} / 5</span></p>
                </div>
            </div>
            
            <div className="propic-cont">
                <i className="rev-propic fa-solid fa-user"></i>
            </div>
        </div>
    </div>
}
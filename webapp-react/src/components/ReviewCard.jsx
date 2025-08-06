export default function ReviewCard({rev}) {
    return <div className='col-12' key={rev.id}>
        <div className="rev-card d-flex justify-content-between align-items-center">
            <div>
                <div>
                    <h5 className="rev-title">{rev.name}</h5>
                </div>

                <div className="rev-card-body">
                    <p><span className="rev-pre">Review:</span> <span className="review">'{rev.text}'</span></p>
                    <p className='mb-0'>Vote : <span className="vote">{rev.vote} / 5 <i className="fa-solid fa-star vote-star"></i></span></p>
                </div>
            </div>
            
            <div className="propic-cont">
                <i className="rev-propic fa-solid fa-user"></i>
            </div>
        </div>
    </div>
}
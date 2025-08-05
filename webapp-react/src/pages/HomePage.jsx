import { Link } from 'react-router-dom'

export default function HomePage() {
    return <main className='main-home'>

        <div className="md-stretch">
            <div className="jumbotron">
                <h2>🎬 Scopri il tuo prossimo film preferito!</h2>
                <p>Esplora recensioni fresche, classici intramontabili e chicche nascoste. Che tu sia cinefilo o curioso, qui il cinema prende vita… una recensione alla volta! 🍿</p>

                <Link to='/movies'>
                    <button className="discover-btn" type="button">Scopri i nostri film!</button>
                </Link>
            </div>
        </div>

        <section className='container-buttons'>
            <div className="row g-3">
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Lascia la tua opinione 🎤</h5>
                            <p className="card-text">Hai visto un film? Dillo al mondo! Scrivi recensioni e vota i tuoi titoli preferiti.</p>
                            <Link to='/movies'>
                                <button href="#" className="details-btn">Recensisci ora</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Novità in sala 🆕</h5>
                            <p className="card-text">Scopri le ultime uscite e non perderti neanche una première da popcorn!</p>
                            <Link to='/movies'>
                                <button href="#" className="details-btn">Guarda le novità</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Top film del momento 🔥</h5>
                            <p className="card-text">Dai un’occhiata alle classifiche: i titoli più amati dalla community ti aspettano.</p>
                            <Link to='/movies'>
                                <button href="#" className="details-btn">Scopri la classifica</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Cinema vicino a te 📍</h5>
                            <p className="card-text">Vuoi andare al cinema? Trova le sale più vicine e gli orari degli spettacoli.</p>
                            <Link to='/movies'>
                                <button href="#" className="details-btn">Cerca cinema</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Crea la tua watchlist 🎯</h5>
                            <p className="card-text">Salva i film che vuoi vedere, organizza le tue serate cinema in un clic.</p>
                            <Link to='/movies'>
                                <button href="#" className="details-btn">Inizia ora</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Newsletter cinefila ✉️</h5>
                            <p className="card-text">Rimani aggiornato con news, recensioni e consigli esclusivi. Niente spam, solo cinema!</p>
                            <Link to='/movies'>
                                <button href="#" className="details-btn">Iscriviti ora</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    </main>
}
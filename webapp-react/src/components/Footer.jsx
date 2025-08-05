export default function Footer() {
    return <footer>
        <nav className="text-light container-fluid d-flex justify-content-center align-items-center flex-column">
            <div className="row g-3 p-3">
                <div className="col col-12 col-sm-4">
                    <ul className="list-unstyled mx-auto">
                        <h3>I generi più popolari</h3>
                        <li><a>Film d'Azione</a></li>
                        <li><a>Commedie</a></li>
                        <li><a>Film Drammatici</a></li>
                        <li><a>Film Horror</a></li>
                        <li><a>Fantascienza</a></li>
                        <li><a>Thriller</a></li>
                        <li><a>Film Romantici</a></li>
                        <li><a>Documentari</a></li>
                    </ul>
                </div>

                <div className="col col-12 col-sm-4">
                    <ul className="list-unstyled mx-auto">
                        <h3>Risorse del Sito</h3>
                        <li><a>Recensioni Recenti</a></li>
                        <li><a>Film Più Votati</a></li>
                        <li><a>Classifiche Annuali</a></li>
                        <li><a>Interviste Esclusive</a></li>
                        <li><a>Anteprime e Trailer</a></li>
                        <li><a>Copertura Festival</a></li>
                        <li><a>Podcast Cinematografici</a></li>
                        <li><a>Newsletter Settimanale</a></li>
                    </ul>
                </div>

                <div className="col col-12 col-sm-4">
                    <ul className="list-unstyled mx-auto">
                        <h3>Informazioni Legali</h3>
                        <li><a>Chi Siamo</a></li>
                        <li><a>Contattaci</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Termini di Servizio</a></li>
                        <li><a>Cookie Policy</a></li>
                        <li><a>Pubblicità</a></li>
                        <li><a>La Nostra Redazione</a></li>
                        <li><a>Disclaimer</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-light">
                <p style={{fontSize:8}}>Made by Colucci Francesco 2025 all rights reserved</p>
            </div>
        </nav>
    </footer>
}
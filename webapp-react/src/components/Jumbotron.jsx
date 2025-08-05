import { Link } from 'react-router-dom'

export default function Jumbotron() {
    return <section className="md-stretch">
        <div className="jumbotron">
            <h2>🎬 Scopri il tuo prossimo film preferito!</h2>
            <p>Esplora recensioni fresche, classici intramontabili e chicche nascoste. Che tu sia cinefilo o curioso, qui il cinema prende vita… una recensione alla volta! 🍿</p>

            <Link to='/movies'>
                <button className="discover-btn" type="button">Scopri i nostri film!</button>
            </Link>
        </div>
    </section>
}
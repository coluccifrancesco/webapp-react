import { Link } from 'react-router-dom'

export default function Header() {
    return <header>
        <nav className="container-fluid d-flex justify-content-between align-items-center navbar z-2">
            <Link to='/' className='text-decoration-none'>
                <div className='nav-logo-cont d-flex align-items-center'>
                    <i className="fa-solid fa-clapperboard logotype-logo" />
                    <h1 className='logotype-name my-0'>Boolerboxd</h1>
                </div>
            </Link>

            <div>
                <Link to='/movies' className='head-link'><p>Latest</p></Link>
            </div>
        </nav>
    </header>
}
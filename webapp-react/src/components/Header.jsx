import { Link } from 'react-router-dom'

export default function Header() {
    return <header>
        <nav className="p-4 container-fluid d-flex justify-content-between align-items-center navbar">
            <Link to='/' className='text-decoration-none'>
                <div className='nav-logo-cont d-flex align-items-center'>
                    <i className="fa-solid fa-clapperboard logotype-logo" />
                    <h1 className='logotype-name my-0'>Boolerboxd</h1>
                </div>
            </Link>

            <div>

            </div>
        </nav>
    </header>
}
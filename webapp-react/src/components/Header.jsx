import { Link } from 'react-router-dom'

export default function Header() {
    return <header>
        <nav className="p-3 bg-black container-fluid d-flex justify-content-start align-items-center">
            <Link to='/' className='text-decoration-none'><h1 className="text-light">Bool-erbox</h1></Link>
        </nav>
    </header>
}
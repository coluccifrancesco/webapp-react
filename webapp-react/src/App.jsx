import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layout/DefaultLayout'
import HomeAndFilmList from './pages/HomeAndFilmList'
import MovieDetail from './pages/MovieDetail'

// Ricorda di importare Bootstrap

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={DefaultLayout}>
          <Route path='/' Component={HomeAndFilmList} />
          <Route path='/:id' Component={MovieDetail} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
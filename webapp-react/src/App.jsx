import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layout/DefaultLayout'
import HomeAndFilmList from './pages/HomeAndFilmList'
import MovieDetail from './pages/MovieDetail'
import { MoviesProvider } from './contexts/MoviesContext'

function App() {

  return (

    <MoviesProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomeAndFilmList} />

            <Route path='/:id' Component={MovieDetail} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  )
}

export default App
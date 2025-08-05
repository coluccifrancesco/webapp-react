import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './pages/HomePage'
import FilmList from './pages/FilmList'
import MovieDetail from './pages/MovieDetail'
import { MoviesProvider } from './contexts/MoviesContext'

function App() {

  return (

    <MoviesProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
            <Route path='/movies' Component={FilmList} />

            <Route path='/movies/:id' Component={MovieDetail} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  )
}

export default App
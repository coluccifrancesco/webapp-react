import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layout/DefaultLayout'
import HomeAndFilmList from './pages/HomeAndFilmList'
import MovieDetail from './pages/MovieDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes to="/">
        <Route Component={DefaultLayout}>
          <Route to='homeandlist' Component={HomeAndFilmList} />
          <Route to='homeandlist/:id' Component={MovieDetail} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
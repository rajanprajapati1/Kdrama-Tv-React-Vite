import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import SingleDramaPage from './Pages/SingleDramaPage'
import VideoPlayer from './components/VideoPlayer'
import Searchresults from './components/Searchresults'

const App = () => {
  return (<>
    <div className='content'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/drama/:id' element={<SingleDramaPage />} />
          <Route path='/search/result/:id' element={<Searchresults />} />
        </Routes>
    </div>
  </>
  )
}

export default App

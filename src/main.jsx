import React from 'react'
import { Administration, Reception, Gym } from './components/MainAdmin'
import ReactDOM from 'react-dom/client'
import { Header, Menu, Option } from './components/App'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={
          <Menu>
            <Link to='/administration' className='ir option'>ir a administracion</Link>
            <Link to='/reception' className='ir option'>ir a recepcion</Link>
            <Link to='/GYM' className='ir option'>ir a GYM</Link>
          </Menu>
        } />
        <Route path='/administration' element={<Administration />} />
        <Route path='/reception' element={<Reception />} />
        <Route path='/gym' element={<Gym />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

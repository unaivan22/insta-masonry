import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Explores from './Explores'
import Messages from './Messages'
import Notifications from './Notifications'
import Profile from './Profile'

export default function Routers() {
  return (
    <Router>
        <Routes>
        
            <Route path='/' element={<Home/>} />
            <Route path='/explores' element={<Explores/>} />
            <Route path='/messages' element={<Messages/>} />
            <Route path='/notifications' element={<Notifications/>} />
            <Route path='/profile' element={<Profile/>} />
        
        </Routes>
     </Router>
  )
}

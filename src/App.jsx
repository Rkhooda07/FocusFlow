import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Focus from './pages/Focus'
import Habits from './pages/Habits'
import Settings from './pages/Settings'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Dashboard />} />
        <Route path="/tasks"  element= {<Tasks />}/>
        <Route path="/focus" element= {<Focus />}/>
        <Route path="/habits" element= {<Habits />}/>
        <Route path="/settings" element= {<Settings />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

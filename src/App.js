import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FindGroupPage } from './ui/find-group-page/find-group-page'
import { NewGroupPage } from './ui/new-group-page/new-group-page'
import { Main } from './ui/main/main'

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/new" element={<NewGroupPage/>}/>
          <Route path="/find" element={<FindGroupPage/>}/>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  )
}

import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FindGroupPage } from './ui/find-group-page/find-group-page'
import { NewGroupPage } from './ui/new-group-page/new-group-page'
import { Main } from './ui/main/main'
// import { context } from './context'
// import { useState } from 'react'

export const App = () => {
  // const Provider = context.Provider;
  // const [data, setData] = useState(null);
  // const dataUpdate = (newData) => setData(newData);
  // <Provider value={{data, dataUpdate}}>
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/new" element={<NewGroupPage/>}/>
        <Route path="/:id" element={<FindGroupPage/>}/>
      </Routes>
    </Router>
  )
}

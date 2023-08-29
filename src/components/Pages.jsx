import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  )
}

export default Pages

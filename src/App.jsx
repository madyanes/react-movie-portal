import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';

import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App

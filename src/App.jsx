import React from 'react';

import Navigation from './components/Navigation';

import Pages from './components/Pages';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Pages />
      </main>
    </>
  );
}

export default App;

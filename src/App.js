import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Connect, NewHome } from './pages';

import { Navbar } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/wallets-validation" element={<Home />} />
        <Route path="connect-wallet" element={<Connect />} />
      </Routes>
      {/* <Helmet>
        <script src="./script.js" type='text/javascript'></script>
      </Helmet> */}
    </>
  );
}

export default App;
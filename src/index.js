import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {ScrollToTop} from './components'

ReactDOM.render(
  <Router>
    <ChakraProvider>
      <ScrollToTop />
      <App />
    </ChakraProvider>
  </Router>,
  document.getElementById('root')
);

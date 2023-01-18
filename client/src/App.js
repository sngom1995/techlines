/* eslint-disable react/jsx-no-undef */
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <ChakraProvider>
      <Router>
        <Navbar />  
        <main>

        </main>   
      </Router>
   </ChakraProvider>
  );
}

export default App;

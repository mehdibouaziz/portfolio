import './styles/App.css';
import './styles/components.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { inject } from '@vercel/analytics';



function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: 'rgb(255,166,0)',
      },
    },
  });

  inject();

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Landing 
          name="MEHDI BOUAZIZ"
          title="FRONT-END DEVELOPER"
          />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

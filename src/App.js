import './styles/App.css';
import './styles/components.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Portfolio from './components/Portfolio';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';



function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
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
      </ThemeProvider>
    </div>
  );
}

export default App;

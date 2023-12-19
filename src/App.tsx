// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu/menu';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';
import Tansto from './pages/projects/Tansto/tansto';
import Website from './pages/projects/website';
import { useThemeContext } from './theme/ThemeContextProvider';
import { CssBaseline, ThemeProvider } from '@mui/material';
import NightModeToggle from './components/themeButton/themeButton';
import LanguageSelector from './components/language/langButton';
import DataTable from './pages/contact/DataTable';
import useFirestoreData from './config/useFirestoreData';

const App: React.FC = () => {
  const { theme } = useThemeContext();
  const { data: fetchedData } = useFirestoreData(); 

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LanguageSelector/>
        <NightModeToggle />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/tansto" element={<Tansto />} />
          <Route path="/projects/website" element={<Website />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/DisplayData" element={<DataTable data={fetchedData} />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;

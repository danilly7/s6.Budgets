import './App.css';
import { Header } from './components/Header';
import { FeaturesPage } from './pages/FeaturesPage';
import { HomePage } from './pages/HomePage'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/features-page' element={<FeaturesPage />} />
        </Routes>
      </main>
    </>
  )
};

export default App; 

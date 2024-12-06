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
          <Route path='*' element={<h1 className='text-2xl font-bold text-red-600 m-10 flex justify-center'>Not Found</h1>}/>
        </Routes>
      </main>
    </>
  )
};

export default App; 

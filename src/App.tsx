import './App.css';
import { budgetArr } from './components/Budgets/budgetArr';
import { BudgetProvider } from './components/Budgets/ContextProvider';
import { Navbar } from './components/Navbar';
import { FeaturesPage } from './pages/FeaturesPage';
import { HomePage } from './pages/HomePage'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BudgetProvider budgetArr={budgetArr}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/features-page' element={<FeaturesPage />} />
            <Route path='*' element={<h1 className='text-2xl font-bold text-red-600 m-10 flex justify-center'>Not Found</h1>} />
          </Routes>
        </BudgetProvider>
      </main>
    </>
  )
};

export default App;
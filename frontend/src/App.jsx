import './App.css'
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <div className='App'>
        <Routes>
          <Route path='/dashboard/*' element={<Dashboard />}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
        </Routes>
    </div>
  )
}

export default App;

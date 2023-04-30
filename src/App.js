import logo from './logo.svg';
import './App.css';
import { Header } from './components/common/header/Header'
import { BankDetails } from './components/bank-details/BankDetails';
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { Processing } from './components/processing/Processinng';
function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/*" element={<Navigate replace to="/Bank-Details" />} />
        <Route path="/Bank-Details" element={<BankDetails />} />
        <Route path="/Processing" element={<Processing />} />
      </Routes>

    </div>

  );
}

export default App;

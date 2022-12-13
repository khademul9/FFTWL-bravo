
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/Contexts/AuthProvider";
import Traveller from "./components/TravelerModule/Traveller";
import BankAccount from "./components/AccountModule/BankAccount";
import AddBank from './components/AccountModule/AddBank';

function App() {
  return (
    <div className="App">
      {/* all route */}
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/traveler" element={<Traveller />} />
            <Route path="/bankAccount" element={<BankAccount/>} />
            <Route path="/addBank" element={<AddBank/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

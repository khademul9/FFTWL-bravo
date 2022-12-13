
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/Contexts/AuthProvider";
import Traveller from "./components/TravelerModule/Traveller";
import BankAccount from "./components/AccountModule/BankAccount";
import AddBank from './components/AccountModule/AddBank';
import AddTraveller from "./components/TravelerModule/AddTraveller";

function App() {
  return (
    <div>
      {/* all route */}
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/traveler" element={<Traveller />} />
            <Route path="/bankAccount" element={<BankAccount/>} />
            <Route path="/addBank" element={<AddBank/>} />
            <Route path="/addtraveler" element={<AddTraveller />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

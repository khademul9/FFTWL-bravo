import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/Contexts/AuthProvider";
import Traveller from "./components/TravelerModule/Traveller";

function App() {
  return (
    <div className="App">
      {/* all route */}
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/traveler" element={<Traveller />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

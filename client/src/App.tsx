import './App.css';
import { Routes, Route } from "react-router-dom";
import { Company } from './pages/Company';
import { CompanyList } from './components/CompanyList/CompanyList';



function App() {

  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<CompanyList />} />
        <Route path="/companies/:id" element={<Company />} />
      </Routes>
   
    </div>
  );
}

export default App;

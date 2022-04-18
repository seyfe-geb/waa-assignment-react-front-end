
import './App.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <h1>Post Viewing System</h1>

              <Dashboard />

          </div>
      </BrowserRouter>

  );
}

export default App;

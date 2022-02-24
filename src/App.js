import { BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Homepage />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { CoinsDataProvider } from "./Context/coinsContext.js";
import Homepage from "./Pages/Homepage/Homepage.jsx";

function App() {
  return (
    <BrowserRouter>
      <CoinsDataProvider>
        <div className="App">
          <Homepage />
        </div>
      </CoinsDataProvider>
    </BrowserRouter>
  );
}

export default App;

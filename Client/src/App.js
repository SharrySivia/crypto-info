import { BrowserRouter } from "react-router-dom";
import { CoinsDataProvider } from "./Context/coinsContext.js";
import { UserContextProvider } from "./Context/userContext.js";
import Homepage from "./Pages/Homepage/Homepage.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <CoinsDataProvider>
          <div className="App">
            <Homepage />
          </div>
        </CoinsDataProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;

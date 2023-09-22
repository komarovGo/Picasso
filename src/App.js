import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routs/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

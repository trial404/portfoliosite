import { useState } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Web from "./pages/web";
import Photos from "./pages/photos";
import WebTest from "./pages/webTest";
import { GridStateContext } from "./contexts/themeContext";
import { GridStateProvider } from "./contexts/themeContext";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <GridStateProvider>
      {/* <Home />
      <About /> */}
      <Web />
      {/* <Photos /> */}
      {/* <WebTest /> */}
    </GridStateProvider>
  );
}

export default App;

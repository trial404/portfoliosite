import { useState } from "react";

import ResponsiveTest from "./pages/desktop/responsiveTest";

// desktop testing
// import Home from "./pages/desktop/home";
// import Demo from "./pages/desktop/demo";
// import About from "./pages/desktop/about";
// import Web from "./pages/desktop/web";
// import Photos from "./pages/desktop/photos";
// import WebTest from "./pages/desktop/webTest";

// mobile testing
// import MobileHome from "./pages/mobile/mobileHome";
// import MobileAbout from "./pages/mobile/mobileAbout";
// import MobileWeb from "./pages/mobile/mobileWeb";
// import MobilePhotos from "./pages/mobile/mobilePhotos";

// contexts
import { GridStateProvider } from "./contexts/themeContext";

// import ResponsiveTest from "./pages/desktop/responsiveTest";

function App() {
  return (
    <>
      <GridStateProvider>
        <ResponsiveTest />
      </GridStateProvider>
    </>
  );
}

export default App;

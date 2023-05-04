import React from "react";
// import "../styles/desktop/responsiveStyles.css";

// Desktop
import Home from "./home";
import About from "./about";
import Web from "./web";
import Photos from "./photos";

import MobileHome from "../mobile/mobileHome";
import MobileAbout from "../mobile/mobileAbout";
import MobileWeb from "../mobile/mobileWeb";

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => (
  <>
    <MobileHome />
    <MobileAbout />
    <MobileWeb />
  </>
);
const DesktopComponent = () => (
  <>
    <Home />
    <About />
    <Web />
    <Photos />
  </>
);

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 700;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function ResponsiveTest() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}

// reference for code
// https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/

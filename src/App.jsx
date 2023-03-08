import { createContext, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export const ContextProvider = createContext();
function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="App">
      <ContextProvider.Provider value={{isDesktop, setIsDesktop}}>
        <Navbar />
        <Hero />
      </ContextProvider.Provider>
    </div>
  );
}

export default App;

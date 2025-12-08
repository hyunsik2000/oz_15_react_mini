import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Layout from "@components/Layout";
import Detail from "@pages/Detail";
import { Search } from "@pages/Search";
import { useThemeStore } from "@store/useThemeStore";
import { useEffect } from "react";

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<Detail />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;

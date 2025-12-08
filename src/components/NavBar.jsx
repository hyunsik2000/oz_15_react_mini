import { Link } from "react-router-dom";
import { NAV_LINK } from "@constants/path";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { SearchBar } from "./MovieSearch/SearchBar";
import { useThemeStore } from "@store/useThemeStore";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

export function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="app-theme fixed top-0 left-0 z-50 w-full">
      <div className="flex-between mx-auto h-[70px] max-w-5xl px-6">
        <div className="flex items-center gap-6">
          <a href="/">
            <div className="text-2xl font-bold text-red-600">NETFLIX</div>
          </a>
          <nav className="hidden sm:block">
            <ul className="nav-link-list">
              {NAV_LINK.map((el) => (
                <li key={el.id}>
                  <Link to={`${el.path}`}>{el.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden items-center gap-2 text-sm text-gray-300 sm:flex">
          <button
            onClick={toggleTheme}
            className="flex cursor-pointer items-center rounded bg-gray-600 px-1 py-1 text-xs text-black dark:bg-gray-400 dark:text-white"
          >
            {theme === "dark" ? (
              <>
                <HiOutlineSun className="text-yellow-400" size={22} />
              </>
            ) : (
              <>
                <HiOutlineMoon className="text-blue-300" size={22} />
              </>
            )}
          </button>
          <button
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="cursor-pointer text-[#4B5563] transition-colors hover:text-black dark:text-[#D1D5DB] dark:hover:text-white"
          >
            검색
          </button>

          <SearchBar isSearchOpen={isSearchOpen} />
          <button className="rounded bg-red-600 px-3 py-1.5 text-xs font-semibold hover:bg-red-700">
            로그인
          </button>
        </div>
        <button
          className="text-2xl text-gray-300 sm:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div
        className={`px-6 text-white transition-all duration-500 sm:hidden ${isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"} `}
      >
        <ul className="nav-link-list flex flex-col gap-4 py-4">
          {NAV_LINK.map((el) => (
            <li key={el.id}>
              <Link to={el.path} onClick={() => setIsMenuOpen(false)}>
                {el.name}
              </Link>
            </li>
          ))}
          <button className="w-full rounded bg-red-600 px-3 py-1 text-lg font-semibold text-white transition-colors hover:bg-red-700">
            로그인
          </button>
        </ul>
      </div>
    </header>
  );
}

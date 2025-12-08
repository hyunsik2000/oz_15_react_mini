import { Link } from "react-router-dom";
import { NAV_LINK } from "../constants/path";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#141517]">
      <div className="flex-between mx-auto h-[70px] max-w-5xl px-6">
        <div className="flex items-center gap-6">
          <a href="/">
            <div className="text-2xl font-bold text-red-600">NETFLIX</div>
          </a>
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-3 text-sm text-gray-300 [&>li]:cursor-pointer [&>li]:hover:text-white">
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
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="cursor-pointer hover:text-white"
          >
            검색
          </button>
          <input
            type="text"
            className={`transform rounded bg-white px-1 py-1 text-sm text-black transition-all duration-300 ${isSearchOpen ? "max-w-[155px] opacity-100" : "max-w-0 opacity-0"} `}
          />
          <button className="rounded bg-red-600 px-3 py-1.5 text-xs font-semibold hover:bg-red-700">
            로그인
          </button>
        </div>
        <button
          className="cursor-pointer text-2xl text-gray-300 sm:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div
        className={`px-6 text-white transition-all duration-500 sm:hidden ${isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"} `}
      >
        <ul className="flex flex-col gap-4 py-4">
          {NAV_LINK.map((el) => (
            <li key={el.id}>
              <Link to={el.path} onClick={() => setIsMenuOpen(false)}>
                {el.name}
              </Link>
            </li>
          ))}
          <button className="cursor-pointer rounded bg-red-600 px-3 py-1 text-lg hover:bg-red-700">
            로그인
          </button>
        </ul>
      </div>
    </header>
  );
}

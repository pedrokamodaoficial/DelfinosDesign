import { useState, useRef } from "react";
import { ShoppingCart, User, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownProdutosOpen, setDropdownProdutosOpen] = useState(false);
  const [dropdownSobreOpen, setDropdownSobreOpen] = useState(false);
  const [dropdownLoginOpen, setDropdownLoginOpen] = useState(false);
  const searchInputRef = useRef(null);

  // Fecha dropdown ao clicar fora (desktop)
  const handleBlurDropdown = (setDropdown) => {
    setTimeout(() => setDropdown(false), 150);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md fixed w-full z-50 px-4 py-0 flex items-center h-16">
        {/* Menu Desktop - Esquerda */}
        <div className="hidden md:flex items-center gap-2 h-full">
          {/* Produtos Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-black px-4 py-2 font-medium hover:text-purple-600 relative group"
              onClick={() => setDropdownProdutosOpen((v) => !v)}
              onBlur={() => handleBlurDropdown(setDropdownProdutosOpen)}
            >
              Produtos
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  dropdownProdutosOpen ? "rotate-180" : ""
                }`}
              />
              <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-1 w-full"></span>
            </button>
            {dropdownProdutosOpen && (
              <div className="flex flex-col bg-white shadow-inner w-56 absolute left-0 top-full mt-1 rounded z-50">
                <Link
                  to="/produtos/categoria1"
                  className="block px-6 py-2 text-black hover:text-purple-600 relative group"
                  onClick={() => setDropdownProdutosOpen(false)}
                >
                  Categoria 1
                  <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                </Link>
                <Link
                  to="/produtos/categoria2"
                  className="block px-6 py-2 text-black hover:text-purple-600 relative group"
                  onClick={() => setDropdownProdutosOpen(false)}
                >
                  Categoria 2
                  <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                </Link>
                <Link
                  to="/produtos"
                  className="block px-6 py-2 text-black hover:text-purple-600 relative group"
                  onClick={() => setDropdownProdutosOpen(false)}
                >
                  Todos Produtos
                  <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                </Link>
                <Link
                  to="/produtos/novidades"
                  className="block px-6 py-2 text-black hover:text-purple-600 relative group"
                  onClick={() => setDropdownProdutosOpen(false)}
                >
                  Novidades
                  <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                </Link>
                <Link
                  to="/produtos/promocoes"
                  className="block px-6 py-2 text-black hover:text-purple-600 relative group"
                  onClick={() => setDropdownProdutosOpen(false)}
                >
                  Promoções
                  <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                </Link>
                <Link
                  to="/produtos/mais-vendidos"
                  className="block px-6 py-2 text-black hover:text-purple-600 relative group"
                  onClick={() => setDropdownProdutosOpen(false)}
                >
                  Mais Vendidos
                  <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                </Link>
              </div>
            )}
          </div>
          {/* Sobre Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-black px-4 py-2 font-medium hover:text-purple-600 relative group"
              onClick={() => setDropdownSobreOpen((v) => !v)}
              onBlur={() => handleBlurDropdown(setDropdownSobreOpen)}
            >
              Sobre
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  dropdownSobreOpen ? "rotate-180" : ""
                }`}
              />
              <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-1 w-full"></span>
            </button>
            {dropdownSobreOpen && (
              <div className="flex flex-col bg-white shadow-inner w-40 absolute left-0 top-full mt-1 rounded z-50">
                <Link
                  to="/sobre"
                  className="block px-6 py-2 text-black hover:text-purple-600 relative group"
                  onClick={() => setDropdownSobreOpen(false)}
                >
                  Quem Somos
                  <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                </Link>
                <Link
                  to="/sobre/contato"
                  className="block px-6 py-2 text-black hover:text-purple-600 relative group"
                  onClick={() => setDropdownSobreOpen(false)}
                >
                  Contato
                  <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                </Link>
                <Link
                  to="/sobre/faq"
                  className="block px-6 py-2 text-black hover:text-purple-600 relative group"
                  onClick={() => setDropdownSobreOpen(false)}
                >
                  FAQ
                  <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                </Link>
              </div>
            )}
          </div>
          {/* Login Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-black px-4 py-2 font-medium hover:text-purple-600 relative group"
              onClick={() => setDropdownLoginOpen((v) => !v)}
              onBlur={() => handleBlurDropdown(setDropdownLoginOpen)}
            >
              Entrar
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  dropdownLoginOpen ? "rotate-180" : ""
                }`}
              />
              <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-1 w-full"></span>
            </button>
            {dropdownLoginOpen && (
              <div className="flex flex-col bg-white shadow-inner w-40 absolute left-0 top-full mt-1 rounded z-50">
                <Link
                  to="/login"
                  className="block px-6 py-2 text-black hover:text-purple-600 relative group"
                  onClick={() => setDropdownLoginOpen(false)}
                >
                  Login
                  <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                </Link>
                <Link
                  to="/registrar"
                  className="block px-6 py-2 text-black hover:text-purple-600 relative group"
                  onClick={() => setDropdownLoginOpen(false)}
                >
                  Registrar
                  <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Hamburguer - Esquerda Mobile */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col justify-center items-center w-8 h-8 relative z-50 md:hidden"
          aria-label="Abrir menu"
        >
          <span className="block w-6 h-[3px] bg-black rounded transition-all duration-300 absolute top-2"></span>
          <span className="block w-6 h-[3px] bg-black rounded transition-all duration-300 absolute top-4"></span>
          <span className="block w-6 h-[3px] bg-black rounded transition-all duration-300 absolute top-6"></span>
        </button>

        {/* Centro: Logo */}
        <div className="flex-1 flex justify-center items-center pointer-events-none absolute left-0 right-0 h-full">
          <Link
            to="/"
            className="pointer-events-auto text-2xl font-black text-black relative group px-1 flex items-center h-full"
          >
            Delfino´s
            <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-2 w-full"></span>
          </Link>
        </div>

        {/* Direita: Carrinho e Login Icones */}
        <div className="flex items-center gap-2 h-full ml-auto">
          <Link to="/carrinho" className="relative group flex items-center">
            <ShoppingCart
              className="cursor-pointer text-black bg-white rounded p-1 transition-colors hover:text-purple-600"
              size={28}
            />
            <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
          </Link>
          <Link to="/login" className="relative group flex items-center">
            <User
              className="cursor-pointer text-black bg-white rounded p-1 transition-colors hover:text-purple-600"
              size={28}
            />
            <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
          </Link>
        </div>
      </nav>

      {/* Barra de pesquisa sempre abaixo do navbar */}
      <div className="w-full fixed left-0 top-16 z-40 bg-white shadow flex justify-center py-3 md:py-4">
        <div className="flex items-center w-11/12 max-w-xl gap-2 relative">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Pesquisar..."
            className="border border-gray-300 rounded-full px-3 py-1 w-full focus:outline-none focus:border-purple-600 transition-colors pr-10"
          />
          <Search
            className="absolute right-4 text-gray-400 pointer-events-none"
            size={20}
          />
        </div>
      </div>

      {/* MENU MOBILE: folder centralizado com borda */}
      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center transition-all duration-300 ${
          menuOpen
            ? "pointer-events-auto bg-black/40"
            : "pointer-events-none bg-transparent"
        }`}
        style={{ top: 0 }}
      >
        <div
          className={`bg-white shadow-2xl rounded-xl w-[90vw] max-w-sm h-[90vh] flex flex-col relative transition-transform duration-300 ${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          {/* Fechar */}
          <button
            className="absolute top-4 right-4 text-black text-3xl z-50"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          >
            &times;
          </button>
          <div className="flex flex-col items-center mt-20 gap-2 w-full overflow-y-auto">
            {/* Produtos com dropdown que empurra o conteúdo */}
            <div className="w-full">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-black hover:text-purple-600 font-medium text-lg relative group"
                onClick={() => setDropdownProdutosOpen((v) => !v)}
              >
                <span>Produtos</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    dropdownProdutosOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-6 bottom-2 w-[calc(100%-48px)]"></span>
              </button>
              {dropdownProdutosOpen && (
                <div className="flex flex-col bg-white w-full shadow-inner">
                  <Link
                    to="/produtos/categoria1"
                    className="block px-10 py-2 text-black hover:text-purple-600 relative group"
                    onClick={() => {
                      setDropdownProdutosOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Categoria 1
                    <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                  </Link>
                  <Link
                    to="/produtos/categoria2"
                    className="block px-10 py-2 text-black hover:text-purple-600 relative group"
                    onClick={() => {
                      setDropdownProdutosOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Categoria 2
                    <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                  </Link>
                  <Link
                    to="/produtos"
                    className="block px-10 py-2 text-black hover:text-purple-600 relative group"
                    onClick={() => {
                      setDropdownProdutosOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Todos Produtos
                    <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                  </Link>
                  <Link
                    to="/produtos/novidades"
                    className="block px-10 py-2 text-black hover:text-purple-600 relative group"
                    onClick={() => {
                      setDropdownProdutosOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Novidades
                    <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                  </Link>
                  <Link
                    to="/produtos/promocoes"
                    className="block px-10 py-2 text-black hover:text-purple-600 relative group"
                    onClick={() => {
                      setDropdownProdutosOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Promoções
                    <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                  </Link>
                  <Link
                    to="/produtos/mais-vendidos"
                    className="block px-10 py-2 text-black hover:text-purple-600 relative group"
                    onClick={() => {
                      setDropdownProdutosOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Mais Vendidos
                    <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                  </Link>
                </div>
              )}
            </div>
            <div className="w-full">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-black hover:text-purple-600 font-medium text-lg relative group"
                onClick={() => setDropdownSobreOpen((v) => !v)}
              >
                <span>Sobre</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    dropdownSobreOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-6 bottom-2 w-[calc(100%-48px)]"></span>
              </button>
              {dropdownSobreOpen && (
                <div className="flex flex-col bg-white w-full shadow-inner">
                  <Link
                    to="/sobre"
                    className="block px-10 py-2 text-black hover:text-purple-600 relative group"
                    onClick={() => {
                      setDropdownSobreOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Quem Somos
                    <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                  </Link>
                  <Link
                    to="/sobre/contato"
                    className="block px-10 py-2 text-black hover:text-purple-600 relative group"
                    onClick={() => {
                      setDropdownSobreOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Contato
                    <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                  </Link>
                  <Link
                    to="/sobre/faq"
                    className="block px-10 py-2 text-black hover:text-purple-600 relative group"
                    onClick={() => {
                      setDropdownSobreOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    FAQ
                    <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                  </Link>
                </div>
              )}
            </div>
            <div className="w-full">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-black hover:text-purple-600 font-medium text-lg relative group"
                onClick={() => setDropdownLoginOpen((v) => !v)}
              >
                <span>Entrar</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    dropdownLoginOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-6 bottom-2 w-[calc(100%-48px)]"></span>
              </button>
              {dropdownLoginOpen && (
                <div className="flex flex-col bg-white w-full shadow-inner">
                  <Link
                    to="/login"
                    className="block px-10 py-2 text-black hover:text-purple-600 relative group"
                    onClick={() => {
                      setDropdownLoginOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Login
                    <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                  </Link>
                  <Link
                    to="/registrar"
                    className="block px-10 py-2 text-black hover:text-purple-600 relative group"
                    onClick={() => {
                      setDropdownLoginOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Registrar
                    <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-0 w-full"></span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MENU DESKTOP: abaixo da barra de pesquisa */}
      {/* REMOVIDO: Menu duplicado que ficava abaixo da barra de pesquisa */}
      {/* <div className="hidden md:flex w-full justify-center bg-white shadow-md z-30 fixed left-0 top-[6.5rem]">
        <div className="flex gap-8 py-2">
          ...menu duplicado...
        </div>
      </div> */}
    </>
  );
}

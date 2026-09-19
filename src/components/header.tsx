import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentRoute?: string;
  onNavigate: (route: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tryClaudeOpen, setTryClaudeOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f7f4ee]/90 backdrop-blur-md border-b border-[#e5dfd5] transition-all">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Anthropic Brand Wordmark */}
        <button
          onClick={() => onNavigate('/')}
          className="flex items-center gap-1 group text-left focus:outline-none"
        >
          <span className="font-semibold text-2xl sm:text-3xl tracking-tight text-[#191919] group-hover:opacity-80 transition-opacity">
            A \
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#191919]">
          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-black py-2">
            <span>Research</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>

          <a href="#" className="hover:text-black transition-colors">
            Policy
          </a>

          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-black py-2">
            <span>Commitments</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-black py-2">
            <span>Learn</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>

          <a href="#" className="hover:text-black transition-colors">
            News
          </a>
        </nav>

        {/* Right CTA Button: Try Claude Dropdown */}
        <div className="relative">
          <button
            onClick={() => setTryClaudeOpen(!tryClaudeOpen)}
            className="flex items-center gap-2 bg-[#191919] hover:bg-[#333333] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95"
          >
            <span>Try Claude</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${tryClaudeOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {tryClaudeOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#e5dfd5] p-2 z-50 text-sm animate-in fade-in zoom-in-95 duration-150">
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-2 rounded-xl hover:bg-[#f7f4ee] text-[#191919] font-medium"
              >
                Claude for Web
              </a>
              <a
                href="https://console.anthropic.com"
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-2 rounded-xl hover:bg-[#f7f4ee] text-[#191919] font-medium"
              >
                Claude API Console
              </a>
              <a
                href="https://claude.ai/download"
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-2 rounded-xl hover:bg-[#f7f4ee] text-[#191919] font-medium"
              >
                Download Desktop App
              </a>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#191919]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#f7f4ee] border-b border-[#e5dfd5] px-6 py-6 space-y-4 text-base font-medium">
          <button
            onClick={() => {
              onNavigate('/');
              setMobileOpen(false);
            }}
            className="block text-left py-2 text-[#191919]"
          >
            Home
          </button>
          <button
            onClick={() => {
              onNavigate('/claude-fable-and-mythos-5-1');
              setMobileOpen(false);
            }}
            className="block text-left py-2 text-[#191919]"
          >
            Fable 5.1 & Mythos 5.1
          </button>
          <a href="#" className="block py-2 text-[#191919]">Research</a>
          <a href="#" className="block py-2 text-[#191919]">Policy</a>
          <a href="#" className="block py-2 text-[#191919]">Commitments</a>
          <a href="#" className="block py-2 text-[#191919]">News</a>
        </div>
      )}
    </header>
  );
}

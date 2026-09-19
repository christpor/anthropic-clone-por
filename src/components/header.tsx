import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, ShieldCheck, Layers, BookOpen } from 'lucide-react';

interface HeaderProps {
  currentRoute?: string;
  onNavigate: (route: string) => void;
}

export function Header({ currentRoute = '/', onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tryClaudeOpen, setTryClaudeOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setTryClaudeOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (route: string) => {
    onNavigate(route);
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-[#f7f4ee]/95 backdrop-blur-md border-b border-[#e5dfd5] transition-all"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-1 group text-left focus:outline-none"
        >
          <span className="font-semibold text-2xl sm:text-3xl tracking-tight text-[#191919] group-hover:opacity-80 transition-opacity">
            A \
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#191919]">
          {/* Research Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('research')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('/research')}
              className={`flex items-center gap-1 py-2 hover:text-black transition-colors ${
                currentRoute === '/research' ? 'text-[#c15f3e] font-semibold' : ''
              }`}
            >
              <span>Research</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'research' ? 'rotate-180 opacity-100' : 'opacity-60'
                }`}
              />
            </button>

            {activeDropdown === 'research' && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50">
                <div className="bg-[#ede8df] rounded-2xl shadow-xl border border-[#ded7cc] p-3 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#777777]">
                    Research Areas
                  </div>
                  <button
                    onClick={() => handleNavClick('/research')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f7f4ee] transition-colors flex items-center gap-2.5 text-xs font-medium text-[#191919]"
                  >
                    <BookOpen className="w-4 h-4 text-[#c15f3e]" />
                    <span>Research Overview</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('/research')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f7f4ee] transition-colors flex items-center gap-2.5 text-xs font-medium text-[#191919]"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#c15f3e]" />
                    <span>Alignment Science</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('/research')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f7f4ee] transition-colors flex items-center gap-2.5 text-xs font-medium text-[#191919]"
                  >
                    <Layers className="w-4 h-4 text-[#c15f3e]" />
                    <span>Mechanistic Interpretability</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('/claude-fable-and-mythos-5-1')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f7f4ee] transition-colors flex items-center justify-between text-xs font-medium text-[#191919]"
                  >
                    <span>Fable 5.1 & Mythos 5.1</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#c15f3e]/10 text-[#c15f3e] font-semibold">New</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Policy Direct Link */}
          <button
            onClick={() => handleNavClick('/policy')}
            className={`hover:text-black transition-colors py-2 ${
              currentRoute === '/policy' ? 'text-[#c15f3e] font-semibold' : ''
            }`}
          >
            Policy
          </button>

          {/* Commitments Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('commitments')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('/policy')}
              className="flex items-center gap-1 py-2 hover:text-black transition-colors"
            >
              <span>Commitments</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'commitments' ? 'rotate-180 opacity-100' : 'opacity-60'
                }`}
              />
            </button>

            {activeDropdown === 'commitments' && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50">
                <div className="bg-[#ede8df] rounded-2xl shadow-xl border border-[#ded7cc] p-3 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#777777]">
                    Governance & Safety
                  </div>
                  <button
                    onClick={() => handleNavClick('/policy')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f7f4ee] transition-colors block text-xs font-medium text-[#191919]"
                  >
                    Responsible Scaling Policy (RSP)
                  </button>
                  <button
                    onClick={() => handleNavClick('/policy')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f7f4ee] transition-colors block text-xs font-medium text-[#191919]"
                  >
                    Claude's Constitution
                  </button>
                  <button
                    onClick={() => handleNavClick('/company')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f7f4ee] transition-colors block text-xs font-medium text-[#191919]"
                  >
                    Public Benefit Corporation (PBC)
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Learn Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('learn')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center gap-1 py-2 hover:text-black transition-colors"
            >
              <span>Learn</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'learn' ? 'rotate-180 opacity-100' : 'opacity-60'
                }`}
              />
            </button>

            {activeDropdown === 'learn' && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50">
                <div className="bg-[#ede8df] rounded-2xl shadow-xl border border-[#ded7cc] p-3 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#777777]">
                    Resources
                  </div>
                  <a
                    href="https://academy.claude.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f7f4ee] transition-colors flex items-center justify-between text-xs font-medium text-[#191919]"
                  >
                    <span>Claude Academy</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                  <a
                    href="https://platform.claude.com/docs"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f7f4ee] transition-colors flex items-center justify-between text-xs font-medium text-[#191919]"
                  >
                    <span>Developer Documentation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                  <button
                    onClick={() => handleNavClick('/news')}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#f7f4ee] transition-colors block text-xs font-medium text-[#191919]"
                  >
                    Tutorials & Guides
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* News Direct Link */}
          <button
            onClick={() => handleNavClick('/news')}
            className={`hover:text-black transition-colors py-2 ${
              currentRoute === '/news' ? 'text-[#c15f3e] font-semibold' : ''
            }`}
          >
            News
          </button>
        </nav>

        {/* Right CTA Button: Try Claude Dropdown */}
        <div className="relative">
          <button
            onClick={() => setTryClaudeOpen(!tryClaudeOpen)}
            className="flex items-center gap-2 bg-[#191919] hover:bg-[#333333] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95"
          >
            <span>Try Claude</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                tryClaudeOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {tryClaudeOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[#ede8df] rounded-2xl shadow-xl border border-[#ded7cc] p-2 z-50 text-sm animate-in fade-in zoom-in-95 duration-150">
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-2 rounded-xl hover:bg-[#f7f4ee] text-[#191919] font-medium text-xs"
              >
                Claude for Web
              </a>
              <a
                href="https://console.anthropic.com"
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-2 rounded-xl hover:bg-[#f7f4ee] text-[#191919] font-medium text-xs"
              >
                Claude API Console
              </a>
              <a
                href="https://claude.ai/download"
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-2 rounded-xl hover:bg-[#f7f4ee] text-[#191919] font-medium text-xs"
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
        <div className="md:hidden bg-[#ede8df] border-b border-[#ded7cc] px-6 py-6 space-y-3 text-sm font-medium">
          <button
            onClick={() => handleNavClick('/')}
            className="block w-full text-left py-2 text-[#191919]"
          >
            Overview
          </button>
          <button
            onClick={() => handleNavClick('/research')}
            className="block w-full text-left py-2 text-[#191919]"
          >
            Research
          </button>
          <button
            onClick={() => handleNavClick('/policy')}
            className="block w-full text-left py-2 text-[#191919]"
          >
            Policy & Governance
          </button>
          <button
            onClick={() => handleNavClick('/news')}
            className="block w-full text-left py-2 text-[#191919]"
          >
            Newsroom
          </button>
          <button
            onClick={() => handleNavClick('/company')}
            className="block w-full text-left py-2 text-[#191919]"
          >
            Company
          </button>
          <button
            onClick={() => handleNavClick('/claude-fable-and-mythos-5-1')}
            className="block w-full text-left py-2 text-[#c15f3e] font-semibold"
          >
            Claude Fable 5.1 & Mythos 5.1
          </button>
        </div>
      )}
    </header>
  );
}

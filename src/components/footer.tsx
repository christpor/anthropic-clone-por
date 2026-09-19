import { FOOTER_COLUMNS } from '../data/anthropic-content';

interface FooterProps {
  onNavigate?: (route: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (link: { label: string; route: string; external?: boolean }) => {
    if (link.external) {
      window.open(link.route, '_blank', 'noopener,noreferrer');
    } else if (onNavigate) {
      onNavigate(link.route);
    }
  };

  return (
    <footer className="w-full bg-[#111111] text-white pt-16 sm:pt-20 pb-12 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto space-y-16">
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 text-xs sm:text-[13px]">
          {FOOTER_COLUMNS.map((col, idx) => (
            <div key={idx} className="space-y-3.5">
              <h4 className="font-semibold text-white tracking-wide">{col.heading}</h4>
              <ul className="space-y-2.5 text-[#a3a3a3]">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="hover:text-white transition-colors duration-150 inline-block text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Baseline Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-white tracking-tight">A \</span>
            <span>Anthropic, PBC. © 2026. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate && onNavigate('/policy')}
              className="hover:text-white transition-colors"
            >
              Privacy choices
            </button>
            <button
              onClick={() => onNavigate && onNavigate('/policy')}
              className="hover:text-white transition-colors"
            >
              Terms of service
            </button>
            <button
              onClick={() => onNavigate && onNavigate('/policy')}
              className="hover:text-white transition-colors"
            >
              Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

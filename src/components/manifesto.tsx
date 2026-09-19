import { MANIFESTO_ITEMS } from '../data/anthropic-content';

interface ManifestoProps {
  onNavigate?: (route: string) => void;
}

export function Manifesto({ onNavigate }: ManifestoProps) {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 py-16 sm:py-24 border-t border-[#e5dfd5]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Headline */}
        <div className="lg:col-span-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-medium leading-[1.2] text-[#191919] tracking-tight font-serif">
            At Anthropic, we build AI to serve humanity’s long-term well-being.
          </h2>
        </div>

        {/* Right Structured Research List */}
        <div className="lg:col-span-8 divide-y divide-[#ded7cc]">
          {MANIFESTO_ITEMS.map((item, index) => (
            <div
              key={index}
              onClick={() => onNavigate && onNavigate(item.link)}
              className="py-4 sm:py-5 flex items-center justify-between group cursor-pointer hover:bg-[#ede8df]/50 px-3 -mx-3 rounded-lg transition-colors"
            >
              <span className="text-base sm:text-lg font-medium text-[#191919] group-hover:text-[#c15f3e] transition-colors">
                {item.title}
              </span>
              <span className="text-xs sm:text-sm text-[#666666] font-normal pl-4 text-right">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

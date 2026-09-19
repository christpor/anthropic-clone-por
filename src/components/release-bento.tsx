import { RELEASES } from '../data/anthropic-content';

interface ReleaseBentoProps {
  onNavigate: (route: string) => void;
}

export function ReleaseBento({ onNavigate }: ReleaseBentoProps) {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {RELEASES.map((release) => (
          <div
            key={release.id}
            className="bg-[#ede8df] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md border border-[#e2dcd2]"
          >
            {/* Metadata Table */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-center justify-between border-b border-[#ded7cc] pb-3">
                <span className="font-semibold tracking-wider text-[#666666] uppercase text-[11px] sm:text-xs">
                  DATE
                </span>
                <span className="text-[#191919] font-medium">{release.date}</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#ded7cc] pb-3">
                <span className="font-semibold tracking-wider text-[#666666] uppercase text-[11px] sm:text-xs">
                  CATEGORY
                </span>
                <span className="text-[#191919] font-medium">{release.category}</span>
              </div>

              <div className="flex items-center justify-between pb-6">
                <span className="font-semibold tracking-wider text-[#666666] uppercase text-[11px] sm:text-xs">
                  DETAILS
                </span>
                <div className="flex items-center gap-2">
                  {release.models.map((model) => (
                    <button
                      key={model.name}
                      onClick={() => model.link.startsWith('/') && onNavigate(model.link)}
                      className="text-[#191919] font-medium underline underline-offset-2 hover:opacity-75"
                    >
                      {model.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={() => release.link.startsWith('/') && onNavigate(release.link)}
              className="w-fit inline-flex items-center gap-2 bg-[#191919] hover:bg-[#333333] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all active:scale-95 shadow-sm mt-4"
            >
              <span>Read announcement</span>
              <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

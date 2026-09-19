import { ArrowUpRight, Compass } from 'lucide-react';

interface CompanyPageProps {
  onNavigate: (route: string) => void;
}

export function CompanyPage({ onNavigate }: CompanyPageProps) {
  const leadership = [
    { name: 'Dario Amodei', role: 'CEO & Co-founder', bio: 'Former VP of Research at OpenAI. Leads overall direction, scaling compute strategy, and organizational governance.' },
    { name: 'Daniela Amodei', role: 'President & Co-founder', bio: 'Former VP of Operations at OpenAI. Oversees operations, people, legal, policy, and enterprise partnerships.' },
    { name: 'Jared Kaplan', role: 'Chief Scientist & Co-founder', bio: 'Theoretical physicist and co-author of neural scaling laws. Leads foundational research and theoretical alignment.' },
    { name: 'Chris Olah', role: 'Co-founder & Interpretability Lead', bio: 'Pioneered mechanistic interpretability, circuits research, and feature visualization for artificial neural networks.' },
  ];

  return (
    <div className="w-full bg-[#f7f4ee] min-h-screen text-[#191919]">
      {/* Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-16 border-b border-[#e2dcd2]">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#666666] uppercase">
            About Anthropic
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#191919] leading-[1.08]">
            An AI safety and research company dedicated to long-term human well-being.
          </h1>
          <p className="text-lg sm:text-xl text-[#555555] font-normal leading-relaxed max-w-2xl">
            Anthropic was founded in 2021 as a Public Benefit Corporation to build reliable, interpretable, and steerable AI systems while prioritizing beneficial global outcomes.
          </p>
        </div>
      </section>

      {/* Public Benefit Charter Section */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="bg-[#ede8df] rounded-3xl p-8 sm:p-12 border border-[#e2dcd2] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-[#c15f3e] text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Public Benefit Corporation (PBC)</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191919] leading-tight">
              Legally bound to balance stakeholder impact with the public good.
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              Unlike traditional corporations that must maximize shareholder returns at all costs, our legal corporate charter requires directors to balance shareholder interests with the public benefits of AI safety, non-proliferation of dangerous technologies, and broad societal flourishing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('/policy')}
                className="bg-[#191919] hover:bg-[#333333] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors shadow-sm"
              >
                Read Our Safety Charter
              </button>
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noreferrer"
                className="border border-[#191919] hover:bg-black/5 text-[#191919] px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors"
              >
                Try Claude
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#f7f4ee] rounded-2xl p-6 border border-[#ded7cc] space-y-4">
            <h3 className="font-serif text-lg text-[#191919]">The Long-Term Benefit Trust</h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              An independent body of trustees with fiduciary powers to select board members and ensure Anthropic remains committed to safety as frontier capabilities scale exponentially.
            </p>
            <div className="pt-2 border-t border-[#ded7cc] text-xs text-[#c15f3e] font-medium">
              Autonomous Governance
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16 sm:py-20 border-t border-[#e2dcd2]">
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#191919]">Leadership</h2>
          <p className="text-sm text-[#666666] mt-2">Founders and scientific leadership guiding our research agenda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((person) => (
            <div
              key={person.name}
              className="bg-[#ede8df] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#e2dcd2] space-y-4 hover:border-[#cbbfad] transition-all"
            >
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-[#191919]">{person.name}</h3>
                <div className="text-xs font-semibold text-[#c15f3e]">{person.role}</div>
                <p className="text-xs text-[#555555] leading-relaxed pt-2">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Careers Callout */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16 sm:py-20 border-t border-[#e2dcd2]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#141413] text-white rounded-3xl p-8 sm:p-12">
          <div className="space-y-3 max-w-xl">
            <h3 className="font-serif text-3xl sm:text-4xl">Join us at the frontier</h3>
            <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
              We are looking for engineers, researchers, policy experts, and operators who want to do the most impactful work of their careers in safety, scaling, and systems.
            </p>
          </div>
          <div>
            <a
              href="https://www.anthropic.com/careers"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#f7f4ee] hover:bg-white text-[#191919] px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all"
            >
              <span>Explore Open Roles</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

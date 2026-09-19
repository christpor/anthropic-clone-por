import { useState } from 'react';
import { RESEARCH_AREAS, RESEARCH_PAPERS } from '../data/anthropic-content';
import { ArrowUpRight, BookOpen, Layers, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';

interface ResearchPageProps {
  onNavigate: (route: string) => void;
}

export function ResearchPage({ onNavigate }: ResearchPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Interpretability', 'Alignment', 'Frontier Safety', 'Economics'];

  const filteredPapers =
    selectedFilter === 'All'
      ? RESEARCH_PAPERS
      : RESEARCH_PAPERS.filter((p) => p.category === selectedFilter);

  const getAreaIcon = (id: string) => {
    switch (id) {
      case 'alignment':
        return <ShieldCheck className="w-5 h-5 text-[#c15f3e]" />;
      case 'interpretability':
        return <Layers className="w-5 h-5 text-[#c15f3e]" />;
      case 'frontier-red-team':
        return <Cpu className="w-5 h-5 text-[#c15f3e]" />;
      case 'economics':
        return <TrendingUp className="w-5 h-5 text-[#c15f3e]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#c15f3e]" />;
    }
  };

  return (
    <div className="w-full bg-[#f7f4ee] min-h-screen text-[#191919]">
      {/* Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-16 border-b border-[#e2dcd2]">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#666666] uppercase">
            Research & Alignment
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#191919] leading-[1.08]">
            Developing safe and beneficial AI through empirical science.
          </h1>
          <p className="text-lg sm:text-xl text-[#555555] font-normal leading-relaxed max-w-2xl">
            We conduct fundamental research into the inner workings of neural networks, pioneer constitutional alignment methods, and model the macroeconomic impact of frontier intelligence.
          </p>
        </div>
      </section>

      {/* Research Pillars Bento */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#191919]">Research Focus Areas</h2>
            <p className="text-sm text-[#666666] mt-2">Core scientific disciplines across Anthropic labs.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RESEARCH_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-[#ede8df] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#e2dcd2] hover:border-[#cbbfad] transition-all hover:shadow-sm"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#f7f4ee] border border-[#ded7cc] flex items-center justify-center">
                  {getAreaIcon(area.id)}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#191919]">{area.title}</h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#ded7cc] flex items-center justify-between text-xs text-[#666666]">
                <span className="font-medium text-[#191919]">{area.lead}</span>
                <span>{area.paperCount} papers published</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Published Papers Section */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16 sm:py-20 border-t border-[#e2dcd2]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#191919]">Published Papers</h2>
            <p className="text-sm text-[#666666] mt-2">Peer-reviewed publications and technical reports.</p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-[#191919] text-white shadow-sm'
                    : 'bg-[#ede8df] text-[#555555] hover:bg-[#e2dcd2]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Papers Ledger */}
        <div className="divide-y divide-[#ded7cc] border-y border-[#ded7cc]">
          {filteredPapers.map((paper) => (
            <article
              key={paper.id}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group hover:bg-[#ede8df]/40 px-4 -mx-4 rounded-xl transition-colors"
            >
              <div className="lg:col-span-3 space-y-1">
                <span className="text-xs font-semibold tracking-wider text-[#c15f3e] uppercase">
                  {paper.category}
                </span>
                <div className="text-xs sm:text-sm text-[#666666]">{paper.date}</div>
                <div className="text-xs text-[#888888]">{paper.readTime}</div>
              </div>

              <div className="lg:col-span-7 space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl text-[#191919] group-hover:text-[#c15f3e] transition-colors leading-snug">
                  {paper.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {paper.summary}
                </p>
                <div className="text-xs text-[#777777]">Authors: {paper.authors}</div>
              </div>

              <div className="lg:col-span-2 flex justify-start lg:justify-end pt-2">
                <button
                  onClick={() => onNavigate('/claude-fable-and-mythos-5-1')}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#191919] hover:underline underline-offset-4"
                >
                  <span>Read Paper</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

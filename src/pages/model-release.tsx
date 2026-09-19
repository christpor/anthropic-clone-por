import { BENCHMARKS } from '../data/anthropic-content';
import { ArrowLeft } from 'lucide-react';

interface ModelReleasePageProps {
  onNavigate: (route: string) => void;
}

export function ModelReleasePage({ onNavigate }: ModelReleasePageProps) {
  return (
    <article className="w-full bg-[#f7f4ee] pb-24 select-none">
      {/* Sky Blue Hero Banner */}
      <div className="relative w-full aspect-[21/9] min-h-[340px] sm:min-h-[440px] bg-[#668bb8] overflow-hidden flex items-end justify-end p-6 sm:p-10">
        <img
          src="/assets/images/hero_cloud_poster.png"
          alt="Claude Fable 5.1 banner"
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
        />
        
        {/* Floating "Made with Fable 5.1" pill */}
        <div className="relative z-10 text-xs sm:text-sm font-medium text-white/90 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
          Made with Fable 5.1
        </div>
      </div>

      {/* Main Editorial Container */}
      <div className="max-w-[920px] mx-auto px-6 sm:px-8 pt-10 sm:pt-16 space-y-12">
        {/* Back Navigation Button */}
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#666666] hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Lead Headline */}
        <div className="space-y-6">
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] leading-[1.25] text-[#191919] font-normal tracking-tight">
            We’re introducing Claude Fable 5.1 and Claude Mythos 5.1. They’re the world’s most advanced
            models for coding and knowledge work—and their research capabilities offer an early
            glimpse of how AI models will contribute to scientific progress.
          </h1>

          <div className="space-y-4 text-base sm:text-lg leading-[1.65] text-[#333333] font-normal">
            <p>
              Claude Fable 5.1 and Claude Mythos 5.1 are the same model, but with different levels of
              safeguards. Fable 5.1 is generally available, while Mythos 5.1 is available only through
              our trusted access programs; its safeguards are specifically designed to support work
              in cybersecurity and the life sciences.
            </p>
            <p>
              Alongside its increased capabilities, Fable 5.1 takes important steps towards addressing
              the feedback we’ve received from customers on price, data retention, and safeguards.
            </p>
            <p>
              <strong className="text-[#191919] font-semibold">Price.</strong> Fable 5.1 will cost an
              estimated 25% less than Fable 5 for typical workloads, wherever usage is billed by
              token. This is because we’re reducing our pricing on cache reads (where the model reads
              inputs that have already been processed and stored). For highly agentic work, the
              savings will often be much larger—up to approximately 45%.
            </p>
          </div>
        </div>

        {/* Interactive Cost vs Performance Chart */}
        <div className="bg-[#ede8df] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#ded7cc] space-y-6">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg sm:text-xl text-[#191919]">
              Cost vs. Capability Frontier
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              Mean cost per task (USD, log scale) across agentic benchmarks
            </p>
          </div>

          {/* SVG Log-scale chart visualization */}
          <div className="relative w-full h-[220px] sm:h-[280px] bg-[#fbfaf7] rounded-xl border border-[#ded7cc] p-4 flex flex-col justify-between">
            <div className="flex-1 relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 grid grid-rows-4 grid-cols-5 divide-y divide-x divide-[#f0ece5]" />

              {/* Data Points */}
              <div className="absolute top-[20%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 group cursor-pointer">
                <div className="w-4 h-4 rounded-full bg-[#cc785c] ring-4 ring-[#cc785c]/20 shadow-md group-hover:scale-125 transition-transform" />
                <span className="text-xs font-bold text-[#191919] bg-white/90 px-2 py-0.5 rounded shadow-sm">
                  Fable 5.1 (Highest Efficiency)
                </span>
              </div>

              <div className="absolute top-[40%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#191919]" />
                <span className="text-[11px] font-medium text-[#666666]">Opus 5</span>
              </div>

              <div className="absolute top-[65%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#666666]" />
                <span className="text-[11px] font-medium text-[#666666]">Fable 5</span>
              </div>

              <div className="absolute top-[50%] left-[70%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#888888]" />
                <span className="text-[11px] font-medium text-[#666666]">GPT-5.6 Sol</span>
              </div>
            </div>

            {/* X Axis Coordinates */}
            <div className="flex justify-between text-[10px] sm:text-xs font-medium text-[#888888] pt-2 border-t border-[#ded7cc]">
              <span>$0</span>
              <span>$10</span>
              <span>$15</span>
              <span>$20</span>
              <span>$30</span>
              <span>$40</span>
              <span>$50</span>
            </div>
          </div>

          <p className="text-xs text-[#666666] leading-relaxed">
            Terminal-Bench-Science 0.1: The standard error is ±3.5–4.5 pts per model. The public
            leaderboard reports Claude Opus 5 at 30.0% and Claude Fable 5 at 21.4%; our setup
            reproduces them at 29.0% and 24.7%, respectively.
          </p>
        </div>

        {/* Benchmark Comparison Table */}
        <div className="space-y-4">
          <h2 className="font-editorial text-2xl sm:text-3xl text-[#191919] font-normal">
            Here, you can see how Fable 5.1 compares across various benchmarks:
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-[#ded7cc] shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#ded7cc] bg-[#fbfaf7]">
                  <th className="p-4 sm:p-5 font-semibold text-[#191919]">Benchmark</th>
                  <th className="p-4 sm:p-5 font-bold text-[#2e5b27] bg-[#dbe8d4] border-x border-[#b6d0ab]">
                    Fable 5.1
                  </th>
                  <th className="p-4 sm:p-5 font-semibold text-[#666666]">Fable 5</th>
                  <th className="p-4 sm:p-5 font-semibold text-[#666666]">Opus 5</th>
                  <th className="p-4 sm:p-5 font-semibold text-[#666666]">GPT-5.6 Sol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ded7cc]">
                {BENCHMARKS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#fbfaf7]/60 transition-colors">
                    <td className="p-4 sm:p-5">
                      <div className="font-medium text-[#191919]">{row.name}</div>
                      <div className="text-[11px] text-[#888888]">{row.benchmarkSub}</div>
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-[#191919] bg-[#dbe8d4]/70 border-x border-[#b6d0ab]">
                      <div>{row.fable51}</div>
                      {row.fable51Note && (
                        <div className="text-[11px] text-[#2e5b27] font-normal">
                          {row.fable51Note}
                        </div>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-[#666666] font-medium">{row.fable5}</td>
                    <td className="p-4 sm:p-5 text-[#666666] font-medium">{row.opus5}</td>
                    <td className="p-4 sm:p-5 text-[#666666] font-medium">{row.gpt56Sol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scientific Progress: Protein Binders & Venus Radar Map */}
        <div className="space-y-8 pt-6 border-t border-[#ded7cc]">
          <div className="space-y-4">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#191919] font-normal">
              Scientific research and computational breakthroughs
            </h2>
            <p className="text-base sm:text-lg leading-[1.65] text-[#333333]">
              In laboratory validations, Claude Fable 5.1 demonstrated the capability to de novo
              design therapeutic protein binders, validated with lab binding assays.
            </p>
          </div>

          {/* Protein Binder Visual Showcase */}
          <div className="bg-[#ede8df] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#ded7cc] space-y-4">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-white shadow-inner flex items-center justify-center">
              <img
                src="/assets/images/protein_binder_showcase.png"
                alt="Claude-designed protein binders 3D visualization"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              <strong className="text-[#191919]">Claude-designed protein binders</strong> (orange)
              for each of 12 targets (grey). Every design in the video was confirmed to bind in the
              lab. Structures shown are ESMFold2 predictions.
            </p>
          </div>

          {/* Venus Elevation Radar Case Study */}
          <div className="space-y-3">
            <h3 className="font-editorial text-xl sm:text-2xl text-[#191919]">
              Computational analysis and planetary modeling
            </h3>
            <p className="text-base sm:text-lg leading-[1.65] text-[#333333]">
              Claude Fable 5.1 trained a neural network to create a new, high-resolution elevation map
              of a third of the planet Venus. Its work was based on radar images taken by NASA’s
              Magellan mission more than 30 years ago. Claude’s new map now reveals details down to
              two to three kilometers, rather than 10 to 20, and shows heights up to 25% more
              accurately than before.
            </p>
            <p className="text-xs sm:text-sm text-[#666666]">
              Releasing this map under a Creative Commons license in advance of upcoming NASA
              VERITAS and ESA EnVision missions.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

import { FileText, Scale, Lock, ArrowUpRight } from 'lucide-react';

interface PolicyPageProps {
  onNavigate: (route: string) => void;
}

export function PolicyPage({ onNavigate }: PolicyPageProps) {
  const aslLevels = [
    {
      level: 'ASL-1',
      title: 'Elementary AI Systems',
      description:
        'Standard systems with no catastrophic misuse risks. Baseline model evaluation and standard cloud sandboxing.',
      status: 'Surpassed',
    },
    {
      level: 'ASL-2',
      title: 'General-Purpose Language Models',
      description:
        'Current Claude 3 & early Claude 4 class models. Rigorous automated filtering against CBRN instructions and standard prompt injection defenses.',
      status: 'Current Baseline',
    },
    {
      level: 'ASL-3',
      title: 'Autonomous Frontier Capability',
      description:
        'Models that meaningfully assist with cyber offense or bio-risk replication. Requires air-gapped parameter weights, dedicated physical HSM controls, and red-team gates.',
      status: 'Active Protocol (Fable 5.1 & Mythos 5.1)',
    },
    {
      level: 'ASL-4',
      title: 'Critical Frontier Threshold',
      description:
        'Models capable of automated research acceleration and catastrophic sabotage. Requires national security grade containment and sovereign oversight.',
      status: 'Future Threshold',
    },
  ];

  return (
    <div className="w-full bg-[#f7f4ee] min-h-screen text-[#191919]">
      {/* Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-16 border-b border-[#e2dcd2]">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#666666] uppercase">
            Policy & Governance
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#191919] leading-[1.08]">
            AI safety policy and governance for the frontier.
          </h1>
          <p className="text-lg sm:text-xl text-[#555555] font-normal leading-relaxed max-w-2xl">
            Anthropic advocates for sensible, risk-based regulation and self-governance standards. Our Responsible Scaling Policy defines concrete thresholds for containment and safety commitments.
          </p>
        </div>
      </section>

      {/* Responsible Scaling Policy ASL Levels */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#191919]">
            The Responsible Scaling Policy (RSP)
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Modeled on biological safety levels (BSL), our AI Safety Levels (ASL) define strict operational conditions and security thresholds before deploying increasingly capable models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aslLevels.map((asl) => (
            <div
              key={asl.level}
              className="bg-[#ede8df] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#e2dcd2] space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-[#c15f3e]">{asl.level}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f7f4ee] border border-[#ded7cc] text-[#555555]">
                    {asl.status}
                  </span>
                </div>
                <h3 className="font-medium text-base text-[#191919]">{asl.title}</h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {asl.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Policy Pillars */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16 sm:py-20 border-t border-[#e2dcd2]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#ede8df] rounded-2xl p-8 border border-[#e2dcd2] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#f7f4ee] border border-[#ded7cc] flex items-center justify-center">
              <Scale className="w-5 h-5 text-[#c15f3e]" />
            </div>
            <h3 className="font-serif text-2xl text-[#191919]">Claude's Constitution</h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              Constitutional AI utilizes principles drawn from the Universal Declaration of Human Rights and common-sense ethical guidelines to steer models away from harmful or discriminatory outputs.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('/research')}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#191919] hover:underline underline-offset-4"
              >
                <span>Read the Constitution</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="bg-[#ede8df] rounded-2xl p-8 border border-[#e2dcd2] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#f7f4ee] border border-[#ded7cc] flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#c15f3e]" />
            </div>
            <h3 className="font-serif text-2xl text-[#191919]">Security & Containment</h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              We maintain hardened cryptographic hardware security modules, SOC 2 Type II compliance, and strict segregation of weights to protect against cyber espionage and state-sponsored adversaries.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('/company')}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#191919] hover:underline underline-offset-4"
              >
                <span>Security Overview</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="bg-[#ede8df] rounded-2xl p-8 border border-[#e2dcd2] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#f7f4ee] border border-[#ded7cc] flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#c15f3e]" />
            </div>
            <h3 className="font-serif text-2xl text-[#191919]">Governmental Testimony</h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              Anthropic leadership regularly testifies before legislative bodies and collaborates with the US AI Safety Institute (US AISI) and UK AISI on red-teaming standards and pre-deployment evaluations.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('/news')}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#191919] hover:underline underline-offset-4"
              >
                <span>View Testimony Archive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Home, Compass } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (route: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="w-full bg-[#f7f4ee] min-h-[70vh] flex items-center justify-center text-[#191919] px-6 sm:px-8 py-20">
      <div className="max-w-xl text-center space-y-6">
        <span className="text-xs font-semibold tracking-wider text-[#c15f3e] uppercase">
          404 Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#191919] leading-tight">
          This page does not exist.
        </h1>
        <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
          The requested path could not be located in our research directory. Explore our active initiatives, releases, or return to the main overview.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 bg-[#191919] hover:bg-[#333333] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to Overview</span>
          </button>
          <button
            onClick={() => onNavigate('/research')}
            className="inline-flex items-center gap-2 border border-[#191919] hover:bg-black/5 text-[#191919] px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Research</span>
          </button>
        </div>
      </div>
    </div>
  );
}

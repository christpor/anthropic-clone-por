import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { HomePage } from './pages/home';
import { ModelReleasePage } from './pages/model-release';
import { ResearchPage } from './pages/research';
import { NewsPage } from './pages/news';
import { PolicyPage } from './pages/policy';
import { CompanyPage } from './pages/company';
import { NotFoundPage } from './pages/not-found';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Initialize Lenis smooth scroll tuned to Anthropic editorial momentum
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onPopState = () => {
      setCurrentRoute(window.location.pathname);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage onNavigate={handleNavigate} />;
      case '/claude-fable-and-mythos-5-1':
        return <ModelReleasePage onNavigate={handleNavigate} />;
      case '/research':
        return <ResearchPage onNavigate={handleNavigate} />;
      case '/news':
        return <NewsPage onNavigate={handleNavigate} />;
      case '/policy':
        return <PolicyPage onNavigate={handleNavigate} />;
      case '/company':
        return <CompanyPage onNavigate={handleNavigate} />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ee] text-[#191919]">
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

import { HeroHome } from '../components/hero-home';
import { ReleaseBento } from '../components/release-bento';
import { Manifesto } from '../components/manifesto';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="w-full bg-[#f7f4ee]">
      <HeroHome onNavigate={onNavigate} />
      <ReleaseBento onNavigate={onNavigate} />
      <Manifesto />
    </div>
  );
}

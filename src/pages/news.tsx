import { useState } from 'react';
import { NEWS_ARTICLES } from '../data/anthropic-content';
import { ArrowUpRight, Search } from 'lucide-react';

interface NewsPageProps {
  onNavigate: (route: string) => void;
}

export function NewsPage({ onNavigate }: NewsPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Announcements', 'Research', 'Product', 'Policy'];

  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    const matchesCat = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featured = NEWS_ARTICLES.find((a) => a.featured) || NEWS_ARTICLES[0];

  return (
    <div className="w-full bg-[#f7f4ee] min-h-screen text-[#191919]">
      {/* Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-12 border-b border-[#e2dcd2]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#666666] uppercase">
              Newsroom
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#191919] leading-tight">
              News, updates, and releases from Anthropic.
            </h1>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888888]" />
            <input
              type="text"
              placeholder="Search news & updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#ede8df] border border-[#ded7cc] text-xs sm:text-sm focus:outline-none focus:border-[#191919] transition-colors placeholder-[#888888]"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#191919] text-white shadow-sm'
                  : 'bg-[#ede8df] text-[#555555] hover:bg-[#e2dcd2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Headline Hero (if on All and no search) */}
      {activeCategory === 'All' && !searchQuery && (
        <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-12">
          <div
            onClick={() => onNavigate(featured.link)}
            className="group cursor-pointer bg-[#ede8df] rounded-3xl p-8 sm:p-12 border border-[#e2dcd2] hover:border-[#cbbfad] transition-all hover:shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#c15f3e]/10 text-[#c15f3e] text-xs font-semibold uppercase tracking-wider">
                  Featured Announcement
                </span>
                <span className="text-xs text-[#666666]">{featured.date}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#191919] group-hover:text-[#c15f3e] transition-colors leading-[1.15]">
                {featured.title}
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-2xl">
                {featured.excerpt}
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <span className="inline-flex items-center gap-2 bg-[#191919] group-hover:bg-[#333333] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-colors shadow-sm">
                <span>Read announcement</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onNavigate(article.link)}
              className="cursor-pointer bg-[#ede8df] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#e2dcd2] hover:border-[#cbbfad] transition-all hover:shadow-sm group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#666666]">
                  <span className="font-semibold text-[#c15f3e] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#191919] group-hover:text-[#c15f3e] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#ded7cc] flex items-center justify-between text-xs font-medium text-[#191919]">
                <span>Read story</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-20 text-center space-y-3">
            <p className="font-serif text-2xl text-[#191919]">No articles found</p>
            <p className="text-sm text-[#666666]">
              Try searching with different terms or selecting another category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, FileText, ArrowRight } from 'lucide-react';
import SEO from './SEO';

export type PolicyBlock = string | { list: string[] };

export interface PolicySection {
  id: string;
  title: string;
  body: PolicyBlock[];
}

interface PolicyLayoutProps {
  title: string;
  description: string;
  intro: string;
  lastUpdated: string;
  sections: PolicySection[];
}

const policyLinks = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Service', path: '/termsOfUse' },
  { name: 'Cookies Policy', path: '/cookies' },
  { name: 'Refund Policy', path: '/refund' },
];

export const PolicyLayout = ({ title, description, intro, lastUpdated, sections }: PolicyLayoutProps) => {
  const { pathname } = useLocation();

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO title={title} description={description} />

      {/* Header */}
      <section className="relative bg-neutral py-20 md:py-28 px-6 lg:px-10 overflow-hidden">
        <img
          src="/headers/about.jpg"
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral/85" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase mb-6">
            <FileText className="w-3.5 h-3.5" /> Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-5">{title}</h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">{intro}</p>
          <p className="text-white/40 text-sm mt-6">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Table of contents */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-32 bg-gray-50 border border-neutral/5 rounded-2xl p-6">
              <h2 className="text-xs font-bold tracking-widest uppercase text-neutral/50 mb-4">On this page</h2>
              <ol className="space-y-1">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={scrollTo(s.id)}
                      className="flex gap-3 py-1.5 text-sm text-neutral/70 hover:text-primary transition-colors"
                    >
                      <span className="text-primary font-semibold tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* Content */}
          <article className="lg:col-span-8 xl:col-span-9 space-y-12">
            {sections.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-32">
                <h2 className="flex items-baseline gap-4 text-2xl md:text-3xl font-bold text-neutral mb-5">
                  <span className="text-primary text-lg font-black tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed md:pl-10">
                  {s.body.map((block, j) =>
                    typeof block === 'string' ? (
                      <p key={j}>{block}</p>
                    ) : (
                      <ul key={j} className="space-y-2.5">
                        {block.list.map((item, k) => (
                          <li key={k} className="flex gap-3">
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Contact box */}
            <div className="rounded-3xl bg-neutral text-white p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Questions about this policy?</h2>
              <p className="text-white/60 mb-8 max-w-2xl">
                Contact Skyroot Real Estate Ltd and our team will get back to you as soon as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <a href="mailto:info@skyyroot.com" className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors">
                  <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-white" /></span>
                  info@skyyroot.com
                </a>
                <a href="tel:+8801818100503" className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors">
                  <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-white" /></span>
                  +88 01818-100 503
                </a>
                <Link to="/contact" className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors">
                  <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-white" /></span>
                  Aftab Nagar &amp; Mohammadpur, Dhaka
                </Link>
              </div>
            </div>

            {/* Other policies */}
            <div>
              <h2 className="text-xs font-bold tracking-widest uppercase text-neutral/50 mb-4">Related policies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {policyLinks.filter((p) => p.path !== pathname).map((p) => (
                  <Link
                    key={p.path}
                    to={p.path}
                    className="group flex items-center justify-between rounded-2xl border border-neutral/10 px-5 py-4 font-semibold text-neutral hover:border-primary hover:text-primary transition-colors"
                  >
                    {p.name}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

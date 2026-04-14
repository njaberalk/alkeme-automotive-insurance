'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coverages = [
  { title: 'Garage Liability', slug: 'garage-liability', desc: 'Covers bodily injury and property damage from your dealership or repair shop operations, including test drives and lot activities.' },
  { title: 'Garagekeepers', slug: 'garage-keepers', desc: 'Protects customer vehicles in your care against theft, hail, fire, vandalism, and other physical damage while at your facility.' },
  { title: 'Dealers Open Lot', slug: 'dealers-open-lot', desc: 'Covers your vehicle inventory against comprehensive and collision losses including hail, theft, and flood damage.' },
  { title: 'General Liability', slug: 'general-liability', desc: 'Covers premises injuries, advertising claims, and product liability beyond the scope of your garage policy.' },
  { title: 'Workers\' Compensation', slug: 'workers-compensation', desc: 'Provides wage replacement and medical benefits for mechanics, technicians, and staff injured on the job.' },
  { title: 'Commercial Property', slug: 'commercial-property', desc: 'Protects your buildings, tools, lifts, diagnostic equipment, and parts inventory against fire, theft, and other perils.' },
  { title: 'Commercial Auto', slug: 'commercial-auto', desc: 'Covers your dealer-plated vehicles, tow trucks, delivery vans, and customer loaners for liability and physical damage.' },
  { title: 'Cyber Liability', slug: 'cyber-liability', desc: 'Protects against data breaches, ransomware, and the costs of compromised customer financial data and DMS systems.' },
  { title: 'Umbrella / Excess', slug: 'umbrella-excess', desc: 'Additional liability limits above your underlying policies for catastrophic claims and large jury verdicts.' },
  { title: 'Employment Practices', slug: 'employment-practices', desc: 'Covers discrimination, harassment, wrongful termination, and wage disputes from current and former employees.' },
];

export default function CoverageSolutions() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="coverage" className="bg-brand" style={{ padding: '8rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Coverage Solutions</p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Comprehensive Coverage for Every Operation</h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>From garage liability to cyber protection, we provide the coverage lines that keep your automotive business compliant and protected.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {coverages.map((item) => (
            <Link key={item.title} href={`/coverage/${item.slug}/`} className="block border-2 border-ash/30 rounded-[2rem] p-8 group no-underline" style={{ background: 'rgba(255,255,255,0.04)', transition: 'all 0.24s' }}>
              <h3 className="text-stone font-bold mb-3 group-hover:text-gold" style={{ fontSize: '1.25rem', lineHeight: '1.5', transition: 'color 0.24s' }}>{item.title}</h3>
              <p className="text-cream font-light" style={{ fontSize: '0.85rem', lineHeight: '22px' }}>{item.desc}</p>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.16em] mt-4 inline-block opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.24s' }}>Learn More →</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/#contact" className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-stone hover:bg-stone hover:text-brand no-underline" style={{ padding: '0.8rem 1.8rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}>
            Discuss Your Coverage Needs
          </Link>
        </div>
      </div>
    </section>
  );
}

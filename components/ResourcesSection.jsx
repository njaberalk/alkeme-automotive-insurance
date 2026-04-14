'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const featuredResources = [
  { slug: 'automotive-insurance-cost', title: 'How Much Does Automotive Insurance Cost?', category: 'Guide', desc: 'Average costs by business type, pricing factors, and strategies to reduce premiums.' },
  { slug: 'garage-liability-guide', title: 'Understanding Garage Liability', category: 'Guide', desc: 'What it covers, required limits, and how it differs from general liability.' },
  { slug: 'garagekeepers-guide', title: 'Garagekeepers Insurance Guide', category: 'Guide', desc: 'Coverage forms explained and how to protect customer vehicles in your care.' },
  { slug: 'dealers-open-lot-guide', title: 'Dealers Open Lot Guide', category: 'Guide', desc: 'Protecting your inventory, deductible structures, and hail loss management.' },
  { slug: 'dealership-cyber-guide', title: 'Dealership Cybersecurity Guide', category: 'Guide', desc: 'FTC Safeguards Rule compliance, cyber threats, and insurance requirements.' },
  { slug: 'automotive-insurance-glossary', title: 'Automotive Insurance Glossary', category: 'Reference', desc: 'Key terms every dealer and shop operator should know.' },
];

export default function ResourcesSection() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="resources" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>
            Resources
          </p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>
            Automotive Insurance Guides & Tools
          </h2>
          <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            Expert resources to help you understand your coverage options, reduce costs, and stay compliant.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {featuredResources.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}/`}
              className="block border-2 border-ash rounded-[2rem] p-7 group no-underline hover:border-blue-dark"
              style={{ transition: 'all 0.24s' }}
            >
              <span className="text-blue-dark uppercase tracking-[0.12em] font-bold mb-3 block" style={{ fontSize: '0.65rem' }}>
                {resource.category}
              </span>
              <h3 className="text-brand font-bold mb-2 group-hover:text-blue-dark" style={{ fontSize: '1.05rem', lineHeight: '1.4', transition: 'color 0.24s' }}>
                {resource.title}
              </h3>
              <p className="text-brand/60" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                {resource.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

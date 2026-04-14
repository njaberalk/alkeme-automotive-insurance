'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Basic coverage metadata for cross-linking
const allCoverages = {
  'garage-liability': { title: 'Garage Liability', desc: 'Bodily injury and property damage from garage operations' },
  'garage-keepers': { title: 'Garagekeepers', desc: 'Customer vehicles in your care, custody, and control' },
  'dealers-open-lot': { title: 'Dealers Open Lot', desc: 'Vehicle inventory protection against theft, hail, and damage' },
  'general-liability': { title: 'General Liability', desc: 'Premises, products, and advertising injury coverage' },
  'workers-compensation': { title: 'Workers\' Compensation', desc: 'Employee injury wage and medical benefits' },
  'commercial-property': { title: 'Commercial Property', desc: 'Buildings, tools, equipment, and parts inventory' },
  'commercial-auto': { title: 'Commercial Auto', desc: 'Dealer plates, tow trucks, delivery, and loaners' },
  'cyber-liability': { title: 'Cyber Liability', desc: 'Customer data, DMS, and F&I data breach protection' },
  'umbrella-excess': { title: 'Umbrella / Excess', desc: 'Additional liability protection layer' },
  'employment-practices': { title: 'Employment Practices', desc: 'Discrimination, harassment, and wrongful termination' },
};

export default function RelatedCoverages({ slugs, title = 'Related Coverage' }) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className="bg-stone fade-in-view" style={{ padding: '5rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-8" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)' }}>{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {slugs.map((slug) => {
            const cov = allCoverages[slug];
            if (!cov) return null;
            return (
              <Link key={slug} href={`/coverage/${slug}/`} className="block border-2 border-ash rounded-[2rem] p-6 group no-underline hover:border-blue-dark" style={{ transition: 'all 0.24s' }}>
                <h3 className="text-brand font-bold mb-2 group-hover:text-blue-dark" style={{ fontSize: '1.1rem', transition: 'color 0.24s' }}>{cov.title}</h3>
                <p className="text-brand/60" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>{cov.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

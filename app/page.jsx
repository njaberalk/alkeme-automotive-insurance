import HomeContent from './HomeContent';

export const metadata = {
  title: 'Automotive Insurance Solutions',
  description: 'ALKEME Insurance Services provides specialized automotive insurance for dealerships, repair shops, and auto businesses. Coverage for garage liability, dealers open lot, garagekeepers, and more.',
  openGraph: {
    title: 'Automotive Insurance | ALKEME Insurance Services',
    description: 'Specialized automotive insurance for dealerships, repair shops, and auto businesses across all 50 states.',
    url: 'https://alkemeins.com/automotive/',
  },
};

export default function HomePage() {
  return (
    <>
      <meta name="author" content="ALKEME Insurance Services" />
      <meta property="article:published_time" content="2025-06-01T00:00:00Z" />
      <meta property="article:modified_time" content="2026-04-01T00:00:00Z" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceAgency',
            name: 'ALKEME Insurance Services',
            url: 'https://alkemeins.com',
            telephone: '+18559255363',
            email: 'info@alkemeins.com',
            description: 'ALKEME Insurance Services provides specialized automotive insurance solutions for dealerships, repair shops, and auto businesses across all 50 states.',
            areaServed: { '@type': 'Country', name: 'United States' },
            parentOrganization: {
              '@type': 'Organization',
              name: 'ALKEME Insurance Services',
              url: 'https://alkemeins.com',
            },
            foundingDate: '2003',
            numberOfEmployees: { '@type': 'QuantitativeValue', value: 100 },
            knowsAbout: ['Commercial Automotive Insurance', 'Dealership Insurance', 'Garagekeepers Insurance', 'Dealer Compliance'],
            hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional License', name: 'Licensed Insurance Brokerage' },
            serviceType: [
              'Commercial Automotive Insurance',
              'Dealership Insurance',
              'Repair Shop Insurance',
              'Dealers Open Lot Insurance',
              'Garage Liability Insurance',
              'Garagekeepers Coverage',
              'Automotive Business Insurance',
            ],
            citation: { '@type': 'CreativeWork', name: 'Insurance Information Institute', url: 'https://www.iii.org' },
            about: { '@type': 'Thing', name: 'Commercial Automotive Insurance' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What insurance does an auto dealership need?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'At minimum, most dealerships need garage liability, dealers open lot, garagekeepers, and workers compensation. We help you identify exactly what your operation requires based on your business type, inventory value, and service volume.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you insure both dealerships and repair shops?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We work with franchise dealerships, independent used car lots, repair shops, body shops, and other automotive businesses of all sizes. Our programs are customized to match each operation.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you help with manufacturer and lender compliance?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. We understand the insurance requirements that manufacturers, lenders, and licensing boards impose. We ensure your coverage aligns with all contractual obligations.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can I get a quote?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In most cases, we can provide an initial quote within 24 hours of receiving your completed information. For more complex accounts or large fleets, the process may take slightly longer to ensure we explore the best options across our carrier network.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer dealers open lot and garagekeepers coverage?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Dealers open lot protects your vehicle inventory, while garagekeepers protects customer vehicles in your care. We tailor both coverages to your specific values and preferences.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can coverage be customized for my business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Every program we place is built around your specific business. We consider your inventory, service volume, employees, and claims history to design a program at a competitive price.',
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Automotive Insurance Solutions',
            datePublished: '2025-06-01',
            dateModified: '2026-04-01',
            author: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
            publisher: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
          }),
        }}
      />
      <HomeContent />
    </>
  );
}

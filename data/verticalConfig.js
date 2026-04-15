export const verticalConfig = {
  id: 'automotive', label: 'Automotive Insurance',
  heading: 'Get an Automotive Insurance Quote',
  subtext: 'Answer a few quick questions and our automotive specialists will design coverage for your dealership or shop.',
  businessTypes: [
    { value: 'franchise-dealer', label: 'Franchise Dealership' },
    { value: 'independent-dealer', label: 'Independent Dealer' },
    { value: 'repair-shop', label: 'Repair Shop' },
    { value: 'body-shop', label: 'Body / Collision Shop' },
    { value: 'fleet-mgmt', label: 'Fleet Management' },
    { value: 'car-rental', label: 'Car Rental' },
  ],
  customQuestions: [
    { id: 'operation_type', label: 'What type of operation?', type: 'select', options: ['Franchise Dealer', 'Independent Dealer', 'Repair Shop', 'Body Shop', 'Fleet Mgmt', 'Car Rental'] },
    { id: 'vehicle_count', label: 'How many vehicles on lot?', type: 'select', options: ['Under 25', '25-100', '100-500', '500+'] },
    { id: 'revenue', label: 'Annual revenue?', type: 'select', options: ['Under $1M', '$1M-$5M', '$5M-$25M', '$25M+'] },
  ],
  coverageOptions: ['Garage Liability', 'Garagekeepers', 'Dealers Open Lot', 'General Liability', 'Workers\' Compensation', 'Commercial Property', 'Commercial Auto', 'Cyber Liability', 'Umbrella / Excess', 'Employment Practices'],
};

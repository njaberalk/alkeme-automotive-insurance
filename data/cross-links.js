// Cross-linking maps for dense internal linking
// Coverage -> which industries commonly need this coverage
export const coverageToIndustries = {
  'garage-liability': ['franchise-dealerships', 'used-car-dealers', 'auto-repair-shops', 'collision-body-shops'],
  'garage-keepers': ['franchise-dealerships', 'auto-repair-shops', 'collision-body-shops', 'auto-detailing'],
  'dealers-open-lot': ['franchise-dealerships', 'used-car-dealers', 'luxury-specialty-dealers'],
  'general-liability': ['parts-distributors', 'tire-shops', 'auto-detailing'],
  'workers-compensation': ['franchise-dealerships', 'auto-repair-shops', 'collision-body-shops', 'tire-shops'],
  'commercial-property': ['franchise-dealerships', 'collision-body-shops', 'parts-distributors'],
  'commercial-auto': ['parts-distributors', 'fleet-management', 'car-rental'],
  'cyber-liability': ['franchise-dealerships', 'used-car-dealers', 'fleet-management'],
  'umbrella-excess': ['franchise-dealerships', 'luxury-specialty-dealers', 'car-rental'],
  'employment-practices': ['franchise-dealerships', 'used-car-dealers', 'parts-distributors'],
};

// Coverage -> which resources are most relevant
export const coverageToResources = {
  'garage-liability': ['automotive-insurance-cost', 'garage-liability-guide', 'garagekeepers-guide'],
  'garage-keepers': ['garagekeepers-guide', 'automotive-insurance-cost'],
  'dealers-open-lot': ['dealers-open-lot-guide', 'automotive-insurance-cost'],
  'general-liability': ['automotive-insurance-cost', 'coi-guide'],
  'workers-compensation': ['automotive-insurance-cost', 'claims-guide'],
  'commercial-property': ['automotive-insurance-cost', 'claims-guide'],
  'commercial-auto': ['test-drive-liability-guide', 'automotive-insurance-cost'],
  'cyber-liability': ['dealership-cyber-guide', 'automotive-insurance-cost'],
  'umbrella-excess': ['automotive-insurance-cost', 'claims-guide'],
  'employment-practices': ['automotive-insurance-cost', 'automotive-insurance-glossary'],
};

// Industry -> top states for that industry
export const industryToStates = {
  'franchise-dealerships': ['texas', 'california', 'florida', 'ohio', 'pennsylvania'],
  'used-car-dealers': ['texas', 'florida', 'california', 'georgia', 'new-york'],
  'luxury-specialty-dealers': ['california', 'florida', 'new-york', 'texas', 'new-jersey'],
  'auto-repair-shops': ['texas', 'california', 'florida', 'ohio', 'michigan'],
  'collision-body-shops': ['california', 'texas', 'florida', 'pennsylvania', 'illinois'],
  'parts-distributors': ['michigan', 'ohio', 'texas', 'california', 'illinois'],
  'fleet-management': ['texas', 'california', 'georgia', 'illinois', 'florida'],
  'car-rental': ['florida', 'california', 'texas', 'new-york', 'nevada'],
  'tire-shops': ['texas', 'california', 'florida', 'ohio', 'georgia'],
  'auto-detailing': ['california', 'florida', 'texas', 'new-york', 'new-jersey'],
};

// Industry -> relevant resources
export const industryToResources = {
  'franchise-dealerships': ['automotive-insurance-cost', 'dealers-open-lot-guide', 'dealership-cyber-guide'],
  'used-car-dealers': ['automotive-insurance-cost', 'garage-liability-guide', 'garagekeepers-guide'],
  'luxury-specialty-dealers': ['dealers-open-lot-guide', 'automotive-insurance-cost'],
  'auto-repair-shops': ['garage-liability-guide', 'garagekeepers-guide', 'automotive-insurance-cost'],
  'collision-body-shops': ['garage-liability-guide', 'claims-guide', 'automotive-insurance-cost'],
  'parts-distributors': ['automotive-insurance-cost', 'coi-guide'],
  'fleet-management': ['automotive-insurance-cost', 'test-drive-liability-guide'],
  'car-rental': ['automotive-insurance-cost', 'claims-guide'],
  'tire-shops': ['garage-liability-guide', 'automotive-insurance-cost'],
  'auto-detailing': ['garagekeepers-guide', 'automotive-insurance-cost'],
};

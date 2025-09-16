
export interface Country {
  code: string;
  name: string;
  states: State[];
}

export interface State {
  code: string;
  name: string;
  cities: string[];
}




export const locationData: Country[] = [
  {
    code: 'US',
    name: 'United States',
    states: [
      {
        code: 'CA',
        name: 'California',
        cities: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'Oakland', 'Fresno']
      },
      {
        code: 'NY',
        name: 'New York',
        cities: ['New York City', 'Buffalo', 'Rochester', 'Albany', 'Syracuse', 'Yonkers']
      },
      {
        code: 'TX',
        name: 'Texas',
        cities: ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth', 'El Paso']
      },
      {
        code: 'FL',
        name: 'Florida',
        cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Tallahassee', 'Fort Lauderdale']
      }
    ]
  },
  {
    code: 'UK',
    name: 'United Kingdom',
    states: [
      {
        code: 'EN',
        name: 'England',
        cities: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Sheffield']
      },
      {
        code: 'SC',
        name: 'Scotland',
        cities: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Stirling', 'Perth', 'Dundee']
      },
      {
        code: 'WA',
        name: 'Wales',
        cities: ['Cardiff', 'Swansea', 'Newport', 'Bangor', 'Wrexham', 'Merthyr Tydfil']
      }
    ]
  },
  {
    code: 'CA',
    name: 'Canada',
    states: [
      {
        code: 'ON',
        name: 'Ontario',
        cities: ['Toronto', 'Ottawa', 'Hamilton', 'London', 'Kitchener', 'Windsor']
      },
      {
        code: 'QC',
        name: 'Quebec',
        cities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke']
      },
      {
        code: 'BC',
        name: 'British Columbia',
        cities: ['Vancouver', 'Victoria', 'Surrey', 'Burnaby', 'Richmond', 'Abbotsford']
      }
    ]
  },
  {
    code: 'AU',
    name: 'Australia',
    states: [
      {
        code: 'NSW',
        name: 'New South Wales',
        cities: ['Sydney', 'Newcastle', 'Wollongong', 'Central Coast', 'Maitland', 'Albury']
      },
      {
        code: 'VIC',
        name: 'Victoria',
        cities: ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Frankston', 'Mildura']
      },
      {
        code: 'QLD',
        name: 'Queensland',
        cities: ['Brisbane', 'Gold Coast', 'Townsville', 'Cairns', 'Toowoomba', 'Rockhampton']
      }
    ]
  },
  {
    code: 'IN',
    name: 'India',
    states: [
      {
        code: 'MH',
        name: 'Maharashtra',
        cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur']
      },
      {
        code: 'KA',
        name: 'Karnataka',
        cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga']
      },
      {
        code: 'DL',
        name: 'Delhi',
        cities: ['New Delhi', 'Delhi Cantonment', 'Karol Bagh', 'Rohini', 'Dwarka', 'Janakpuri']
      }
    ]
  }
];

export const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' }
];

export const maritalStatusOptions = [
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married' },
  { value: 'divorced', label: 'Divorced' },
  { value: 'widowed', label: 'Widowed' },
  { value: 'separated', label: 'Separated' },
  { value: 'domestic-partnership', label: 'Domestic Partnership' },
];

export const dependentsOptions = [
  { value: '0', label: '0 dependents' },
  { value: '1', label: '1 dependent' },
  { value: '2', label: '2 dependents' },
  { value: '3', label: '3 dependents' },
  { value: '4', label: '4 dependents' },
  { value: '5', label: '5 dependents' },
  { value: '6+', label: '6+ dependents' },
];

export const employmentStatusOptions = [
  { value: 'unemployed', label: 'Unemployed' },
  { value: 'part-time', label: 'Part-time employed' },
  { value: 'full-time', label: 'Full-time employed' },
  { value: 'self-employed', label: 'Self-employed' },
  { value: 'contractor', label: 'Independent contractor' },
  { value: 'student', label: 'Student' },
  { value: 'retired', label: 'Retired' },
  { value: 'disabled', label: 'Unable to work (disabled)' },
  { value: 'homemaker', label: 'Homemaker' },
];

export const monthlyIncomeOptions = [
  { value: '0', label: '$0' },
  { value: '1-500', label: '$1 - $500' },
  { value: '501-1000', label: '$501 - $1,000' },
  { value: '1001-1500', label: '$1,001 - $1,500' },
  { value: '1501-2000', label: '$1,501 - $2,000' },
  { value: '2001-2500', label: '$2,001 - $2,500' },
  { value: '2501-3000', label: '$2,501 - $3,000' },
  { value: '3001-4000', label: '$3,001 - $4,000' },
  { value: '4001-5000', label: '$4,001 - $5,000' },
  { value: '5001+', label: '$5,001+' },
];

export const housingStatusOptions = [
  { value: 'own-mortgage', label: 'Own with mortgage' },
  { value: 'own-outright', label: 'Own outright' },
  { value: 'rent-private', label: 'Rent (private landlord)' },
  { value: 'rent-social', label: 'Rent (social/public housing)' },
  { value: 'living-family', label: 'Living with family/friends' },
  { value: 'temporary', label: 'Temporary accommodation' },
  { value: 'homeless', label: 'Homeless/shelter' },
  { value: 'other', label: 'Other' },
];

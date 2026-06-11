export type Property = 'Love' | 'Wealth' | 'Health' | 'Protection' | 'Clarity' | 'Energy';
export type Color = 'Red' | 'Blue' | 'Green' | 'Purple' | 'Clear' | 'Yellow' | 'Black' | 'Pink';
export type Zodiac = 'Aries' | 'Taurus' | 'Gemini' | 'Cancer' | 'Leo' | 'Virgo' | 'Libra' | 'Scorpio' | 'Sagittarius' | 'Capricorn' | 'Aquarius' | 'Pisces';
export type Chakra = 'Root' | 'Sacral' | 'Solar Plexus' | 'Heart' | 'Throat' | 'Third Eye' | 'Crown';
export type Budget = 'Low' | 'Medium' | 'High';

export interface Gemstone {
  id: string;
  name: string;
  description: string;
  color: Color;
  properties: Property[];
  zodiacs: Zodiac[];
  chakras: Chakra[];
  budget: Budget;
  imageUrl: string;
}

export interface UserPreferences {
  color?: Color;
  property?: Property;
  zodiac?: Zodiac;
  chakra?: Chakra;
  budget?: Budget;
}

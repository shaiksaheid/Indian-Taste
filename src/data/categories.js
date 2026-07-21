// Category definitions mapped to recipe id ranges
export const categories = [
  { slug: 'sweets', name: 'Sweets', range: [1, 23], icon: '/icons/sweets.png'},
  { slug: 'rice-chapati', name: 'Rice Dishes & Chapati', range: [24, 32], icon: '/icons/ricedishes.png' },
  { slug: 'snacks', name: 'Snacks', range: [33, 60], icon: '/icons/snacks.png' },
  { slug: 'chutneys', name: 'Chutneys', range: [61, 98], icon: '/icons/chutneys.png' },
  { slug: 'pickles-condiments', name: 'Pickles & Condiments', range: [99, 113], icon: '/icons/pickles.png' },
  { slug: 'vegetable-curries', name: 'Vegetable Dishes & Curries', range: [114, 180], icon: '/icons/vegetablecurries.png' },
  { slug: 'dosas', name: 'Dosas', range: [181, 190], icon: '/icons/dosas.png' },
  { slug: 'masala-powders', name: 'Masala Powders', range: [191, 200], icon: '/icons/masalapowders.png' },
  { slug: 'pappu-stew', name: 'Pappus & Stew', range: [201, 236], icon: '/icons/pappustew.png' },
  { slug: 'raitas', name: 'Raitas', range: [237, 242], icon: '/icons/raitas.png' },
];

export function categoryForId(id) {
  return categories.find((c) => id >= c.range[0] && id <= c.range[1]);
}

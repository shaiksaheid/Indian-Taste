// Kitchen tips & suggestions from P. V. Ramana.
// One tip is shown per calendar day (rotates automatically every 24 hours).
export const tips = [
  'To retain the freshness of curry leaves, clean the leaves and then separate leaves from the branches. Pack them in a zip-lock bag and store the contents in the refrigerator.',
  'Fry semolina before preparing Upma to avoid formation of lumps.',
  'Wash hands with tamarind extract to prevent irritation after cutting Yam.',
  'Add a small piece of jaggery to sesame oil to retain the freshness of the oil for many days.',
  'Prepare curd or yogurt faster by making it in a casserole (hot box).',
  'Adding water to eggplant or aubergine curry reduces its taste. To avoid this, place a lid over the pan and pour half a glass of water over the lid so the vapor formed within the vessel helps cook the contents using very little oil and no water.',
  'While preparing jaggery or sugar syrup, strain the contents before the syrup is formed to remove solid particles or small amounts of impurities in jaggery that settle at the bottom of the syrup container.',
  'Cut the central part of the banana stem into pieces and immediately add them to thin buttermilk to avoid the pieces turning black.',
  'Slightly ripened coccinia are not good for preparing curry, hence cut them into round pieces and sundry them to fry later as savory.',
  'Add salt to bitter gourd and coccinia and fry them after 10 minutes to fry faster.',
  'Before cutting plantains, rub oil on both hands to avoid staining hands.',
  'Soak onions for a few minutes in a bowl of water to help peel them faster.',
  'Spread oil or ghee on left-over chapattis and fry them on a heated pan (instead of heating them in a microwave). They will be as good as freshly prepared ones.',
  'Left-over rice can be made into tamarind rice, or add curd or yogurt and fried seasoning to make curd rice.',
  'When tomatoes are over ripe or soggy (but not yet spoilt), boil them (without adding water) and grind them in a food processor by adding salt, then store the contents in the freezer. This can be used in place of tomatoes in many recipes.',
  'To avoid old milk from curdling or spoiling, add a pinch of baking soda while boiling.',
  'Soak tamarind in water for an hour and squeeze to get the paste. Cook the paste and store in the refrigerator for easy use in the future.',
  'Do not throw away used lemon rinds. Instead, place them in the pressure cooker while cooking to clean up the blackened bottom and give a sparkling new look to the pressure cooker.',
  'Make a habit of keeping the flame on your stove only at medium or low - if you must switch to high, do so only for a short period. This improves the taste of your cooking, avoids burning dishes, and reduces usage of cooking gas or electricity.',
  'First prepare the pressure cooker with rice, dals and vegetables, and let it start cooking. You can prepare other items while the pressure cooker is cooking. This saves both time and fuel.',
  'Try to prepare items such as sambar powder, rasam powder, curry powder, and sesame seed powder on the weekends. While some of these powders are available commercially, homemade powders are healthier, less expensive, fresher, and of higher quality.',
  'When cooking leafy vegetables, cut them first and then cook them, adding water only as required. Adding more water initially and then draining it away will flush away many of the vitamins and nutrients from the dish.',
  'Add a small amount of salt immediately to lemon juice to avoid the juice turning bitter.',
  'Add salt to left-over mustard seed powder and store in the refrigerator to retain its freshness for long.',
  'Sprinkle cold water on the roasted eggplant or aubergine to peel its skin easily.',
  'While frying colacasia, add salt, red chilli powder and 1 tbsp rice flour to the contents to retain their crispiness for hours.',
  'To retain the freshness of coriander leaves and fenugreek leaves for long, untie the bunches, cut off their roots and immediately seal them in a zip-lock bag. Now store the bag in the refrigerator. The leaves will remain fresh for many days.',
];

// Returns a stable index for "today" so the same tip shows all day
// and changes automatically at midnight (local time).
export function tipIndexForToday(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diffMs = date - start;
  const dayOfYear = Math.floor(diffMs / 86400000);
  return dayOfYear % tips.length;
}

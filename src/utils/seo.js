const DEFAULT_TITLE = 'Indian Taste — Andhra Vegetarian Recipes by P. V. Ramana';
const DEFAULT_DESCRIPTION =
  '242 authentic Andhra vegetarian recipes by P. V. Ramana — sweets, pickles, dosas, ' +
  'pappu, and more, with ingredients, step-by-step procedure, and an ingredient-based search.';

// Updates the document title and meta description for the current page.
// Call with no arguments (or omit a field) to fall back to the site defaults.
export function setPageMeta({ title, description } = {}) {
  document.title = title || DEFAULT_TITLE;

  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', description || DEFAULT_DESCRIPTION);
}

const JSONLD_SCRIPT_ID = 'recipe-jsonld';

// Injects (or updates) a schema.org Recipe JSON-LD <script> tag for the
// current recipe, so Google can show rich recipe results in search.
export function setRecipeJsonLd(recipe, categoryName) {
  const data = {
    '@context': 'https://schema.org/',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.subtitle || `${recipe.title} — an Andhra vegetarian recipe.`,
    author: {
      '@type': 'Person',
      name: 'P. V. Ramana',
    },
    recipeCategory: categoryName || undefined,
    recipeCuisine: 'Andhra, Indian',
    recipeIngredient: (recipe.ingredients || []).map((ing) =>
      ing.quantity ? `${ing.name} - ${ing.quantity}` : ing.name
    ),
    recipeInstructions: (recipe.procedure || []).map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: step,
    })),
  };

  if (recipe.note) {
    data.description += ` Note: ${recipe.note}`;
  }

  let script = document.getElementById(JSONLD_SCRIPT_ID);
  if (!script) {
    script = document.createElement('script');
    script.id = JSONLD_SCRIPT_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

// Removes the Recipe JSON-LD tag (call when leaving a recipe page).
export function clearRecipeJsonLd() {
  const script = document.getElementById(JSONLD_SCRIPT_ID);
  if (script) script.remove();
}

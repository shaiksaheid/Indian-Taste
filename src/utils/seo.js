const DEFAULT_TITLE = 'Andhra Vegetarian Recipes | South Indian & Telugu Cooking by P. V. Ramana';
const DEFAULT_DESCRIPTION =
  '242 authentic South Indian & Andhra recipes by P. V. Ramana — Telugu-style sweets, ' +
  'pickles, dosas, curries, pappu and more. Search any recipe by name or ingredient.';

// Updates the document title, meta description, and matching Open Graph /
// Twitter tags for the current page. Call with no arguments (or omit a
// field) to fall back to the site defaults.
export function setPageMeta({ title, description } = {}) {
  const finalTitle = title || DEFAULT_TITLE;
  const finalDescription = description || DEFAULT_DESCRIPTION;

  document.title = finalTitle;
  setMetaByName('description', finalDescription);
  setMetaByProperty('og:title', finalTitle);
  setMetaByProperty('og:description', finalDescription);
  setMetaByName('twitter:title', finalTitle);
  setMetaByName('twitter:description', finalDescription);
}

function setMetaByName(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setMetaByProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
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
    recipeCuisine: 'South Indian, Andhra, Telugu, Indian',
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

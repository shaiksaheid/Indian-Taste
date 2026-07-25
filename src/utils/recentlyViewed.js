const STORAGE_KEY = 'indian-taste-recently-viewed';
const MAX_ITEMS = 8;

export function getRecentlyViewed() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

// Adds a recipe id to the front of the recently-viewed list, removing any
// earlier occurrence of the same id and capping the list at MAX_ITEMS.
export function addRecentlyViewed(id) {
  try {
    const current = getRecentlyViewed().filter((existingId) => existingId !== id);
    const updated = [id, ...current].slice(0, MAX_ITEMS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return getRecentlyViewed();
  }
}

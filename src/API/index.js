const API_URL = 'http://localhost:4500/api'

export async function fetchCats() {
    try {
      const response = await fetch(`${API_URL}/cats`)
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}

// const API_URL = 'http://localhost:4500/api'
const ENV_VAR = 'https://freecats.onrender.com/api'
const API_URL = ENV_VAR || 'http://localhost:4500/api'

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

export async function fetchCatById(id, token) {
    try {
        const response = await fetch(`${API_URL}/cats/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await response.json();
        console.log(result);
        return result
    } catch(err) {
        console.error(err);
    }
}

export async function deleteCatById(id, token) {
    try {
        const response = await fetch(`${API_URL}/cats/${id}`,{
            //attach body to send whole cart array to backend then loop over it in the backend to delete
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            // body: JSON.stringify(cart)
        })
        const result = await response.json();
        console.log(result);
        return result
    } catch(err) {
        console.error(err);

    }
}


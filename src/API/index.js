
const API_URL = 'http://localhost:4500/api'
// const API_URL = 'https://freecats.onrender.com/api'

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

// export async function getUserByUsername(username) {

//     try {
//         const response = await fetch(`${API_URL}/users/users`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(username)
//         })
//         const result = await response.json();
//         // console.log(result.username, "result")
//         if (result) {
//             return true;
//         }
       
//         // console.log(result, "result")
//         // console.log(username, "username")
//         // console.log(users.username, "result.username")
//         // if (username === result.username) {
//         //     return true;
//         // } else {
//         //     return false;
//         // }  
//     } catch(err) {
//         console.error(err);
//     }
// }
export async function createUser(data) {
    try {
        const res = await fetch('http://localhost:8080/users/createUser', {
            method: 'POST',
            headers: { 'Accept': 'application/jsons', 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await res.json();
    } catch (err) { console.log(err); }
}
export async function updateUserByID(data) {
    try {
        const res = await fetch('http://localhost:8080/users/updateUserByID', {
            method: 'PATCH',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await res.json();
    } catch (err) { console.log(err); }
}
export const getUsers = async () => {
    try {
        const res = await fetch('http://localhost:8080/users/getAllUsers', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        });
        return await res.json();
    } catch (err) { }
}
export async function getUserByID(id) {
    try {
        const res = await fetch('http://localhost:8080/users/getUserByID', {
            method: 'GET',
            headers: {'Accept': 'application/json', 'Content-type': 'application/json'},
            body: JSON.stringify(id)
        });
        return await res.json();
    } catch (err) { }
}
export const getCurrentUser = async () => {
    try {
        const res = await fetch('http://localhost:8080/users/getCurrentUser', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        });
        return await res.json();
    } catch (err) { }
}
function onButtonClick(){
    const btn = document.getElementById('btn');
      btn.addEventListener('click', () => {
        const form = document.getElementById('form');
  
        if (form.style.display === 'none') {
          // this SHOWS the form
          form.style.display = 'block';
        } else {
          //  this HIDES the form
          form.style.display = 'none';
        }
      });
    }


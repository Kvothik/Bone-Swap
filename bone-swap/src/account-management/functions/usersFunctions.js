export async function createUsers(data) {
    try {
        const res = await fetch('http://localhost:8080/users/createUsers', {
            method: 'POST',
            headers: { 'Accept': 'application/jsons', 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await res.json();
    } catch (err) { console.log(err); }
}
export async function updateUserByID(data) {
    try {
        const res = await fetch('http://localhost:8080/users/updateUsersByID', {
            method: 'PATCH',
            headers: { 'Accept': 'application/jsons', 'Content-Type': 'application/json' },
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
export const getUserByID = async () => {
    try {
        const res = await fetch('http://localhost:8080/users/getUserByID', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        });
        return await res.json();
    } catch (err) { }
}



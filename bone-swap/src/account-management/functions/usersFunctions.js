export async function createUsers(usersObj) {
    try {
        const res = await fetch('http://localhost:8080/users/createUsers', {
            method: 'POST',
            headers: { 'Accept': 'application/jsons', 'Content-Type': 'application/json' },
            body: JSON.stringify(usersObj)
        });
        return await res.json();
    } catch (err) { console.log(err); }
}
export const getUser = async (id) => {
    try {
        const res = await fetch('http://localhost:8080/users/getUser', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        });
        return await res.json();
    } catch (err) { }
}

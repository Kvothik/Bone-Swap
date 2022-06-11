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
export const getUserbyID = async (id) => {
    try {
        const res = await fetch('http://localhost:8080//', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                // will need this if we setup user auth/permissions
                // 'Authorization': 'Bearer' + credentials
            },
        });
        return await res.json();
    } catch (err) { }
}

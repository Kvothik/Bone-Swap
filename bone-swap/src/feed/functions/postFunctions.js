export const getAllPosts = async () => {
    try {
        const res = await fetch('http://localhost:8080/posts/getAllPosts', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        });
        return await res.json();
    } catch (err) { }
}

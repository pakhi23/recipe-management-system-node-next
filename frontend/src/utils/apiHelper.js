export const apiRequest = async (url, method, body) => {
    // request header define krte he  , json format specify kiya he
    const headers = { 'Content-Type': 'appplication/json' };

    // `fetch` function se API ko request bheji ja rahi hai with specified method aur body.
    const response = await fetch(url, {
        method, headers, body: JSON.stringify(body), // bodyk o jsopn format me convert krke send krte he
    });
    // resposn successfull nahi heto errro through kiya he
    if (!response.ok) {
        const errorData = await response.json(); // server se error message fetch kar rahe he
        if (errorData.error && Array.isArray(errorData.error)) {
            // If validation errors exist, throw them to be handled by the caller
            throw errorData.error;
        }
    }
    throw new Error(errorData.message || 'an error occurred');
}

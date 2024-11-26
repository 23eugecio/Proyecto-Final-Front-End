
export const GET = async (URL_API) => {
    try {
        const response = await fetch(URL_API, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }
    catch (error) {
        console.error('GET request error:', error);
        throw error;
    }
};

export const POST = async (URL_API, body) => {
    try {
        const response = await fetch(URL_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }
    catch (error) {
        console.error('POST request error:', error);
        throw error;
    }
};

export const PUT = async (URL_API, body) => {
    try {
        const response = await fetch(URL_API, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }
    catch (error) {
        console.error('PUT request error:', error);
        throw error;
    }
};

export const DELETE = async (URL_API) => {
    try {
        const response = await fetch(URL_API, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }
    catch (error) {
        console.error('DELETE request error:', error);
        throw error;
    }
};


const getUnnauthenticatedHeaders = () =>{
	const unnauthenticatedHeaders = new Headers()
	unnauthenticatedHeaders.set('Content-Type', 'application/json')
	unnauthenticatedHeaders.set('x-api-key', '8e849ec1-2977-404c-88c0-c8d2246d498f')
	return unnauthenticatedHeaders
}

const getAuthenticatedHeaders = () => {
	const authenticatedHeaders = new Headers()
	authenticatedHeaders.set('Content-Type', 'application/json')
	authenticatedHeaders.set('x-api-key', '8e849ec1-2977-404c-88c0-c8d2246d498f')
	authenticatedHeaders.set('Authorization', 'Bearer ' + sessionStorage.getItem('access_token'))
	return authenticatedHeaders
}



export {getAuthenticatedHeaders, getUnnauthenticatedHeaders}



export const POST = async (URL_API, params) => {
    try {
        const response = await fetch(URL_API, {
            method: 'POST',
            ...params
        });
        return response.json();
    } 
    catch (error) {
        console.log(error);
        throw error;
    }
};


export const GET = async (URL_API, params) => {
    try {
        const response = await fetch(URL_API, {
            method: 'GET',
            ...params
        });
        return response.json();
    } 
    catch (error) {
        console.log(error);
        throw error;
    }
};


export const PUT = async (URL_API, params) => {
    try {
        const response = await fetch(URL_API, {
            method: 'PUT',
            ...params, 
            body: params.body ? JSON.stringify(params.body) : null 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('PUT request error:', error);
        throw error;
    }
};


export const DELETE = async (URL_API, params = {}) => {
    try {
        const response = await fetch(URL_API, {
            method: 'DELETE',
            ...params 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('DELETE request error:', error);
        throw error;
    }
};


const getUnnauthenticatedHeaders = () => {
    const unnauthenticatedHeaders = new Headers();
    unnauthenticatedHeaders.set('Content-Type', 'application/json');
    unnauthenticatedHeaders.set('x-api-key', '585edf50-eee2-4a78-aaae-901249953825'); 
    return unnauthenticatedHeaders;
};

const getAuthenticatedHeaders = () => {
    const authenticatedHeaders = new Headers();
    authenticatedHeaders.set('Content-Type', 'application/json');
    authenticatedHeaders.set('x-api-key', '585edf50-eee2-4a78-aaae-901249953825'); 
    authenticatedHeaders.set('Authorization', 'Bearer ' + sessionStorage.getItem('access_token')); 
    return authenticatedHeaders;
};

export { getAuthenticatedHeaders, getUnnauthenticatedHeaders };













































































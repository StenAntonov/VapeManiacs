const baseUrl = 'http://localhost:3030';

export async function login(email,password) {
    const response = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify({email,password})
    });

    let result = await response.json();

    if(response.ok) {
        return result;
    }else {
        throw result.message;
    }

    // sessionStorage.setItem('username', result.username);
    // sessionStorage.setItem('authToken', result.accessToken);
    // sessionStorage.setItem('userId', result._id);
}

export async function register(email,password) {
    const response = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify({email,password})
    });

    let result = await response.json();

    if(response.ok) {
        return result;
    }else {
        throw result.message;
    }
};

// export async function logout() {
//     const result = await get(settings.host + '/users/logout');

//     sessionStorage.removeItem('username');
//     sessionStorage.removeItem('authToken');
//     sessionStorage.removeItem('userId');

//     return result;
// }
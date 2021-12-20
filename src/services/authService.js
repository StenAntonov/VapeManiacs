const baseUrl = 'http://localhost:3030/jsonstore/users';

export async function login(userData) {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    let result = await response.json();

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);

    return result;
}

// export const create = async (vapeData) => {
//     let response = await fetch(`${baseUrl}/jsonstore/vapes`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(vapeData)
//     });

//     let result = await response.json();

//     return result;
// };

export async function register(email, username, password) {
    const result = await post(settings.host + '/users/register', { email, username, password });

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function logout() {
    const result = await get(settings.host + '/users/logout');

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');

    return result;
}
const baseUrl = 'http://localhost:3030';

export function getAll() {
    return fetch(`${baseUrl}/data/vapes?sortBy=_createdOn%20desc`)
        .then(res => res.json());
}

export const getOne = (id) => fetch(`${baseUrl}/data/vapes/${id}`).then(res => res.json());

export function getMyVapes(userId) {
    return fetch(`${baseUrl}/data/vapes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
        .then(res => res.json());
}

export function getBlogsCount() {
    return fetch(`${baseUrl}/data/vapes?count`)
        .then(res => res.json());
}

export const create = async (vapeData, token) => {
    let response = await fetch(`${baseUrl}/data/vapes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(vapeData)
    });

    let result = await response.json();

    return result;
};
export const edit = (vapeData, token, id) => {
    return fetch(`${baseUrl}/data/vapes/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(vapeData)
    });
};

export const del = (vapeId, token) => {
    return fetch(`${baseUrl}/data/vapes/${vapeId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};
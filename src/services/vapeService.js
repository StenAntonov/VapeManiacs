const baseUrl = 'http://localhost:3030';

export function getAll() {
    return fetch(`${baseUrl}/jsonstore/vapes?sortBy=_createdOn%20desc`)
        .then(res => res.json());
}

export const getOne = (id) => fetch(`${baseUrl}/jsonstore/vapes/${id}`).then(res => res.json());

export function getMyVapes(userId) {
    return fetch(`${baseUrl}/data/vapes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
        .then(res => res.json());
}

export function getLatest() {
    return fetch(`${baseUrl}/data/latest?sortBy=_createdOn%20desc`)
        .then(res => res.json());
}

export const create = async (vapeData) => {
    let response = await fetch(`${baseUrl}/jsonstore/vapes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(vapeData)
    });

    let result = await response.json();

    return result;
};
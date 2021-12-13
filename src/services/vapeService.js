const baseUrl = 'http://localhost:3030/data';

export function getAll () {
    return fetch(`${baseUrl}/vapes?sortBy=_createdOn%20desc`)
    .then(res => res.json());
}

export const getOne = (id) => fetch(`${baseUrl}/latest/${id}`).then(res => res.json());

export function getLatest () {
    return fetch(`${baseUrl}/latest?sortBy=_createdOn%20desc`)
    .then(res => res.json());
}
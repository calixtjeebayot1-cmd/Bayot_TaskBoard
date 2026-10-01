const API_URL = 'http://localhost:8000/api';

export async function api(path, { method = 'GET', body } = {}) {
    const token = localStorage.getItem('token');

    const res = await fetch(`${API_URL}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...(token && {
                Authorization: `Bearer ${token}`
            }),
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (res.status === 204) {
        return null;
    }

    const data = await res.json();

    if (!res.ok) {
        throw data;
    }

    return data;
}
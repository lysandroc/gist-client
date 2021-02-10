const fetchAPI = async (url: string): Promise<Response> => {
    const h = new Headers({ Authorization: 'token a20863eeec5bd33debe630917d8e15e90440288a' });
    const response = await fetch(url, { headers: h });

    if (!response.ok) throw new Error(response.statusText);

    return response;
};

export const fetchValue = async <T>(url: string): Promise<T> => {
    const res = await fetchAPI(url);

    const result: T = await res.json();

    return result;
};

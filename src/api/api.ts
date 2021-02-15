const fetchAPI = async (url: string): Promise<Response> => {
    const response = await fetch(url);

    if (!response.ok) throw new Error(response.statusText);

    return response;
};

export const fetchValue = async <T>(url: string): Promise<T> => {
    const res = await fetchAPI(url);

    const result: T = await res.json();

    return result;
};

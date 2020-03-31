import fetch from 'node-fetch'

export const BASE_URL = process.env.TR_BASE_URL;

export const getToken = async () => {
    const result: any = await fetch(`${BASE_URL}/auth/token`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            'username': process.env.TR_USERNAME,
            'password': process.env.TR_PASSWORD,
            'grant_type': 'password'
        }),
    })
        .then(r => r.json())
        .catch(error => error)

    return result.access_token;
}

export const headersWithToken = async () => ({
    'content-type': 'application/json',
    authorization: `Bearer ${await getToken()}`,
})

export const get = async (uri: string): Promise<any> => {
    const response: any = await fetch(`${BASE_URL}/${uri}`, {
        headers: await headersWithToken()
    })

    const { data } = await response.json()

    return data
}

export const post = async (uri: string, body: any, method: 'POST' | 'PATCH' = 'POST'): Promise<any> => {
    const response: any = await fetch(`${BASE_URL}/${uri}`, {
        method,
        headers: await headersWithToken(),
        body: JSON.stringify(body),
    })

    const { data, error } = await response.json()

    return data || error
}

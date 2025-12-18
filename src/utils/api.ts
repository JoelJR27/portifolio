type FetchOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: unknown
    tags?: string[]
    cache?: RequestCache
}

export async function api<T>(
    endpoint: string,
    {
        method = 'GET',
        body,
        tags,
        cache = 'force-cache'
    }: FetchOptions = {}
    
): Promise<T> {
    const res = await fetch(`${process.env.API_URL}${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : undefined,
        cache,
        next: tags ? { tags } : undefined
    })

    if (!res.ok) {
        throw new Error(`API error: ${endpoint}`)
    }

    const data = await res.json()
    return data.data
}

export interface FetchResponse<E> {
    status: string,
    data: E,
    details: unknown
}
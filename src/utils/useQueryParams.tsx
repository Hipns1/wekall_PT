export const useQueryParams = () => {
    const queryParams = {}

    const queryString = window.location.search

    const params = new URLSearchParams(queryString)

    for (const [key, value] of params.entries()) {
        queryParams[key] = value
    }

    return queryParams
}

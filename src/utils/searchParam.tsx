export const searchParam = (key: string, value: string, navigate: any) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(key, value)
    navigate(`?${searchParams.toString()}`)
}

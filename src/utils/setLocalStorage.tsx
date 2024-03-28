export const setLocalStorage = (key: string, data: string) => {
    const existingKey = localStorage.getItem(key)
    if (existingKey === null) {
        localStorage.setItem(key, JSON.stringify(data))
    } else {
        localStorage.setItem(key, JSON.stringify(data))
    }
}

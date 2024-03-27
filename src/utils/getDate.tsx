export function getDate() {
    var today = new Date()
    var firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
    var lastDay = new Date()

    return {
        startDateToday:
            firstDay.getFullYear() +
            '-' +
            (firstDay.getMonth() + 1).toString().padStart(2, '0') +
            '-' +
            firstDay.getDate().toString().padStart(2, '0'),
        endDateToday:
            lastDay.getFullYear() +
            '-' +
            (lastDay.getMonth() + 1).toString().padStart(2, '0') +
            '-' +
            lastDay.getDate().toString().padStart(2, '0'),
    }
}

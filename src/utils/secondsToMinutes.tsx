export function secondsToMinutes(seconds: number) {
    seconds = Math.floor(seconds) // Convertir a entero
    var minutes = Math.floor(seconds / 60)
    var remainingSeconds = seconds % 60

    var minutesStr = minutes.toString().padStart(2, '0')
    var secondsStr = remainingSeconds.toString().padStart(2, '0')

    return minutesStr + ':' + secondsStr
}

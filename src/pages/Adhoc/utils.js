export function getFormatTime(minutes) {
    let wholeMinutes = Math.floor(minutes);
    let seconds = Math.round((minutes - wholeMinutes) * 60);
    let days = Math.floor(wholeMinutes / 1440);  // 1440 minutes in a day
    let hours = Math.floor((wholeMinutes % 1440) / 60);
    let mins = wholeMinutes % 60;
    let result = '';
    result = (days > 0 ? `${days}d ` : '0d') + (hours > 0 ? `${hours}h ` : '0h') + (mins > 0 ? `${mins}m ` : '0m') + (seconds > 0 ? `${seconds}s` : '0s');
    if (result === '') {
        result = `${seconds}s`;
    }
    return result.trim();
}
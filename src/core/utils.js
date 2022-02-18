export function capitalize(string) {
    if (typeof string !== 'string') {
        return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function range(start, end) {
    if (start > end) {
        [end, start] = [start, end];
    }
    const length = end - start + 1;
    return new Array(length)
        .fill('')
        .map((_, idx) => start + idx);
}

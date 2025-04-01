export default function two_crystal_balls(breaks: boolean[]): number {
    let n = breaks.length;
    let i = 0;
    let j = 0;
    let result = -1;

    for (i; i < n; i += Math.floor(Math.sqrt(breaks.length))) {
        if (breaks[i]) {
            i = Math.floor(i - Math.floor(Math.sqrt(breaks.length)));
            break;
        }
    }

    for (j = i; j < n; j++) {
        if (breaks[j]) {
            result = j;
            break;
        }
    }

    return result;
}

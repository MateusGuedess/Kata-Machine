export default function two_crystal_balls(breaks: boolean[]): number {
    let j = 0;
    let i = 0;
    for (i; i < breaks.length; i = i + Math.sqrt(breaks.length)) {
        if (breaks[i] === true) {
            break;
        }
        j = i;
    }

    for (j; j < i; j++) {
        if (breaks[j] === true) {
            return j;
        }
    }

    return -1;
}

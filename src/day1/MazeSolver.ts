function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
): boolean {
    // 1. Base Case
    // off the map
    if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || maze.length) {
        return false;
    }

    // on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // got where we want to go
    if (curr.x === end.x && curr.y === end.y) {
        return true;
    }

    // already seen
    if (seen[curr.y][curr.x]) {
        return false;
    }
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {}

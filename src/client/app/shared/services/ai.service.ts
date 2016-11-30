
// COMP MOVE AI DETECTS IF THERE ARE TWO IN A ROW NEXT TO AN EMPTY CELL AND PLACES MOVE THERE
export function whatTheNextMove(grid: any[], human: string) {

    const [a1, a2, a3, b1, b2, b3, c1, c2, c3] = grid;

    if (a1 === '' && ((a3 === human && a2 === human) || (c3 === human && b2 === human) || (c1 === human && b1 === human))) {
        return 0;
    }

    if (a2 === '' && ((a1 === human && a3 === human) || (c2 === human && b2 === human))) {
        return 1;
    }

    if (a3 === '' && ((a1 === human && a2 === human) || (c1 === human && b2 === human) || (c3 === human && b3 === human))) {
        return 2;
    }

    if (c3 === '' && ((c1 === human && c2 === human) || (a1 === human && b2 === human) || (a3 === human && b3 === human))) {
        return 8;
    }

    if (c1 === '' && ((c3 === human && c2 === human) || (a3 === human && b2 === human) || (a1 === human && b1 === human))) {
        return 6;
    }

    if (c2 === '' && ((c3 === human && c1 === human) || (a2 === human && b2 === human))) {
        return 7;
    }

    if (b1 === '' && ((b3 === human && b2 === human) || (a1 === human && c1 === human))) {
        return 3;
    }

    if (b3 === '' && ((a3 === human && c3 === human) || (b2 === human && b1 === human))) {
        return 5;
    }

    if (b2 === '' && ((a3 === human && c1 === human) || (c3 === human && a1 === human) || (b3 === human && b1 === human)
        || (c2 === human && a2 === human))) {
        return 4;
    }
    // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
    if (b2 === '') {
        return 4;
    }

    if (a1 === '') {
        return 0;
    }

    if (c3 === '') {
        return 8;
    }

    if (c2 === '') {
        return 7;
    }

    if (b1 === '') {
        return 3;
    }

    return -1;
};

export enum WinningModes { None, Draw, Win, Lose };

export function checkForWinning(players: string[], board: any[]): string | WinningModes {

  let winner = players.find(player => checkWinning(player, board));
  if (winner) return winner;

  return checkDraw(players, board)
    ? WinningModes.Draw
    : WinningModes.None;
};


export function checkWinning(player: string, board: string[]) {
  const [a1, a2, a3, b1, b2, b3, c1, c2, c3] = board;

  return ((a1 === a2 && a1 === a3 && (a1 === player)) || //first row
    (b1 === b2 && b1 === b3 && (b1 === player)) || //second row
    (c1 === c2 && c1 === c3 && (c1 === player)) || //third row
    (a1 === b1 && a1 === c1 && (a1 === player)) || //first column
    (a2 === b2 && a2 === c2 && (a2 === player)) || //second column
    (a3 === b3 && a3 === c3 && (a3 === player)) || //third column
    (a1 === b2 && a1 === c3 && (a1 === player)) || //diagonal 1
    (a3 === b2 && a3 === c1 && (a3 === player)) //diagonal 2
  );
}

export function checkDraw(players: string[], board: string[]) {
  const [a1, a2, a3, b1, b2, b3, c1, c2, c3] = board;
  const [player1, player2] = players;

  return (((a1 === player1) || (a1 === player2)) && ((b1 === player1)
    || (b1 === player2)) && ((c1 === player1) || (c1 === player2)) && ((a2 === player1)
      || (a2 === player2)) && ((b2 === player1) || (b2 === player2)) && ((c2 === player1)
        || (c2 === player2)) && ((a3 === player1) || (a3 === player2)) && ((b3 === player1)
          || (b3 === player2)) && ((c3 === player1) || (c3 === player2)));
}
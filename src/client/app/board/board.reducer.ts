import * as fromBoard from '../board/board.actions';

export interface State {
    human: string;
    ai: string;
    turn: number;
    cells: string[];
};

const initialState: State = {
    human: 'x',
    ai: 'o',
    turn: 0,
    cells: Array(9).fill('')
};

export function reducer(state = initialState, action: fromBoard.Actions): State {

    switch (action.type) {

        case fromBoard.ActionTypes.SET_CELL: {
            let cells = state.cells.slice(0);

            cells[action.payload.in] = action.payload.player;

            return Object.assign({}, state, <State>{
                cells: cells,
                turn: state.turn ? 0 : 1
            });
        }

        default:
            return state;
    }
}

export const getCells = (state: State) => state.cells;

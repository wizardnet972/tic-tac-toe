import * as winning from './winning.actions';
import { WinningModes } from '../shared/services/winner.service';

export interface State {
    winner: WinningModes | null;
};

const initialState: State = {
    winner: null
};

export function reducer(state = initialState, action: winning.Actions): State {

    switch (action.type) {
        case winning.ActionTypes.DRAW: {

            return Object.assign({}, state, <State>{
                winner: WinningModes.Draw
            });
        }

        case winning.ActionTypes.WIN: {

            return Object.assign({}, state, <State>{
                winner: WinningModes.Win
            });
        }

        case winning.ActionTypes.LOSE: {

            return Object.assign({}, state, <State>{
                winner: WinningModes.Lose
            });
        }

        default:
            return state;
    }
}

export const getWinner = (state: State) => state.winner;

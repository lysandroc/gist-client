import { Actions, ActionType } from './actions';
import { GistStateInterface } from './store';

export const reducer = (state: GistStateInterface, action: Actions): GistStateInterface => {
    switch (action.type) {
        case ActionType.FetchGist:
            return {
                ...state,
                ...action.payload,
            };
        case ActionType.SetGist:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

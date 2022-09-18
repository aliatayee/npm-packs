import { Action } from '../actions'
import { ActionType } from '../actions-type'
interface repositoriesState {
    data: string[]
    error: string | null
    loading: boolean
}
const initialState = {
    data: [],
    error: null,
    loading: false
}
const reducer = (
    state: repositoriesState = initialState,
    action: Action): repositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { error: null, loading: true, data: [] }
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { error: null, loading: false, data: action.payload }
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { error: action.payload, loading: false, data: [] }
        default:
            return state;
    }
}

export default reducer;
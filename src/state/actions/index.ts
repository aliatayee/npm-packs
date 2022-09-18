import { ActionType } from '../actions-type'
interface searchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES
}
interface searchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS
    payload: string[];
}
interface searchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR
    payload: string
}
export type Action =
    | searchRepositoriesAction 
    | searchRepositoriesSuccessAction 
    | searchRepositoriesErrorAction

import {createStore} from "redux"

const initialState = {
  players: [],
  startingTeam: [],
  subsituteTeam: []
}

const coachReducer = (state = initialState, action) => {
  return state
}

const REDUX_TOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(coachReducer, REDUX_TOOLS);
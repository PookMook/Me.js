import init from './init'
const initialState = {infos:init};

export function reducers(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case 'LOADJSON':
      return Object.assign({}, state, {infos:action.payload})
      break;
    case 'LOADINFO':
      console.log(action.payload);
      return Object.assign({}, state, {contact:decodeURIComponent(action.payload).substr(1)})
      break;
    default:
      return state
  }
}

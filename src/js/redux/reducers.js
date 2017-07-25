const initialState = {infos:[]};

export function reducers(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case 'LOADJSON':
      return Object.assign({}, state, {infos:action.payload})
      break;
    default:
      return state
  }
}

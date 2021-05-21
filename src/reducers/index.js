import { FETCH_TOOLS, TOOLS_POSTED } from '../actions/toolbox.js';


export default function(state = null, action) {
  switch (action.type) {
    case FETCH_TOOLS: {
      return action.payload;
    }
    case TOOLS_POSTED: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    default:
      return state;
  }
}

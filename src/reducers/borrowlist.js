
export default function borrowListReducer(state=[], action) {
    switch(action.type) {
        case 'BORROWLIST_SUCCESS': return action.payload;
    default: return state;
    }
  }
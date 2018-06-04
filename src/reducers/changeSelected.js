
export default function changeSelectedReducer(state=1, action) {
    switch(action.type) {
        case 'CHANGE_SELECTED_VALUE': return action.payload;
    default: return state;
    }
  }
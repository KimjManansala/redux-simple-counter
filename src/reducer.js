const initialState = {
  value: 23,
  color: "orange",
  counters : []
};

const reducer = (state = initialState, action) => {
  let curState = Object.assign({}, state);

  let { type } = action;
  let { value } = action;

  switch (type) {
    case "ADD":
      return { ...curState, value: curState.value + value };
    case "CHANGE_COLOR_COUNTER":
      return { ...curState, color: value };
    case 'SET_NUM_COUNTER':
        return{...curState, value: value}
    case 'INIT':
        return{value: 0, color: 'black'}
    default:
      return state;
  }
};





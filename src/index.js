const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(stateArray);
subscribe(() => render(getState()));
let x = 0;
let array = [];
function stateArray() {
  let store = getState();
  store.stateValue = x;
  x++;
  array.push(store);
  console.log(array);
}
function showSubscribe(e) {
  let allStateHere = document.getElementById("allStateHere");
  array.forEach(elm => {
    console.log(elm);
    let node = document.createElement("li");
    let text = document.createTextNode(elm);
    node.appendChild(text);
    allStateHere.appendChild(node);
  });
}

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById("increment");
incrementButton.addEventListener("click", e =>
  dispatch({ type: "ADD", value: 1 })
);
const decrementButton = document.getElementById("decrement");
decrementButton.addEventListener("click", e => {
  dispatch({ type: "ADD", value: -1 });
});
const addFive = document.getElementById("addFive");
const minusFive = document.getElementById("minusFive");
addFive.addEventListener("click", e => {
  dispatch({ type: "ADD", value: 5 });
});
minusFive.addEventListener("click", e => {
  dispatch({ type: "ADD", value: -5 });
});

const colorPick = document.getElementById("color-pick");
colorPick.addEventListener("change", e => {
  dispatch({ type: "CHANGE_COLOR_COUNTER", value: e.target.value });
});

const numStart = document.getElementById("counter-starter");
numStart.addEventListener("submit", evt => {
  evt.preventDefault();
  let num = parseInt(document.getElementById("counter").value);
  console.log(num);

  dispatch({ type: "SET_NUM_COUNTER", value: num });
});

// trigger an initial render
dispatch({ type: "INIT" });

// ADD ADITIONAL COUNTERS


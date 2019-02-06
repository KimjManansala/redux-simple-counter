const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    console.log(state.color)
    counterDOM.style.color = state.color
    counterDOM.innerHTML = state.value;
}
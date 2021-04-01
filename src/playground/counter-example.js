let count = 0
const addOne = () => {
  count++
  // 2) call our render function
  renderCounterApp()
}

const minusOne = () => {
  count--
  renderCounterApp()
}

const reset = () => {
  count = 0
  renderCounterApp()
}

// console.log(templateTwo)

const appRoot = document.getElementById('app')

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      {/* in this case only the count is changing, so that is what is being rerendered */}
      <button onClick={addOne}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={minusOne}>-1</button>
    </div>
  )

  ReactDOM.render(templateTwo, appRoot)
}

// 1) first we have to kick off the original render so our mini app initially renders
//!React only rerenders the part that changed
//!- so when a single piece of our application state changes, we can rerender the app/updating it w/o slowing down the user bc the virtualdom run behind the scenes will work its magic
//!-- the virtual dom algo will calculate if any changes need to be made, then it'll figure the minimal amount of changes, much faster
// everything is just an object the represents the JSX tree and we run algos to compare the 2
renderCounterApp()

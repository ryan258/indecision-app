// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const data = {
  title: 'Visibility Toggle',
  showDetails: false
  // buttonActive: false
}

const toggleVisibility = () => {
  data.showDetails = !data.showDetails
  render()
}

const render = () => {
  const jsx = (
    <div>
      <h1>{data.title}</h1>

      <button onClick={toggleVisibility}>{data.showDetails ? 'Hide Details' : 'Show Details'}</button>

      {data.showDetails && <p>Hey, you can see details now!</p>}
    </div>
  )

  ReactDOM.render(jsx, document.getElementById('app'))
}

render()

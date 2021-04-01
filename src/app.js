// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// end result @ indecision.mead.io
// - dom elements - https://reactjs.org/docs/dom-elements.html
// - synthetic events - https://reactjs.org/docs/events.html

const app = {
  title: 'App title',
  subtitle: 'It even has a subtitle!',
  // options: ['option 1', 'option 2', 'option 3']
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()
  // console.log('form submitted')
  // elements contains a list of all the elements and are index by their name attribute
  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = '' // clear the input field
    renderIndecisionApp()
  }
  console.log(app.options)
}

const onRemoveAll = () => {
  if (app.options.length > 0) {
    app.options = []
    renderIndecisionApp()
  }
}

const appRoot = document.getElementById('app')

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>

      {app.options.length > 0 ? <button onClick={onRemoveAll}>Remove All</button> : ''}

      <ol>
        <li>one...</li>
        <li>two</li>
        <li>three</li>
      </ol>
      {/* we're going to watch for the whole form to submit */}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderIndecisionApp()

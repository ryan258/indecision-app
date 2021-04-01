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

const numbers = [55, 101, 1000]

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>

      {app.options.length > 0 ? <button onClick={onRemoveAll}>Remove All</button> : ''}

      {/* JSX can handle arrays - when JSX sees an array it will render each item side-by-side */}
      {/* {[99, 98, 97, 'beep', null, undefined, true]} */}
      {/* ^^ will become {99}{98}{97}{'beep'} ...bools, undefined and null don't show up - JSX will take the array and render out the individual pieces */}

      {/* we can also render JSX inside JSX */}
      {/* {<p>beep</p>} */}
      {/* which means we can also render an array of JSX in JSX */}

      {/* when we're using JSX in arrays we need to have a unique key prop - it allows JSX to work its optimization magic */}
      {/* {
        [
          <p key="1">zap</p>,
          <p key="2">zip</p>,
          <p key="3">zoom</p>
        ]
      } */}

      {/* usually we'll have an array of other JSX that we want to render to the screen */}

      {/* {numbers.map((num) => (
        <p key={num}>Number: {num}</p>
      ))} */}

      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
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

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const app = {
  title: 'App title',
  subtitle: 'It even has a subtitle!',
  options: ['option 1', 'option 2', 'option 3']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

    <ol>
      <li>one...</li>
      <li>two</li>
      <li>three</li>
    </ol>
  </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)

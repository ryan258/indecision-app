import React from 'react'
import ReactDOM from 'react-dom'

//! But passing through children is quite useful
const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  )
}

ReactDOM.render(
  <Layout>
    <div>
      <h1>Page title</h1>
      <p>Page content</p>
    </div>
  </Layout>,
  document.getElementById('app')
)

/* //! 1 way is to pass it through props
const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.content}
      <p>footer</p>
    </div>
  )
}

const template = (
  <div>
    <h1>Page title</h1>
    <p>Page content</p>
  </div>
)

ReactDOM.render(<Layout content={template} />, document.getElementById('app')) */

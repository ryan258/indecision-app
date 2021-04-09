console.log('utils.js is running')

//! NAMED EXPORTS
const square = (x) => x * x

const add = (a, b) => a + b

// export { square, add }

const subtract = (a, b) => a - b

export { square, add, subtract as default }

/* <{{name}}> primative component */
import functionalCompontent from './{{name}}.functional'
import classCompontent from './{{name}}.class'

export {
  functionalCompontent as {{name}},
  classCompontent as {{name}}Class
}
/* default {{name}} component is functional */
export default functionalCompontent

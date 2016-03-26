import React from 'react'
/**
 * Generate Dom Node functional Component
 * @param  string tagName domNode tagname
 * @return function         returns function component dom node
 */
const createFunctionalComponent = function (tagName, config, debug) {
  const FunctionalComponent = ({children, customComponent, ...props}) => {
    // const element = customComponent || tagName
    if (customComponent) {
      // console.log(arguments)
    }
    const element = customComponent || tagName.toLowerCase()
    var properties = { ...props }

    if (properties.debug) {
      // do debug logs here
    }

    if (__DEV__) {
      /* if Dev mode on, show which component is doing the rendering */
      let name = `${tagName}.functional'`
      if (properties['data-react-component']) {
        name = properties['data-react-component']
      }
      if (customComponent) {
        properties['data-component-override'] = customComponent.name
      }
      properties['data-react-component'] = name
    }

    return React.createElement(element, properties, children)
  }

  if (__DEV__) {
    // Output Named Components for React Dev tools
    return namedFunction(capitalize(tagName), FunctionalComponent)
  }

  return FunctionalComponent
}

/* Debug utils for getting names on dynamicDomNode */
function namedFunction (name, fn) {
  return new Function('fn',
      'return function ' + name + '(){ return fn.apply(this,arguments)}'
  )(fn)
}
function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default createFunctionalComponent

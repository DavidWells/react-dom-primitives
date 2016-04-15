import React, { Component } from 'react'
/**
 * Generate Dom Node functional Component
 * @param  string tagName domNode tagname
 * @return function         returns function component dom node
 */
function createClassComponent (n, config) {
  //https://github.com/andreypopp/rethemeable/blob/master/src/Themeable.js#L21
  return class DOMClassPrimative extends Component {
    static displayName = `${n}`;
    // https://github.com/andreypopp/rethemeable/blob/master/src/Themeable.js#L17
    render () {
      const { customComponent, children } = this.props
      const element = customComponent || n.toLowerCase()
      var props = { ...this.props }

      if (__DEV__) {
        /* if Dev mode on, show which component is doing the rendering */
        let name = `${n}.class'`
        if (this.props['data-react-component']) {
          name = this.props['data-react-component']
        }
        props['data-react-component'] = name
      }

      return React.createElement(element, props, children)
    }
  }
}

export default createClassComponent

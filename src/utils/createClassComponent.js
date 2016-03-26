import React, { Component } from 'react'
/**
 * Generate Dom Node functional Component
 * @param  string tagName domNode tagname
 * @return function         returns function component dom node
 */
function createClassComponent (n, config) {
  return class DOMClassPrimative extends Component {
    static displayName = `${n}`;

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

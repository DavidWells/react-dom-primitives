import React, { PropTypes, Component } from 'react'
import { Button, Div, A, H1, H2, Table, Tbody, Tr, Td, P } from '../src/primatives'

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  onTextChange (evt) {
    console.log('editable area value', evt.target.value)
  }
  handleClick () {

  }
  render () {
    return (
      <Div>
        <Button>button</Button>
          <Table>
            <Tbody>
            <Tr>
              <Td>Jill</Td>
              <Td>SmiTh</Td>
              <Td>50</Td>
            </Tr>
            <Tr>
              <Td>Eve</Td>
              <Td>Jackson</Td>
              <Td>94</Td>
            </Tr>
            </Tbody>
          </Table>
      </Div>
    )
  }
}

module.exports = App
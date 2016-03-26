import React, { PropTypes } from 'react'

const Navigation = ({children, className, ...other}) => {
  const classes = ''

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  )
}

export default Navigation
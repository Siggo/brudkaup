import React from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Container = ({component: Component, id}) => {
  return (
    <div className='subpage' id={id}>
      <Component />
    </div>
  )
}

export default Container

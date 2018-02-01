import React from 'react'

const Container = ({component: Component, id}) => {
  return (
    <div className='subpage' id={id}>
      <Component />
    </div>
  )
}

export default Container

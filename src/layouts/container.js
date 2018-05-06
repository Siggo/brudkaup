import React from 'react'

const Container = ({component: Component, id}) => {
  return (
    <div className='subpage' id={id}>
    	<div className='container'>
      		<Component />
      	</div>
    </div>
  )
}

export default Container

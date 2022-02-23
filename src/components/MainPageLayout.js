import React from 'react'
import Nav from './Nav';
import Title from './Title';

const MainPageLayout = ({children}) => {
  return (
    <div>
      <Title Title="Box Office" subtitle="Are you looking for an movie or an actor"/>
       <Nav />

     {children}
    </div>
  )
}

export default MainPageLayout

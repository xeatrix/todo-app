import React from 'react'
import { Outlet } from 'react-router-dom';
import NavButton from './NavButton';

function Navigation() {
  return (<>
      <h1 className='font-bold text-center text-3xl select-none mt-5 mb-10'>#todo</h1>
      <ul className='grid grid-cols-1 border-b-2 sm:grid-cols-3'>
        <NavButton to=''>All</NavButton>
        <NavButton to='active'>Active</NavButton>
        <NavButton to='completed'>Completed</NavButton>
      </ul>
      <Outlet />
    </>);
}

export default Navigation;
import { NavLink } from 'react-router-dom';

function NavButton(props) {
  return (<li className='mx-auto font-medium px-8 py-4 mb-2'>
    <NavLink className={({
      isActive
    }) => isActive ? 'text-blue-500 bg-slate-50 px-8 py-4 rounded-xl' : 'hover:bg-slate-50 px-8 py-4 rounded-xl'} 
    to={props.to}>{props.children}</NavLink>
  </li>);
}

export default NavButton;
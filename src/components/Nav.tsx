import React from 'react';
import { NavLink } from 'react-router-dom';
export const Nav:React.FC = () => {
	return <nav className='header'>
		<NavLink exact to='/' activeClassName={'active'}>Home</NavLink>
		<NavLink exact to='/about' activeClassName={'active'}>About</NavLink>
		<NavLink exact  to='/todo/123' activeClassName={'active'}>My Todo List</NavLink>
	</nav>
}
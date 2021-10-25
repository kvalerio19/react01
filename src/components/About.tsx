import React from 'react';
import { Calculator } from './Calculator/Calculator';
import { Link } from 'react-router-dom';
export const About = () => {
	return <><Calculator/>
		<Link to='/'> Back to Home</Link>
	</>
}
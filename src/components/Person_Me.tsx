import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const PersonMe: React.FC = (props) => {
	const routeName = 'PersonMe';
	console.log(`Render ${routeName} Route`);

	return (
		<>
			<p>{`I am the ${routeName} route`}</p>
			<Link to='details'>details</Link>
			<Outlet />
			<pre>
				<code>{JSON.stringify(props, null, 2)}</code>
			</pre>
		</>
	);
};

export default PersonMe;

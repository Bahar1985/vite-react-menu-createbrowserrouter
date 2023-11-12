import { NavLink } from "react-router-dom";

export const Nav = () => {
	return <nav>
		<ul className="flex gap-2 bg-slate-200 p-1 content">
			<li><NavLink to="/">Welcome</NavLink></li>
			<li><NavLink to="/info">Info</NavLink></li>
			<li>About</li>
		</ul>
	</nav>;
};
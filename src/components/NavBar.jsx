import { Link } from "react-router-dom";
import "../styles/navbar.css"

const NavBar = () => {
	return (
		<>
			<div className="side-nav">

				<li className="navbar-list">
					<Link className="browse-link" to="/surfboards" replace>
						Browse
					</Link>
					<Link className="book-link" to="/book" replace>
						Book
					</Link>
					<Link className="account-link" to="/users/:id" replace>
						My Account
					</Link>
					<button className="logout-button">
						Logout
					</button>
				</li>

			</div>
		</>
	);
};

export default NavBar;
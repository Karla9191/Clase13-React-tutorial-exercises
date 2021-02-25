import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = ["Link to google.com", "Link to facebook.com", "Link to amazon.com"];

const content = (
		<ul className="nav">
			<li className="nav-item">
				<a className="nav-link" href="#">
					{navlinkItems[0]}
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					{navlinkItems[1]}
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					{navlinkItems[2]}
				</a>
			</li>
		</ul>
);

ReactDOM.render(content, document.querySelector("#myDiv"));

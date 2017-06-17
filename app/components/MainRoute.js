import React, {Component} from "react";

var MainRoute = React.createClass({
	render: function(){
		return(
			<div>
			  <nav>
			  	<div className="nav-wrapper">
				  	<a href="/" className="brand-logo">Quotes App</a>
				  	<ul id="nav-mobile" className="right hide-on-med-and-down">
				  		<li><a href="/">Home</a></li>
				  		<li><a href="/favorites">Favorites</a></li>
				  	</ul>
			  	</div>
			  </nav>
			  <div className="row">
			  		{this.props.children}
			  </div>
		  	</div>
		);
	}
});

export default MainRoute;

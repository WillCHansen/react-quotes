import React, {Component} from "react";
import QuoteForm from "./QuoteForm";
import Cards from "./Cards";
import API from "../utils/API";

// very basic component to get started 

var Main = React.createClass( {
	getInitialState: function(){
		this.getUpdate();
		return({
			cardList: []
		});
	},

	getUpdate: function(){
		var self = this;
		API.getQuotes().then(function(response){
			console.log("we got "+response+" from the database");
				self.setState({cardList:response.data});	
		})
	},

	render: function(){
		return(
			<div>
			  <QuoteForm getUpdate = {this.getUpdate}/>
			  <Cards cardList={this.state.cardList} getUpdate={this.getUpdate}/>
		  	</div>
		);
	}
});

export default Main;

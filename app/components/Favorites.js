import React, {Component} from "react";
import Cards from "./Cards";
import API from "../utils/API";
var Favorites = React.createClass({
	getInitialState: function(){
		this.getFavoriteCards();
		return({
			cardList: []
		});
	},
	getFavoriteCards: function(){
		var self = this;
		API.getQuotes().then(function(response){
			console.log("we got "+response+" from the database");
			var tempArr = [];
			for(var i = 0;i<response.data.length;i++){
				if(response.data[i].favorited){
					tempArr.push(response.data[i])
				}
			}
			console.log(tempArr);
			self.setState({cardList: tempArr});
		})
	},
	render: function(){
		return(
			<div>
			  <h1 className="center-align">These are your favorite Quotes</h1>
			  <Cards cardList={this.state.cardList} getUpdate={this.getFavoriteCards}/>
		  	</div>
		);
	}
});

export default Favorites;